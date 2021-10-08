import Link from 'next/link';
import { Card } from 'react-bootstrap';
import { ImPlay2 } from 'react-icons/im';
import { ImageContainer } from '../../ImageContainer';
import { Skeleton } from '../../Skeleton';

import styles from './styles.module.scss';

export function CardVideo({ videoNews }) {
    return (
        <Card className={styles.cardVideo}>
            {
                videoNews ?
                    <>
                        <Link href={`/videos/${videoNews.id_string}`}>
                            <a>
                                <Card.Header
                                    className={styles.cardHeader}
                                    style={{ background: "var(--blue)" }}
                                >
                                    <ImageContainer layout='fill' src={`https://portalcatalao.com.br/storage/${videoNews.thumb ?? null}`} alt="Img" />
                                </Card.Header>
                            </a>
                        </Link>
                        <Card.Body className={styles.cardBody}>
                            <div className={styles.card_helper + " d-flex align-items-center py-3 px-2"}>
                                <div className={styles.ico}>
                                    <ImPlay2 />
                                </div>
                                <Card.Title className={styles.cardTitle}>{videoNews.name}</Card.Title>
                            </div>
                        </Card.Body>
                    </>
                    : <Skeleton />
            }
        </Card>
    );
}