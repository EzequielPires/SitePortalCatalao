import { CardHumor } from "../CardHumor";
import Img from '../../../../../assets/images/humor.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';

import './styles.css';

SwiperCore.use([Navigation]);

export function Humor() {
    const post = {
        img: Img,
        title: 'DIA DO BEIJO: 17 BEIJOS BIZARROS QUE VÃO FAZER VOCÊ RIR'
    }
    return (
        <div className="humor">
            <span className="sub-title">Humor</span>
            <CardHumor post={post} />
            <Swiper
                className="mt-4"
                spaceBetween={12}
                slidesPerView={'auto'}
                navigation
            >
                <SwiperSlide>
                    <CardHumor post={post} />
                </SwiperSlide>
                <SwiperSlide>
                    <CardHumor post={post} />
                </SwiperSlide>
                <SwiperSlide>
                    <CardHumor post={post} />
                </SwiperSlide>
                <SwiperSlide>
                    <CardHumor post={post} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}