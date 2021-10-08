import Link from 'next/link';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { CardVideo } from '../../Cards/CardVideo';
import { SkeletonNewsCardVideos, SkeletonTitle } from '../../../SkeletonLoading';

import styles from './styles.module.scss';
import { fetcher } from '../../../Helper/fetch-wrapper';

SwiperCore.use([Navigation]);

export function VideoNews({category, videosCategory}) {
    const [videos, setVideos] = useState(null);
    async function handlePosts() {
        if(category) {
            const data = await fetcher(`video/list?category=${category}`);
            setVideos(data);
        } else {
            const data = await fetcher(`video/list`);
            setVideos(data);
        }
    }

    useEffect(() => {
        videosCategory && videosCategory.length > 0 ? setVideos(videosCategory) : handlePosts();
    }, [])
    if(!videos || videos.length === 0) {
        return null;
    }
    return (
        <div id="videoNews" className={styles.videoNews}>
            <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
                navigation
            >
                <Link href={`/videos/${videos[0].id_string}`}>
                    <a>
                        {
                            false ? <SkeletonTitle /> :
                                <h3>
                                    Vídeos: {videos[0].name}
                                </h3>
                        }
                    </a>
                </Link>
                {videos.map(video =>
                    <SwiperSlide key={`${video.id_string}`}>
                        {!videos ? <SkeletonNewsCardVideos /> : <CardVideo videoNews={video} />}
                    </SwiperSlide>
                )}
            </Swiper>
        </div >
    );
}