import Link from 'next/link';

import styles from './styles.module.scss';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export function OptionsListFooter({ item }) {
    const title = item.title;
    return (
        <div className={styles.optionsListFooter}>
            <h4>{item.title}</h4>
            <ul className="mt-4">
                {item.children.map(item =>
                    <li key={item.id}>
                        {title === 'PRODUTOS' || title === 'SIGA-NOS' ?
                            <a
                                className={styles.optionLink + " d-flex align-items-center"}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer">
                                {item.icon && item.icon === 'FaFacebookF' ?
                                    <div className={styles.icon + " icon-circle"}><FaFacebookF /></div> : null}
                                {item.icon && item.icon === 'FaInstagram' ?
                                    <div className={styles.icon + " icon-circle"}><FaInstagram /></div> : null}
                                {item.icon && item.icon === 'FaLinkedinIn' ?
                                    <div className={styles.icon + " icon-circle"}><FaLinkedinIn /></div> : null}
                                {item.icon && item.icon === 'FaTwitter' ?
                                    <div className={styles.icon + " icon-circle"}><FaTwitter /></div> : null}
                                {item.title}
                            </a>
                            :
                            <Link href={`${item.link}`}>
                                <a className={styles.optionLink + " d-flex align-items-center"}>
                                    {item.icon && item.icon === 'FaFacebookF' ?
                                        <div className={styles.icon + " icon-circle"}><FaFacebookF /></div> : null}
                                    {item.icon && item.icon === 'FaInstagram' ?
                                        <div className={styles.icon + " icon-circle"}><FaInstagram /></div> : null}
                                    {item.icon && item.icon === 'FaLinkedinIn' ?
                                        <div className={styles.icon + " icon-circle"}><FaLinkedinIn /></div> : null}
                                    {item.icon && item.icon === 'FaTwitter' ?
                                        <div className={styles.icon + " icon-circle"}><FaTwitter /></div> : null}
                                    {item.title}
                                </a>
                            </Link>
                        }
                    </li>
                )}
            </ul>
        </div>
    );
}