import { useContext, useState, useEffect } from "react";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import { CategoriesContext } from "../../../contexts/CategoriesContext";
import { AnnouncementAside } from "../../Announcement/AnnouncementAside";
import { CardNewsHorizontal } from "../../Cards/CardNewsHorizontal";
import { fetcher } from '../../../Helper/fetch-wrapper';
import ImgDefault from '../../../assets/image_og.png';

import styles from './styles.module.scss';

export default function Category({ id, data, banner }) {
    const [posts, setPosts] = useState([]);
    const [quantity, setQuantity] = useState(data.length);
    const [limit, setLimit] = useState(15);
    const [page, setPage] = useState(2);
    const { getPrimary } = useContext(CategoriesContext);

    const handleCategoryPrimary = async () => {
        await getPrimary(id);
    };

    useEffect(() => {
        setPosts(data);
        handleCategoryPrimary();
    }, [data]);

    const getMorePost = async () => {
        const newsPost = await fetcher(`publication/list?category=${id}&limit=${limit}&page=${page}`);
        setQuantity(newsPost.length);
        setPosts([...posts, ...newsPost]);
        setPage(page + 1);
    }
    if (posts.message) {
        return (
            <Container>
                <div>{posts.message}</div>
            </Container>
        )
    }
    if (posts.length <= 0) {
        return (
            <Container className="mt-4">
                <h4>Nenhum resultado encontrado para categoria {id}</h4>
            </Container>
        )
    }
    if (!posts) return <div>loading...</div>
    return (
        <div className="news-list">
            <Head>
                <title>Portal Catalão - O Portal de notícias e entretenimento de Catalão e região.</title>
                <meta name="description" content="Últimas notícias do Brasil e da nossa catalão/região goiana com os mais diversos assuntos da atualidade: educação, saúde, política, economia, emprego, meio ambiente, tecnologia, cultura e entretenimento." />
                <meta property="og:image" content={`https://portalcatalao.com.br/${ImgDefault.src}`} />
            </Head>
            <Container>
                <div className="news-list-body mt-4">
                    <Row>
                        <Col xl={8}>
                            <ul>
                                {posts.map((item) =>
                                    <li className="d-flex justify-content-center" key={item.id}>
                                        <CardNewsHorizontal news={item} />
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
                            <AnnouncementAside banner={banner} />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );

}