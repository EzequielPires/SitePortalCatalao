import styles from './styles.module.scss';

export function ButtonCategoryGuia({ icon, title, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.buttonCategoryGuia + " mb-3"}>
            <div className={styles.linkGuia}>
                <img src={icon} alt="Serviços" />
            </div>
            <div className={styles.title}>{title}</div>
        </a>
    );
}