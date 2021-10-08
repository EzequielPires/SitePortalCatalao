import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import { Announcement } from '..';
import styles from './styles.module.scss'

export function BannerSecondary({ banner }) {
    return (
        <section
            id="bannerSecondary"
            className={" d-none d-lg-flex align-items-center justify-content-center"}>

            {!banner ? null :
                <Carousel fade className="d-flex w-100 align-items-center justify-content-center">
                    {banner.map(item => (
                        <Carousel.Item key={item.id}>
                            <Announcement announcement={item} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            }
        </section>
    );
}