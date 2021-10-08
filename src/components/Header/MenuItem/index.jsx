import { SubMenu } from '../SubMenu';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import useLink from '../../../hooks/useLink';
import styles from './styles.module.scss';

export function MenuItem({ category, father, linkCategory, close }) {
    const [link, setLink] = useLink();
    const handleNext = (element) => {
        let next = element.nextSibling;
        let elementFocus = document.querySelector('.focus');
        if (elementFocus) {
            elementFocus.classList.remove('focus');
            elementFocus.style.left = (elementFocus.offsetLeft - 320) + 'px';
        }
        next.classList.add('open');
        next.classList.add('focus');
    }
    return (
        <li className={styles.menuItem + " menu-item"}>
            {
                category.children ?
                    <button className="w-100" onClick={e => handleNext(e.target)}>
                        {category.name}
                        <FaChevronRight />
                    </button> :
                    <Link href={`/noticias/${!father ? setLink(category) : setLink(category, linkCategory)}`}>
                        <a onClick={close}>{category.name}</a>
                    </Link>
            }
            {category.children ? <SubMenu parent={category} category={category} linkCategory={linkCategory} close={close}/> : null}
        </li>
    );
}