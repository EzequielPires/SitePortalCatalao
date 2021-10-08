import Head from "next/head";
import { useContext, useEffect } from "react";
import { BannerTop } from "../components/Announcement/BannerTop";
import { ClassifiedsSection } from "../components/Sections/ClassifiedsSection";
import { GuiaSection } from "../components/Sections/GuiaSection";
import { NewsSection } from "../components/Sections/NewsSection";
import { SectionsCategories } from "../components/Sections/SectionsCategories";
import { BannerContext } from "../contexts/BannerContext";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { fetcher, tolken, urlBase } from "../Helper/fetch-wrapper";
import ImgDefault from '../assets/image_og.png';

export default function Home({
  posts,
  cidade,
  educacao,
  saude,
  politica,
  esporte,
  categories,
  bannerPolitica,
  bannerSaude,
  bannerEducacao,
  bannerEsporte,
  videosPosts,
  videosEducação,
  videosSaude,
  videosPolitica,
  videosEsporte
}) {
  const { handleColor, handleCategories } = useContext(CategoriesContext);
  const {
    getAllBanners,
    homeTopo,
    homeSecundario,
    homeRecente,
    homeClassificados } = useContext(BannerContext);
  const handleBanners = async () => {
    await getAllBanners();
  }
  useEffect(() => {
    handleColor("var(--primary)");
    handleCategories(categories);
    handleBanners();
  }, []);


  if (!posts) return <div>loading...</div>
  if (posts.error) {
    return <p>Houve um erro</p>
  }
  return (
    <div className="py-4 home mt-4 mt-lg-0">
      <Head>
        <title>Portal Catalão - O Portal de notícias e entretenimento de Catalão e região.</title>
        <meta name="description" content="Últimas notícias do Brasil e da nossa catalão/região goiana com os mais diversos assuntos da atualidade: educação, saúde, política, economia, emprego, meio ambiente, tecnologia, cultura e entretenimento." />
        <meta property="og:image" content={`https://portalcatalao.com.br/${ImgDefault.src}`} />
      </Head>
      {homeTopo ? <BannerTop banner={homeTopo} /> : <BannerTop banner={null} />}
      {
        posts && !posts.message && posts.length >= 8 ?
          <NewsSection
            news={posts}
            cidade={cidade}
            bannerRecente={homeRecente}
            bannerSecundario={homeSecundario}
            videos={videosPosts}
          />
          : null
      }
      {
        politica ?
          <SectionsCategories
            title='Política'
            category="politica"
            news={politica}
            banner={bannerPolitica}
            videos={videosPolitica}
          />
          : null
      }
      {
        saude ?
          <SectionsCategories
            title='Saúde'
            category="saude"
            news={saude}
            banner={bannerSaude}
            videos={videosSaude}
          />
          : null
      }
      {
        educacao ?
          <SectionsCategories
            title='Educação'
            category="educacao"
            news={educacao}
            banner={bannerEducacao}
            videos={videosEducação}
          />
          : null
      }
      {
        esporte ?
          <SectionsCategories
            title='Esporte'
            category="esporte"
            news={esporte}
            banner={bannerEsporte}
            videos={videosEsporte}
          />
          : null
      }
      <GuiaSection />
      <ClassifiedsSection
        banner={homeClassificados}
      />
    </div>
  );
}

