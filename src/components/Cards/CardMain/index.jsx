import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import { ImageContainer } from "../../ImageContainer";
import { category } from "../../../Helper/primary-category";
import styles from "./styles.module.scss";
import { Skeleton } from "../../Skeleton";
import ImgDefault from '../../../assets/default.jpg';

export function CardMain({ news }) {
    const newCategory = category.getPrimary(news.category, news.primary_category);
    const [data, setData] = useState('');

    const convertData = () => {
        let data_americana = news.posted_at.date.split(' ');
        let data_brasileira = data_americana[0].split('-').reverse().join('/');
        return data_brasileira;
    }

    useEffect(() => {
        if (news) {
            setData(convertData());
        }
    }, [news]);

    return (
        <Card className={styles.cardMain}>
            {news ?
                <>
                    <Link href={newCategory ? `/noticias/${newCategory.id_string}/${news.id_string}.phtml` : `/noticias/${news.id_string}.phtml`}>
                        <a>
                            <Card.Header
                                className={styles.cardHeader}
                                style={{ background: '#091733' }}
                            >
                                {news.thumb.size ?
                                    <ImageContainer alt="Image Main" src={`https://portalcatalao.com.br/storage/${news.thumb.size.large}`} />
                                    : <ImageContainer src={ImgDefault.src} alt="Image" layout='fill' />
                                }
                            </Card.Header>
                            <span className={styles.cardCategory} style={{ borderBottomColor: newCategory.color }}>
                                {newCategory.name}
                            </span>
                            <Card.Body
                                className={styles.cardBody}
                            >
                                <Card.Title className={styles.cardTitle}>{news.title}</Card.Title>
                                <Card.Text className={styles.cardText}>{news.introduction}</Card.Text>
                                <span
                                    className={styles.cardPostTime}
                                >
                                    {news.posted_at.date ? data : null}
                                </span>
                            </Card.Body>
                        </a>
                    </Link>
                </>
                : <Skeleton />
            }
        </Card>
    );
}