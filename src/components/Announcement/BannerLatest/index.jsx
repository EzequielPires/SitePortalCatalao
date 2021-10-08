import { Carousel } from "react-bootstrap";
import { Announcement } from "..";
import styles from './styles.module.scss';

export function BannerLatest({ banner }) {
    if (!banner || banner.message) {
        return (
            <section
                id="bannerLatest"
                className={styles.bannerLatest + " d-none d-lg-flex align-items-center justify-content-center"}>
                <Announcement announcement={null} />
            </section>
        )
    }
    return (
        <section
            id="bannerLatest"
            className={styles.bannerLatest + " d-none d-lg-flex align-items-center justify-content-center"}>
            {banner.length > 1 ?
                <Carousel fade className="align-items-center justify-content-center">
                    {banner.map(item => (
                        <Carousel.Item key={item.id}>
                            <Announcement announcement={item} />
                        </Carousel.Item>
                    ))}
                </Carousel>
                : <Announcement announcement={banner[0]} />
            }
        </section>
    );
}