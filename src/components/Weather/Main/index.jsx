import styles from './styles.module.scss';
import clear_day from '../../../assets/clima/clear_day.png';
import rain from '../../../assets/clima/rain.png';
import Image from 'next/image';

export function Main({ clima }) {
    return (
        <div className={styles.main}>
            <div className={styles.circle}>
            </div>
            <div className={styles.header}>
                <span className={styles.city_name}>{clima.city}</span>
                <span className={styles.city_name}>{clima.currently}</span>
                <div className="d-flex flex-column align-items-end">
                    <span className={styles.city_name}>{clima.date}</span>
                    <span className={styles.city_name}>{clima.forecast[0].weekday}.</span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.icon}>
                    {clima.condition_slug === 'clear_day' ? <Image src={clear_day} alt="clima" layout="fill" /> : null}
                    {clima.condition_slug === 'rain' ? <Image src={rain} alt="clima" layout="fill" /> : null}
                </div>
                <span className={styles.temp}>{clima.temp}º</span>
                <div className="d-flex justify-content-between w-100 mt-2">
                    <span className={styles.max}>Máxima: {clima.forecast[0].max}º</span>
                    <span className={styles.min}>Mínima: {clima.forecast[0].min}º</span>
                    <span className={styles.city_name}>Umidade: {clima.humidity}%</span>
                    <span className={styles.city_name}>Vento: {clima.wind_speedy}</span>
                </div>
                <span className={styles.description}>{clima.description}</span>
            </div>
        </div>
    )
}