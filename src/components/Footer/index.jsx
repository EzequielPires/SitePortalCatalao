import { useContext } from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { BiUpArrow } from 'react-icons/bi';
import { CategoriesContext } from '../../contexts/CategoriesContext';

import { optionsListFooter } from '../../utils/OptionsListFooter';
import { OptionsListFooter } from './OptionsListFooter';

import styles from './styles.module.scss';

import Logo from '../../assets/logo.svg';

export function Footer() {
    const { primary } = useContext(CategoriesContext);
    return (
        <footer
            id="mainFooter"
            className={styles.mainFooter +
                " d-flex flex-column justify-content-between"}
            style={{ background: `${primary}` }}

        >
            <div
                className={styles.footerHeader + " d-flex flex-column align-items-center"}
                style={primary ? { background: "#00000040" } : null}
            >
                <div style={
                    {
                        height: '56px',
                        width: '220px',
                        position: 'relative'
                    }
                }>
                    <Image layout="fill" src={Logo} alt="Logo" />
                </div>
                <hr className={styles.footerDivisor}></hr>
            </div>
            <div className={styles.footerBody} style={primary ? { background: "#00000040" } : null}>
                <Container>
                    <div className="d-flex flex-wrap">
                        {optionsListFooter.map(item =>
                            <div className={styles.item + " my-2"} key={item.id}>
                                <OptionsListFooter item={item} />
                            </div>
                        )}
                    </div>
                </Container>
            </div>
            <div className={styles.footerFooter}>
                <Container className="h-100 d-flex align-items-center justify-content-center">
                    <p className="mb-0">© Portal Catalão Internet Services. Todos os direitos reservados.</p>
                </Container>
                <button onClick={() => {
                    window.scrollTo(0, 0);
                }}>
                    <BiUpArrow />
                </button>
            </div>
        </footer>
    );
}