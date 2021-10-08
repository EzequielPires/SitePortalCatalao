import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import { ImageContainer } from "../../ImageContainer"
import { category } from "../../../Helper/primary-category.js";
import { Skeleton } from "../../Skeleton";
import ImgDefault from '../../../assets/default.jpg';
import styles from "./styles.module.scss";

export function CardNewsVertical({ news }) {
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
        <Card className={styles.cardVertical}>
            {news ?
                <>
                    <Link href={primary ? `/noticias/${primary.id_string}/${news.id_string}.phtml` : `/noticias/${news.id_string}.phtml`}>
                        <a>
                            <Card.Header
                                className={styles.cardHeader}
                                style={{ background: '#091733' }}
                            >
                                {news.thumb.size ?
                                    <ImageContainer src={news.thumb.size ? `https://portalcatalao.com.br/storage/${news.thumb.size.medium}` : news.thumb.small} alt="Image" />
                                    : <ImageContainer src={ImgDefault} alt="Image" layout='fill' />
                                }
                            </Card.Header>
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
                            <Card.Body
                                className={styles.cardBody}
                            >
                                <Card.Title
                                    className={styles.cardTitle}
                                >
                                    {news.title}
                                </Card.Title>
                                <Card.Text
                                    className={styles.cardText + ` d-flex d-md-none`}
                                >
                                    {news.introduction}
                                </Card.Text>
                                <span
                                    className={styles.cardPostTime + " card-post-time d-lg-none"}
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