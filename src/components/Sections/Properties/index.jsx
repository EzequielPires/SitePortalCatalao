import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useFetch } from '../../../hooks/useFetch';
import { CardClassifieds } from '../../Cards/CardClassifieds';
import { CardOthers } from '../../Cards/CardOthers';
import { SkeletonClassifiedOther, SkeletonClassifiedVertical } from '../../../SkeletonLoading';

import { FaHome } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

import styles from './styles.module.scss';

export function Properties({ properties }) {
    const [post, setPost] = useState(null);

    async function handlePosts() {
        const res = await fetch('https://portalcatalao.com.br/portal/classificados/api/imoveis.php');
        const data = await res.json();
        setPost(data);
    }

    useEffect(() => {
        handlePosts();
    }, [])

    if (!post) {
        return <p>loading...</p>
    }

    return (
        <div id="properties" className={styles.properties}>
            <div id="propertiesMain" className={styles.propertiesMain}>
                <div className={styles.propertyHeader}>
                    <FaHome />
                    <span className={styles.title}>Imóveis</span>
                </div>
                {!post ? <SkeletonClassifiedVertical /> : <CardClassifieds classified={post[1]} category='imovel' />}
            </div>
            <div id="propertiesOthers" className={styles.propertiesOthers + " mt-4"} >
                <div className={styles.propertyHeader}>
                    <span className={styles.title}>Outros imóveis</span>
                </div>
                {!post ? <SkeletonClassifiedOther /> : <CardOthers classified={post[0]} category='imovel' />}
                <hr></hr>
                {!post ? <SkeletonClassifiedOther /> : <CardOthers classified={post[2]} category='imovel' />}
                <hr></hr>
                {!post ? <SkeletonClassifiedOther /> : <CardOthers classified={post[3]} category='imovel' />}
                <hr></hr>
                {!post ? <SkeletonClassifiedOther /> : <CardOthers classified={post[4]} category='imovel' />}
            </div>
            <a href="https://portalcatalao.com.br/portal/classificados/anuncios-imoveis,AN,MTI.rb" target="_blank" rel="noreferrer" className={styles.link + " my-4"}>
                Ver todos os imóveis
                <FiChevronRight />
            </a>
        </div>
    );
}