export async function getStaticProps() {
  var totalSections = 0;
  var inicial = 0;
  let final = 0;

  let posts = null;
  let cidade = null;
  let educacao = null;
  let saude = null;
  let politica = null;
  let esporte = null;
  let array_ignore = [];

  fetch(urlBase + 'publication/list?limit=12', {
    headers: { 'Authorization': 'Bearer ' + tolken }
  })
    .then(response => response.json())
    .then(
      response => {
        posts = response.data;
        response.data.forEach(item => {
          array_ignore.push(item.id);
        })
        fetch(urlBase + `publication/list?category=20&limit=4&ignore[]=${array_ignore.join('&ignore[]=')}`, {
          headers: { 'Authorization': 'Bearer ' + tolken }
        })
          .then(response => response.json())
          .then(
            response => {
              cidade = response.data;
              response.data.forEach(item => {
                array_ignore.push(item.id);
              })
              fetch(urlBase + `publication/list?category=educacao&limit=4&ignore[]=${array_ignore.join('&ignore[]=')}`, {
                headers: { 'Authorization': 'Bearer ' + tolken }
              })
                .then(response => response.json())
                .then(
                  response => {
                    educacao = response.data;
                    response.data.forEach(item => {
                      array_ignore.push(item.id);
                    })
                    fetch(urlBase + `publication/list?category=saude&limit=4&ignore[]=${array_ignore.join('&ignore[]=')}`, {
                      headers: { 'Authorization': 'Bearer ' + tolken }
                    })
                      .then(response => response.json())
                      .then(
                        response => {
                          saude = response.data;
                          response.data.forEach(item => {
                            array_ignore.push(item.id);
                          })
                          fetch(urlBase + `publication/list?category=politica&limit=4&ignore[]=${array_ignore.join('&ignore[]=')}`, {
                            headers: { 'Authorization': 'Bearer ' + tolken }
                          })
                            .then(response => response.json())
                            .then(
                              response => {
                                politica = response.data;
                                response.data.forEach(item => {
                                  array_ignore.push(item.id);
                                })
                                fetch(urlBase + `publication/list?category=esporte&limit=4&ignore[]=${array_ignore.join('&ignore[]=')}`, {
                                  headers: { 'Authorization': 'Bearer ' + tolken }
                                })
                                  .then(response => response.json())
                                  .then(
                                    response => {
                                      esporte = response.data;
                                      response.data.forEach(item => {
                                        array_ignore.push(item.id);
                                      })
                                    })
                              })
                        })
                  })
            })
      }
    );
    

  const videosPolitica = await fetcher(`video/list?category=politica`);
  const videosPosts = await fetcher(`video/list`);
  const videosEducação = await fetcher(`video/list?category=educacao`);
  const videosSaude = await fetcher(`video/list?category=saude`);
  const videosEsporte = await fetcher(`video/list?category=esporte`);


  const categories = await fetcher('category/tree');

  const bannerLateral = await fetcher('banner/list?type=4&active=true');

  let bannerPolitica = [];
  let bannerSaude = [];
  let bannerEducacao = [];
  let bannerEsporte = [];

  const getTotalSections = () => {
    educacao ? totalSections = totalSections + 1 : null;
    saude ? totalSections = totalSections + 1 : null;
    politica ? totalSections = totalSections + 1 : null;
    esporte ? totalSections = totalSections + 1 : null;
  }

  const spliceArray = () => {
    if (!bannerLateral.message) {
      var b = bannerLateral.splice(inicial, final);
      return b;
    }
    return [];
  }

  getTotalSections();

  bannerLateral ? final = Math.floor(bannerLateral.length / totalSections) : null;

  const getBannerSections = () => {
    politica ? bannerPolitica = spliceArray() : null;
    saude ? bannerSaude = spliceArray() : null;
    educacao ? bannerEducacao = spliceArray() : null;
    esporte ? bannerEsporte = spliceArray() : null;
    if (bannerLateral.length > 0) {
      if (politica) {
        bannerLateral.forEach(item => {
          bannerPolitica.push(item);
        })
      } else {
        if (saude) {
          bannerSaude.forEach(item => {
            bannerPolitica.push(item);
          })
        } else {
          if (educacao) {
            bannerEducacao.forEach(item => {
              bannerPolitica.push(item);
            })
          } else {
            if (esporte) {
              bannerEsporte.forEach(item => {
                bannerPolitica.push(item);
              })
            }
          }
        }
      }
    }
  }

  getBannerSections();

  return {
    props: {
      posts,
      cidade,
      educacao,
      saude,
      politica,
      esporte,
      categories,
      bannerPolitica,
      bannerSaude,
      bannerEducacao,
      bannerEsporte,
      videosPosts,
      videosEducação,
      videosSaude,
      videosPolitica,
      videosEsporte
    },
    revalidate: 400,
  }

}
