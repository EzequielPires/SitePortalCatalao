import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaUser } from 'react-icons/fa';
import { category } from "../../../Helper/primary-category";
import { CategoriesContext } from "../../../contexts/CategoriesContext";
import { ImageContainer } from "../../ImageContainer";
import ImgDefault from '../../../assets/default.jpg';
import {
    FaFacebookF,
    FaTwitter,
    FaWhatsapp
} from "react-icons/fa";


import styles from './styles.module.scss';

export function NewHeader({ post }) {
    const [url, setUrl] = useState('');
    const [data, setData] = useState('');
    const newCategory = category.getPrimary(post.category, post.primary_category);
    const { getPrimary } = useContext(CategoriesContext);

    const convertData = () => {
        let data_americana = post.posted_at.date.split(' ');
        let data_brasileira = data_americana[0].split('-').reverse().join('/');
        return data_brasileira;
    }
    const handleCategory = () => {
        var category = '';
        post.category.forEach(item => {
            item.id === post.primary_category ? category = item.id_string : null;
        })
        return category;
    }
    const handleCategoryPrimary = async () => {
        let category = handleCategory();
        await getPrimary(category);
    };
    useEffect(() => {
        post ? handleCategoryPrimary() : null;
    }, []);
    useEffect(() => {
        post ? setData(convertData()) : null;
        post ? setUrl(location.href) : null;
        post ? handleCategoryPrimary() : null;
    }, [post]);

    return (
        <div
            id="newsHeader"
            className={styles.newsHeader + " pt-4"}
            style={newCategory ? { background: `${newCategory.color}` } : null}
        >
            <Container
                className={styles.content + " d-flex p-4"}
                style={{ background: "#f9f9f9" }}
            >
                <div
                    className={styles.left + " d-flex flex-column justify-content-between"}
                >
                    <div className={styles.top}>
                        <h1 className={styles.title}>
                            {post.title}
                        </h1>
                        <span className={styles.contentTitle}>
                            {post.introduction}
                        </span>
                    </div>
                    <div
                        className={styles.bottom + " d-flex flex-wrap align-items-center justify-content-between"}
                    >
                        <div className="d-flex align-items-center" style={{ marginRight: "1rem" }}>
                            <div 
                                className={styles.avatar}
                                style={newCategory ? { background: `${newCategory.color}` } : null}
                            >
                                {
                                    post.published_by.avatar ? <img src={`https://portalcatalao.com.br/storage/${post.published_by.avatar}`} />
                                        : <FaUser />
                                }
                            </div>
                            <div>
                                <span className={styles.contentAuthor}>Por {post.published_by.name}</span>
                                <span className={styles.contentDate}>{post.posted_at.date ? data : null}</span>
                            </div>
                        </div>
                        <div className={styles.social}>
                            <a
                                className={styles.ico}
                                href={"https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=" + url}
                                target="_blank"
                                rel="noreferrer"
                                id="u_0_1_yw"
                                style={newCategory ? { 
                                    background: `${newCategory.color}`, 
                                    color: "#fff",
                                    border: 0,
                                } : null}
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                className={styles.ico}
                                href={"https://api.whatsapp.com/send?text=" + url}
                                target="_blank"
                                rel="noreferrer"
                                id="u_0_1_yw"
                                style={newCategory ? { 
                                    background: `${newCategory.color}`, 
                                    color: "#fff",
                                    border: 0,
                                } : null}
                            >
                                <FaWhatsapp /> 
                            </a>
                            <a
                                className={styles.ico}
                                href={"https://twitter.com/intent/tweet?original_referer=" + url}
                                target="_blank"
                                rel="noreferrer"
                                id="u_0_1_yw"
                                style={newCategory ? { 
                                    background: `${newCategory.color}`, 
                                    color: "#fff",
                                    border: 0,
                                } : null}
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.right + " d-none d-lg-flex"}>
                    <figure className={styles.thumb + " d-flex flex-column align-items-start"}>
                        <div className={styles.contentImage}>
                            {post.thumb.size ?
                                <ImageContainer alt="Image Main" src={`https://portalcatalao.com.br/storage/${post.thumb.size.small}`} />
                                : <ImageContainer src={ImgDefault.src} alt="Image" layout='fill' />
                            }
                        </div>
                        {post.thumb.copyright ? <span className={styles.fontImage}>Fonte: {post.thumb.copyright}</span> : null}
                    </figure>
                </div>
            </Container>
        </div>
    );
}