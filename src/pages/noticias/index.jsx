import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import { AnnouncementAside } from "../../components/Announcement/AnnouncementAside";
import { Breadcrumb } from "../../components/Breadcrumb";
import { CardNewsHorizontal } from "../../components/Cards/CardNewsHorizontal";
import { fetcher } from "../../Helper/fetch-wrapper";
import { useContext, useEffect, useState } from "react";

import styles from '../../styles/pages/Noticias.module.scss';
import { BannerTop } from "../../components/Announcement/BannerTop";
import { BannerContext } from "../../contexts/BannerContext";

export default function Noticias({ news, bannerLateral }) {
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(2);
  const [limit, setLimit] = useState(15);
  const [quantity, setQuantity] = useState(news.length);
  const {
    getBannersPublication,
    homeTopo,
    homeLateral } = useContext(BannerContext);


  useEffect(() => {
    const handleBanners = async () => {
      await getBannersPublication();
    }
    handleBanners();
  }, []);

  useEffect(() => {
    setPosts(news);
    console.log(news);
  }, [news]);

  const getMorePost = async () => {
    const newsPost = await fetcher(
      `publication/list?&limit=${limit}&page=${page}`
    );
    setQuantity(newsPost.length);
    setPosts([...posts, ...newsPost]);
    setPage(page + 1);
  };
  if (!posts) return <div>loading...</div>;
  return (
    <div className="news-list mb-4 py-4">
      <Head>
        <title>{posts[0].title}</title>
      </Head>
      {homeTopo ? <BannerTop banner={homeTopo} /> : null}
      <Breadcrumb rota={null} />
      <Container>
        <div className="news-list-body mt-4">
          <Row>
            <Col xl={8}>
              <ul>
                {posts.map((item) => (
                  <li className="d-flex justify-content-center" key={item.id}>
                    <CardNewsHorizontal news={item} />
                  </li>
                ))}
              </ul>
              <button
                className={styles.buttonGetMorePost}
                style={quantity < limit ? { display: "none" } : null}
                onClick={getMorePost}
              >
                Ver mais
              </button>
            </Col>
            <Col xl={4}>
              <AnnouncementAside banner={homeLateral} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
export async function getStaticProps() {
  const news = await fetcher("publication/list");
  const bannerLateral = await fetcher('banner/list?type=4&status=true');
  if (!news || news.length === 0 || news.message) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      news,
      bannerLateral
    },
    revalidate: 1200,
  };
}
