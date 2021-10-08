import { Container } from 'react-bootstrap';

import styles from './styles.module.scss';

export function HeaderTitle({ title }) {
    return (
        <div className={styles.headerTitle +" mt-4 mt-lg-0"}>
            <Container>
                <h2>{title}</h2>
            </Container>
        </div>
    );
}