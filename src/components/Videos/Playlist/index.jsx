import Link from 'next/link';
import { ImageContainer } from '../../ImageContainer';
import styles from './styles.module.scss';


export function PlayList({videos}) {
    return (
        <ul className={styles.playList}>
            {videos.map(video =>
                <li
                    key={video.id}
                    className={styles.item + " d-flex align-items-center"}
                >
                    <Link href={video.id_string} >
                        <a className={styles.image}>
                            <ImageContainer src={`https://portalcatalao.com.br/storage/${video.thumb ?? null}`} alt={video.id_string} />
                        </a>
                    </Link>
                    <Link href={`/videos/${video.id_string}`}>
                        <a className={styles.body}>
                            <h4>{video.name}</h4>
                        </a>
                    </Link>
                </li>
            )}
        </ul>
    );
}