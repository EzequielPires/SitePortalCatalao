import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

import { NewsListing } from '../NewsListing';
import { NewsListingCities } from '../NewsListingCities';
import { MostViewedNews } from '../MostViewedNews';
import { NewsLatest } from '../NewsLatest';
import { VideoNews } from '../../Videos/VideoNews';

import styles from './styles.module.scss';
import { BannerSecondary } from '../../Announcement/BannerSecondary';
import { BannerLatest } from '../../Announcement/BannerLatest';

export function NewsSection({ news, cidade, bannerRecente, bannerSecundario, videos }) {
    return (
        <section id="newsSection" className={styles.newsSection}>
            <Container>
                <NewsLatest post={news} />
                <Row className="mt-2">
                    <Col xl={8}>
                        <NewsListing post={news} />
                        <div className="d-flex justify-content-center w-100">
                            <Link
                                href={`/noticias`}
                            >
                                <a className="btn-primary mb-4">
                                    Ver mais
                                </a>
                            </Link>
                        </div>
                        <div className="d-none d-md-block w-100">
                            <BannerSecondary banner={bannerSecundario} />
                        </div>
                        <VideoNews videosCategory={videos}/>
                    </Col>
                    <Col xl={4}>
                        <div className="my-4 mt-xl-0 d-flex justify-content-center">
                            {
                                !bannerRecente ?
                                    <BannerLatest banner={null} /> :
                                    <BannerLatest banner={bannerRecente} />
                            }
                        </div>
                        <div className=" d-none d-xl-block mt-3">
                            <NewsListingCities posts={cidade} />
                        </div>
                        <div className="d-none d-xl-block mt-3">
                            <MostViewedNews posts={news} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}