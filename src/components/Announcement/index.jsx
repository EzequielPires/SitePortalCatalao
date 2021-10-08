import { Card } from 'react-bootstrap';
import { ImageContainer } from '../ImageContainer';
import { Skeleton } from '../Skeleton';
import anuncie from '../../assets/anuncie_Aqui.png'

import styles from './styles.module.scss';

export function Announcement({ announcement }) {
    return (
        <Card id="announcementCard" className={styles.announcementCard}>
            <Card.Header className={styles.cardHeader}>
                <Card.Title className={styles.cardTitle}>Anúncio</Card.Title>
            </Card.Header>
            <a href={announcement ? announcement.url : '/suporte/anuncie'} className="w-100" target="_blank" rel="noreferrer">
                <Card.Body className={styles.cardBody} style={{ background: 'var(--blue)' }}>
                    {announcement ?
                        <>
                            {announcement.path ?
                                <ImageContainer layout='fill' src={`https://portalcatalao.com.br/storage/${announcement.path}`} alt='Image' />
                                : <ImageContainer layout='fill' src={anuncie.src} alt='Image' />
                            }
                        </>
                        : <ImageContainer layout='fill' src={anuncie.src} alt='Image' />
                    }
                </Card.Body>
            </a>
        </Card>
    );
}