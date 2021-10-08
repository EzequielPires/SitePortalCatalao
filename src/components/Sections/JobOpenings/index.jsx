import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import { CardClassifieds } from '../../Cards/CardClassifieds';
import { CardOthers } from '../../Cards/CardOthers';
import { SkeletonAnnouncementAside, SkeletonClassifiedHorizontal, SkeletonClassifiedOther } from '../../../SkeletonLoading';
import { BannerLatest } from '../../Announcement/BannerLatest';

import { FaBriefcase } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

import styles from './styles.module.scss';

export function JobOpenings({banner, jobs}) {
    const [post, setPost] = useState(null);

    async function handlePosts() {
        const res = await fetch('https://portalcatalao.com.br/portal/classificados/api/empregos.php');
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
        <div id="job" className={styles.job}>
            <div className={styles.jobMain}>
                <div className={styles.header}>
                    <FaBriefcase />
                    <span className={styles.title}>Vagas de emprego</span>
                </div>
                {!post ? <SkeletonClassifiedHorizontal /> : <CardClassifieds classified={post[0]} category='vagas' />}
                <hr></hr>
                {!post ? <SkeletonClassifiedHorizontal /> : <CardClassifieds classified={post[1]} category='vagas' />}
                <hr></hr>
                {!post ? <SkeletonClassifiedHorizontal /> : <CardClassifieds classified={post[2]} category='vagas' />}
            </div>
            <Row>
                <Col md={6}>
                    <div id="jobOthers" className={styles.jobOthers + " mt-4"}>
                        <div className={styles.header}>
                            <span className={styles.title}>Outras vagas</span>
                        </div>
                        {!post ? <SkeletonClassifiedOther /> : <CardOthers classified={post[3]} category='vagas' />}
                        <hr></hr>
                        {!post[6] ? <SkeletonClassifiedOther /> : <CardOthers classified={post[4]} category='vagas' />}
                        <hr></hr>
                        {!post[6] ? <SkeletonClassifiedOther /> : <CardOthers classified={post[5]} category='vagas' />}
                        <hr></hr>
                        {!post[6] ? <SkeletonClassifiedOther /> : <CardOthers classified={post[6]} category='vagas' />}
                    </div>
                </Col>
                <Col md={6} className="mt-4 d-flex justify-content-center">
                    {!banner ? <SkeletonAnnouncementAside /> : <BannerLatest banner={banner}/>}
                </Col>
            </Row>
                <a href="https://www.portalcatalao.com.br/portal/empregos/" target="_blank" rel="noreferrer" className={styles.link + " my-4"}>
                    Ver todos as vagas
                    <FiChevronRight />
                </a>
        </div>
    );
}
