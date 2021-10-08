import Link from 'next/link';
import { useEffect, useState } from 'react';

import { CardClassifieds } from '../../Cards/CardClassifieds';
import { CardOthers } from '../../Cards/CardOthers';
import { SkeletonClassifiedOther, SkeletonClassifiedVertical } from '../../../SkeletonLoading';

import { FiChevronRight } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';

import styles from './styles.module.scss';

export function Vehicles({vehicles}) {
    const [post, setPost] = useState(null);

    async function handlePosts() {
        const res = await fetch('https://portalcatalao.com.br/portal/classificados/api/veiculos.php');
        const data = await res.json();
        setPost(data);
    }

    useEffect(() => {
        handlePosts();
    }, [])
    
    if(!post){
        return <p>loading...</p>
    }

    return (
        <div id="vehicles" className={styles.vehicles}>
            <div id="vehicleMain" className={styles.vehiclesMain}>
                <div className={styles.header}>
                    <FaCar />
                    <span className={styles.title}>Veículos</span>
                </div>
                {!post ? <SkeletonClassifiedVertical /> : <CardClassifieds classified={post[0]} category='veiculo' />}
            </div>
            <div id="vehicleOthers" className={styles.vehiclesOthers + " mt-4"}>
                <div className={styles.header}>
                    <span className={styles.title}>Outros veículos</span>
                </div>
                {!post ? <SkeletonClassifiedOther /> : <CardOthers classified={post[1]} category='veiculo' />}
                <hr></hr>
                {!post ? <SkeletonClassifiedOther /> : <CardOthers classified={post[2]} category='veiculo' />}
                <hr></hr>
                {!post ? <SkeletonClassifiedOther /> : <CardOthers classified={post[3]} category='veiculo' />}
                <hr></hr>
                {!post ? <SkeletonClassifiedOther /> : <CardOthers classified={post[4]} category='veiculo' />}
            </div>
                <a href="https://portalcatalao.com.br/portal/classificados/anuncios-veiculos,AN,MQ.rb" target="_blank" rel="noreferrer" className={styles.link + " my-4"}>
                    Ver todos os veículos
                    <FiChevronRight />
                </a>
        </div>

    );
}