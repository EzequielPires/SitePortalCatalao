import { Announcement } from '..';
import { Carousel, Container } from 'react-bootstrap';

import styles from './styles.module.scss';
import { Skeleton } from '../../Skeleton';

export function BannerTop({ banner }) {
    return (
        <section
            id="bannersSection"
            className={styles.bannersSection + " d-none d-lg-flex align-items-center justify-content-center"}>
            <Container>
                <div className={styles.content}>
                    {!banner || banner.message ? <Skeleton /> :
                        <Carousel fade className="align-items-center justify-content-center">
                            {banner.map(item => (
                                <Carousel.Item key={item.id}>
                                    <Announcement announcement={item} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    }
                </div>
            </Container>
        </section>
    );
}