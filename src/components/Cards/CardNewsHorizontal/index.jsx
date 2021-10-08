import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { ImageContainer } from '../../ImageContainer';
import { category } from '../../../Helper/primary-category';
import styles from './styles.module.scss';
import { Skeleton } from '../../Skeleton';
import ImgDefault from '../../../assets/default.jpg';

export function CardNewsHorizontal({ news }) {
    const [primary, setPrimary] = useState(null);
    const [data, setData] = useState('');

    const convertData = () => {
        let data_americana = news.posted_at.date.split(' ');
        let data_brasileira = data_americana[0].split('-').reverse().join('/');
        return data_brasileira;
    }

    const handleCategory = async () => {
        news.category.forEach(item => item.id === news.primary_category ? setPrimary(item) : null);
        return category;
    }

    useEffect(() => {
        if (news) {
            handleCategory();
            setData(convertData());
        }
    }, [news]);
    return (
        <Link href={news && primary ? `/noticias/${primary.id_string}/${news.id_string}.phtml` : `/noticias/${news ? news.id_string + `.phtml` : ''}`}>
            <a className="mb-4 w-100 d-flex justify-content-center">
                <Card id="cardNewsHorizontal" className={styles.cardHorizontal}>
                    {
                        news ?
                            <>
                                <Card.Header
                                    className={styles.cardHeader}
                                    style={{ background: '#091733' }}
                                >
                                    {news.thumb.size ?
                                        <ImageContainer src={news.thumb.size ? `https://portalcatalao.com.br/storage/${news.thumb.size.small}` : news.thumb.small} alt="Image" />
                                        : <ImageContainer src={ImgDefault} alt="Image" layout='fill' />
                                    }
                                </Card.Header>
                                <Card.Body
                                    className={styles.cardBody}
                                >
                                    {
                                        news.primary_category ?
                                            <span
                                                className={styles.cardCategory}
                                                style={primary ? { borderBottomColor: primary.color } : null}
                                            >
                                                {primary ? primary.name : null}
                                            </span>
                                            : null
                                    }
                                    <Card.Title
                                        className={styles.cardTitle}
                                    >
                                        {news.title}
                                    </Card.Title>
                                    <Card.Text
                                        className={styles.cardText}
                                    >
                                        {news.introduction}
                                    </Card.Text>
                                    <span
                                        className={styles.cardPostTime}
                                    >
                                        {news.posted_at.date ? data : null}
                                    </span>
                                </Card.Body>
                            </>
                            : <Skeleton />
                    }
                </Card>
            </a>
        </Link>
    );
}