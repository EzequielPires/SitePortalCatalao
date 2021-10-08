import { Col, Row } from 'react-bootstrap';

import { CardMain } from '../../Cards/CardMain';
import { CardNewsVertical } from '../../Cards/CardNewsVertical';

export function NewsLatest({ post }) {
    return (
        <Row className="mb-0 mb-md-4" style={{ minHeight: '656px' }}>
            <Col xxl={6} className="d-flex justify-content-center">
                {!post ? <CardMain /> : <CardMain news={post[0]} />}
            </Col>
            <Col xxl={6}>
                <Row className="mb-0 mb-md-3 mt-3 mt-xxl-0">
                    <Col md={6} className="mb-3 d-flex justify-content-center">
                        {!post ? <CardMain /> : <CardNewsVertical news={post[1]} />}
                    </Col>
                    <Col md={6} className="mb-3 d-flex justify-content-center">
                        {!post ? <CardMain /> : <CardNewsVertical news={post[2]} />}
                    </Col>
                    <Col md={6} className="mb-3 mb-md-0 d-flex justify-content-center">
                        {!post ? <CardMain /> : <CardNewsVertical news={post[3]} />}
                    </Col>
                    <Col md={6} className="mb-3 mb-md-0 d-flex justify-content-center">
                        {!post ? <CardMain /> : <CardNewsVertical news={post[4]} />}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}