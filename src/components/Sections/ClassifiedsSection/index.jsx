import { Col, Container, Row } from 'react-bootstrap';

import { JobOpenings } from '../JobOpenings';
import { Properties } from '../Properties';
import { Vehicles } from '../Vehicles';

import styles from './styles.module.scss';

export function ClassifiedsSection({
    banner,
}) {
    return (
        <section id="classifiedsSection" className={styles.classifiedsSection}>
            <hr className="mb-4"></hr>
            <Container className="d-flex align-items-center">
                <h2 className="title">Classificados</h2>
            </Container>
            <hr className="mt-4"></hr>
            <Container>
                <Row>
                    <Col md={6} xl={3}>
                        <Properties />
                    </Col>
                    <Col md={6} xl={3}>
                        <Vehicles />
                    </Col>
                    <Col xl={6}>
                        <JobOpenings banner={banner} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}