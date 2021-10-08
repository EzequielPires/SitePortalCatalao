import clear_day from '../../../assets/clima/clear_day.png';
import rain from '../../../assets/clima/rain.png';
import Image from 'next/image';
import styles from './styles.module.scss';

export function CardWeather({ clima }) {
    return (
        <div className={styles.cardWeather}>
            <div className={styles.cardHeader}>
                <p className={styles.currently}>{clima.weekday}.</p>
            </div>
            <div className={styles.content}>
                <div className={styles.icon}>
                    {clima.condition === 'clear_day' ? <Image src={clear_day} alt="clima" layout="fill" /> : null}
                    {clima.condition === 'rain' ? <Image src={rain} alt="clima" layout="fill" /> : null}
                    
                </div>
                <div className={styles.temperature}>
                    <span className={styles.max}>{clima.max}º / </span>
                    <span className={styles.min}>{clima.min}º</span>
                </div>
            </div>
            <div className={styles.circle}></div>
        </div>
    );
}