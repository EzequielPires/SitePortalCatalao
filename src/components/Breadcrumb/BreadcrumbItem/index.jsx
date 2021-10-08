import { useContext, useEffect, useState } from "react";
import Link from 'next/link';
import { CategoriesContext } from "../../../contexts/CategoriesContext";
import { FaChevronRight } from "react-icons/fa";
import styles from './styles.module.scss';

export function BreadcrumbItem({ link }) {
    const { getCategoryName, category } = useContext(CategoriesContext);
    const [categoryName, setCategoryName] = useState('');

    function isPost(link) {
        const pattern = new RegExp('.phtml$');
        const isValid = pattern.test(link);
        return isValid;
    }
    const getName = async () => {
        !isPost(link) ? setCategoryName(await getCategoryName(link)) : null;
    }
    useEffect(() => {
        getName();
    }, [link]);
    if(!category) {
        return '';
    }
    return (
        <Link href={`/noticias/${link}`}>
            {
                !isPost(link) ?
                    <a className={styles.breadcrumbItem}>
                        <FaChevronRight />
                        <span>{categoryName}</span>
                    </a>
                    : <></>
            }
        </Link>
    );
}