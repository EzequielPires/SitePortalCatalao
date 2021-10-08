import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import useLink from "../../../hooks/useLink";
import { MenuItem } from "../MenuItem";
import styles from "./styles.module.scss";

export function SubMenu({ category, parent, linkCategory, close }) {
    const [link, setLink] = useLink();
    const handlePrev = (element) => {
        let prev = element.closest('.sub-menu');
        let main = element.closest('.sub-menu').closest(':not(.focus)').closest(':not(.menu-item)');
        let elementFocus = document.querySelector('.focus');
        if (elementFocus) {
            elementFocus.classList.remove('focus');
        }
        prev.classList.toggle('open');
        main.classList.add('focus');
        main.style.left = (main.offsetLeft + 320) + "px";
    }

    return (
        <ul className={styles.subMenu + " sub-menu"}>
            <button className="justify-content-start pb-3" onClick={e => handlePrev(e.target)}>
                <FaChevronLeft />
                Voltar
            </button>
            <Link href={`/noticias/${setLink(category, linkCategory)}`}>
                <a onClick={close} className={styles.linkParent + " link-parent my-2"}>Tudo sobre {parent.name}</a>
            </Link>
            {category.children.map((item, index) =>
                <MenuItem
                    category={item}
                    father={category}
                    linkCategory={setLink(category, linkCategory)}
                    key={`${category.id_string}-${category.id}-${index}`}
                    close={close}
                />
            )}
        </ul>
    );
}