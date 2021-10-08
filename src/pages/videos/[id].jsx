import { Col, Container, Row } from 'react-bootstrap';
import { PlayList } from '../../components/Videos/Playlist';
import { VideoPlayer } from '../../components/Videos/VideoPlayer';
import { fetcher } from '../../Helper/fetch-wrapper';

export default function Videos({ id, video, play_list }) {
    return (
        <>
            <div className="videos">
                <Container>
                    <Row>
                        <Col xl={7}>
                            <VideoPlayer video={video} />
                        </Col>
                        <Col xl={5}>
                            <PlayList videos={play_list} />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const video = await fetcher(`video/id-string?id_string=${id}`);
    const play_list = await fetcher(`video/list?category=${video.category.id_string}&ignore[]=${video.id}`);
    return {
        props: {
            id,
            video,
            play_list
        }
    }
}
