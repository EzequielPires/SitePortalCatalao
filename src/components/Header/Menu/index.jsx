import { useContext } from 'react';
import { CategoriesContext } from '../../../contexts/CategoriesContext';
import { MenuItem } from '../MenuItem';
import styles from './styles.module.scss';

export function Menu({ close }) {
    const { categories } = useContext(CategoriesContext);
    if (!categories || !categories.length > 0) {
        return null;
    }
    return (
        <nav className={styles.nav}>
            <ul className={styles.menu + " menu focus"}>
                <li>
                    <a href="https://www.portalcatalao.com.br/portal/classificados/" target="_blank" rel="noreferrer">Classificados</a>
                </li>
                {categories.map((category, index) =>
                    <MenuItem category={category} key={'index-' + index} close={close} />
                )}
            </ul>
        </nav>
    );
}