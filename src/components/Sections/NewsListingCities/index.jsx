import { useEffect, useState } from 'react';

import { CardNewsListingCities } from '../../Cards/CardNewsListingCities';

import styles from './styles.module.scss';
import { fetcher } from '../../../Helper/fetch-wrapper';

export function NewsListingCities({posts}) {
    const [post, setPost] = useState(null);
    async function handlePosts() {
        const data = await fetcher('publication/list?category=20&limit=4');
        setPost(data);
    }
    useEffect(() => {
        posts ? setPost(posts) : handlePosts();
    }, [posts]);
    return (
        <div id="newsListingCities" className={styles.newsListingCities + " d-flex flex-column"}>
            <span className={styles.titleCardsGroup}>Catalão</span>
            <ul>
                <li>
                    {!post ? <CardNewsListingCities /> : <CardNewsListingCities news={post[0]} />}
                    <hr className="m-0 p-0" />
                </li>
                <li>
                    {!post ? <CardNewsListingCities /> : <CardNewsListingCities news={post[1]} />}
                    <hr className="m-0 p-0" />
                </li>
                <li>
                    {!post ? <CardNewsListingCities /> : <CardNewsListingCities news={post[2]} />}
                </li>
            </ul>
        </div>
    );
}