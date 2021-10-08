import { Col, Container, Row } from 'react-bootstrap';

import { Humor } from './Sections/EntertainmentSection/components/Humor';
import { Announcement } from '../../Announcement';

import Img1 from '../../../assets/images/anuncio_1.png';
import Img2 from '../../../assets/images/anuncio_2.png';

export function EntertainmentSection() {
    const an1 = {
        img: Img1
    }
    const an2 = {
        img: Img2
    }
    return (
        <section id="entertainmentSection">
            <hr className="mb-4"></hr>
            <Container className="d-flex align-items-center">
                <h2 className="title">Entretenimento</h2>
            </Container>
            <hr className="mt-4"></hr>
            <Container>
                <Row>
                    <Col xl={8} lg={9} className="mt-4 mt-lg-0">
                        <Humor />
                    </Col>
                    <Col xl={4} className="d-flex flex-column align-items-center mt-4 mt-lg-0">
                        <Announcement announcement={an1}/>
                        <Announcement announcement={an2}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}