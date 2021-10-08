import { useRouter } from "next/router";
import { fetcher } from "../../Helper/fetch-wrapper";
import Head from 'next/head';
import { Breadcrumb } from "../../components/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { CardNewsHorizontal } from "../../components/Cards/CardNewsHorizontal";
import { AnnouncementAside } from "../../components/Announcement/AnnouncementAside";

import styles from "../../styles/pages/Search.module.scss";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ImgDefault from '../../assets/default.jpg';

export default function Search({ news, bannerLateral }) {
    const router = useRouter();
    const { s } = router.query;
    const { getCategories } = useContext(CategoriesContext);
    const [posts, setPosts] = useState();
    const [quantity, setQuantity] = useState();
    const [limit, setLimit] = useState(15);
    const [page, setPage] = useState(2);

    
    const handleCategory = async () => {
        await getCategories();
    }

    useEffect(() => {
        setPosts(news);
        setQuantity(news.length);
        handleCategory();
    }, [s])

    const getMorePost = async () => {
        const newsPost = await fetcher(`publication/list?search=${s}&limit=${limit}&page=${page}`);
        setQuantity(newsPost.length);
        setPosts([...posts, ...newsPost]);
        setPage(page + 1);
    }

    if (!posts) return <div>loading...</div>
    if (posts.length === 0) return <Container>Nenhuma notícia encontrada...</Container>

    return (
        <div className="news-list mb-4 py-4">
            <Head>
                <title>{s}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Portal Catalão Internet Service" />
                <meta name="title" content={s} />
                <meta name="description" content={`Exibindo resultados para ${s} no Portal Catalão`} />
                
                <meta property="og:title" content={s} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={`Exibindo resultados para ${s} no Portal Catalão`} />
                <meta property="og:image" content={`https://portalcatalao.com.br/storage/${ImgDefault}`} />
                
            </Head>
            <Breadcrumb rota={null} />
            <Container>
                <h1 className={styles.title}>Exibindo resultados para: {s}</h1>
                <div className="news-list-body mt-4">
                    <Row>
                        <Col xl={8}>
                            <ul>
                                {posts.map((item) =>
                                    <li
                                        className="d-flex justify-content-center"
                                        key={item.id_string}
                                    >
                                        <CardNewsHorizontal news={item[0]} />
                                    </li>
                                )}
                            </ul>
                            <button
                                className={styles.buttonGetMorePost}
                                style={quantity < limit ? { display: 'none' } : null}
                                onClick={getMorePost}
                            >
                                Ver mais
                            </button>
                        </Col>
                        <Col xl={4}>
                            <AnnouncementAside banner={bannerLateral}/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export async function getServerSideProps(context) {
    const {s} = context.query;
    
    const news = await fetcher(`publication/list?search=${s}&limit=15`);
    if (news.length === 0 || news.message) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            news
        }
    }
}