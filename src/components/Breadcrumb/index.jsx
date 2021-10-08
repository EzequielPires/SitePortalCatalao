import Link from "next/link";
import { Container } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import { BreadcrumbItem } from "./BreadcrumbItem";

import styles from './styles.module.scss';

export function Breadcrumb({ rota }) {
    
    return (
        <div id={styles.breadcrumb}>
            <Container>
                <div className={styles.breadcrumb}>
                    <Link href={`/`}>
                        <a className={styles.breadcrumbItem}>
                            <span>Home</span>
                        </a>
                    </Link>
                    <Link href="/noticias">
                            <a className={styles.breadcrumbItem}>
                                <FaChevronRight />
                                <span>Notícias</span>
                            </a>
                        </Link>
                    {rota ? rota.map((item, index) =>
                        <BreadcrumbItem link={item} key={index}/>
                    ) :
                        null
                    }
                </div>
            </Container>
        </div>
    );
}