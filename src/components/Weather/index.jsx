import { CardWeather } from './CardWeather';
import { Main } from './Main';
import styles from './styles.module.scss';

export function Weather({ clima }) {
    if (!clima) {
        return <p>loadind</p>
    }
    return (
        <div className={styles.weather}>
            <Main clima={clima} />
            <ul className="d-flex w-100 h-100 mt-3">
                {clima.data ? clima.data.map(day => (
                    <li key={day.date} style={{ width: 200, height: '100%', marginRight: '1rem' }}>
                        <CardWeather clima={day} />
                    </li>
                )) : null}
            </ul>
        </div>
    );
}