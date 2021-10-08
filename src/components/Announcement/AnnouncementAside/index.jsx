import styles from './styles.module.scss';
import { BannerLatest } from "../BannerLatest";
import { useEffect, useState } from 'react';

export function AnnouncementAside({ banner }) {
    const [first, setFirst] = useState([]);
    const [last, setLast] = useState([]);

    const spliceArray = () => {
        let banner1 = banner.splice(0, Math.floor(banner.length / 2));
        let banner2 = banner;
        setFirst(banner1);
        setLast(banner2);
    }

    useEffect(() => {
        if (banner) {
            spliceArray();
        }
    }, [banner])

    return (
        <div className="d-none d-lg-flex flex-column h-100">
            <div className={styles.boxAnnouncement}>
                <div className={styles.boxAnnouncementItem}>
                    {!banner || first.length <= 0 ? <BannerLatest banner={null} /> : <BannerLatest banner={first} />}
                </div>
            </div>
            <div className={styles.boxAnnouncement}>
                <div className={styles.boxAnnouncementItem}>
                    {!banner || last.length <= 0 ? <BannerLatest banner={null} /> : <BannerLatest banner={last} />}
                </div>
            </div>
        </div>
    );
}