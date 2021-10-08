import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import { category } from '../../../Helper/primary-category';
import { ImageContainer } from '../../ImageContainer';
import { Skeleton } from '../../Skeleton';
import ImgDefault from '../../../assets/default.jpg';

import styles from './styles.module.scss';

export function CardNewsListingCities({ news }) {
    const [primary, setPrimary] = useState(null);

    const handleCategory = async () => {
        news.category.forEach(item => item.id === news.primary_category ? setPrimary(item) : null);
        return category;
    }

    useEffect(() => {
        news ? handleCategory() : null;
    }, [news]);
    return (
        <Link href={primary ? `/noticias/${primary.id_string}/${news.id_string}.phtml` : `/noticias`}>
            <a>
                <Card className={styles.cardNewsListingCities}>
                    {
                        news ?
                            <>
                                <Card.Header
                                    className={styles.cardHeader}
                                    style={{ background: 'var(--blue)' }}
                                >
                                    {
                                        news.thumb.size ?
                                            <ImageContainer alt="Image Main" src={`https://portalcatalao.com.br/storage/${news.thumb.size.small}`} />
                                            : <ImageContainer src={ImgDefault} alt="Image" layout='fill' />
                                    }
                                </Card.Header>
                                <Card.Body className={styles.cardBody}>
                                    {
                                        news.primary_category ?
                                            <span
                                                className={styles.cardCategory}
                                            >
                                                {primary ? primary.name : null}
                                            </span>
                                            : null
                                    }
                                    <Card.Title className={styles.cardTitle}>{news.title}</Card.Title>
                                </Card.Body>
                            </>
                            : <Skeleton />
                    }
                </Card>
            </a>
        </Link>
    );
}