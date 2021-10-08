import { useEffect, useState } from 'react';

import { CardMostViewedNews } from '../../Cards/CardMostViewedNews';
import { SkeletonNewsCardAside } from '../../../SkeletonLoading';

import styles from './styles.module.scss';
import { fetcher } from '../../../Helper/fetch-wrapper';

export function MostViewedNews({posts}) {
    const [post, setPost] = useState(null);
    async function handlePosts() {
        const data = await fetcher('publication/list');
        setPost(data);
    }

    useEffect(() => {
        posts ? setPost(posts) : handlePosts();
    }, [posts]);
    
    return (
        <div id="mostViewedNews" className={styles.mostViewedNews + " d-flex flex-column"}>
            <span className={styles.titleCardsGroup}>Mais lidas da semana</span>
            <ul>
                <li>
                    {!post ? <CardMostViewedNews news={null} /> : <CardMostViewedNews news={post[9]} />}
                    <hr className="m-0 p-0" />
                </li>
                <li>
                    {!post ? <CardMostViewedNews news={null} /> : <CardMostViewedNews news={post[10]} />}
                    <hr className="m-0 p-0" />
                </li>
                <li>
                    {!post ? <CardMostViewedNews news={null} /> : <CardMostViewedNews news={post[11]} />}
                </li>
            </ul>
        </div>
    );
}