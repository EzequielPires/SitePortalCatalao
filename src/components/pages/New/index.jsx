import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import { Col, Container, Row } from "react-bootstrap";
import { BannerContext } from '../../../contexts/BannerContext';
import { VideoProvider } from "../../../contexts/VideoPlayerContext";
import { AnnouncementAside } from "../../Announcement/AnnouncementAside";
import { CardNewsHorizontal } from "../../Cards/CardNewsHorizontal";
import { VideoNews } from "../../Videos/VideoNews";
import { NewHeader } from "../NewHeader";

import styles from './styles.module.scss';

export default function New({ post, postCategories, banner, videos }) {
    const [newCategory, setNewCategory] = useState(null);
    const {
        getBannersPublication,
        homeLateralPublication
    } = useContext(BannerContext);
    const [url, setUrl] = useState('');

    function createMarkup(content) {
        return { __html: content };
    }
    const handleCategory = () => {
        post.category.forEach(item => {
            item.id === post.primary_category ? setNewCategory(item) : null;
        });
    }
    const handleBanners = async () => {
        await getBannersPublication();
      }
    useEffect(() => {
        handleCategory()
        post ? setUrl(location.href) : null;
        handleBanners();
    }, []);

    if (post.message) {
        return (
            <Container>
                <div>{post.message}</div>
            </Container>
        )
    }

    if (!post) return <div>loading...</div>

    return (
        <VideoProvider>
            <Head>
                <title>{`${post.title} | Portal Catalão`}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Portal Catalão Internet Service" />
                <meta name="title" content={post.title} />
                <meta name="description" content={post.introduction} />
                <link rel="canonical" href={`/noticias/${post.id_string ?? ''}`} />
                <meta property="og:title" content={post.title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={post.introduction} />
                <meta property="og:image" content={`https://portalcatalao.com.br/storage/${post.thumb.size.medium ?? null}`} />
                <meta property="og:url" content={url} />
            </Head>
            <div className={styles.news + " mb-5"}>
                {post ?
                    <>
                        <NewHeader post={post} />
                        <Container className="mt-5">
                            <Row className="mt-4">
                                <Col xl={8}>
                                    <div className={styles.newsBody}>
                                        <div className={styles.content}>
                                            {post.content ? <div dangerouslySetInnerHTML={createMarkup(post.content)} /> : null}
                                        </div>
                                    </div>
                                    <div className="news-footer">
                                        <h3 className="mb-4 cl-primary">Mais sobre {newCategory ? newCategory.name : null}</h3>
                                        <ul>
                                            <hr className="mt-0"></hr>
                                            {postCategories.length > 0 ? postCategories.map((item) =>
                                                <li className="d-flex justify-content-center" key={item.id}>
                                                    <CardNewsHorizontal news={item} />
                                                </li>
                                            ) : null}
                                        </ul>
                                        <VideoNews category={newCategory ? newCategory.id_string : null} videosCategory={videos} />
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <AnnouncementAside banner={homeLateralPublication} />
                                </Col>
                            </Row>
                        </Container>
                    </>
                    : null}
            </div>
        </VideoProvider>
    )
}