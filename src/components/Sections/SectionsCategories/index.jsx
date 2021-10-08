import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import { CardNewsHorizontal } from "../../Cards/CardNewsHorizontal";
import { AnnouncementAside } from "../../Announcement/AnnouncementAside";
import { VideoNews } from "../../Videos/VideoNews";

import styles from './styles.module.scss';

export function SectionsCategories({ title, category, news, banner, videos }) {

    if (!news) return <div>loading...</div>
    return (
        <div className={styles.sectionsCategories}>
            {news.length > 0 ? (
                <>
                    <hr className="mb-4"></hr>
                    <Container className="d-flex align-items-center">
                        <h2 className={styles.title}>{title}</h2>
                    </Container>
                    <hr className="mt-4"></hr>
                    <Container className={styles.category + " p-3"}>
                        <Row>
                            <Col lg={8}>
                                {news.map((item, index) =>
                                    <div className="d-flex justify-content-center" key={item.id}>
                                        {
                                            index < 3 ? <CardNewsHorizontal news={item} /> : null
                                        }
                                    </div>
                                )}
                                <div className="d-flex justify-content-center w-100">
                                    <Link
                                        href={`/noticias/${category}`}
                                    >
                                        <a className="btn-primary mb-4">
                                            Ver mais
                                        </a>
                                    </Link>
                                </div>
                                <VideoNews category={category} videosCategory={videos}/>
                            </Col>
                            <Col lg={4}>
                                <AnnouncementAside banner={banner}/>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-center w-100">
                        </div>
                    </Container>
                </>
            ) : null
            }
        </div>
    );
}