import { Col, Container, Row } from "react-bootstrap";
import { PlayList } from "../../components/Videos/Playlist";
import { VideoPlayer } from "../../components/Videos/VideoPlayer";
import { VideoProvider } from "../../contexts/VideoPlayerContext";
import { fetcher } from "../../Helper/fetch-wrapper";

export default function Video({ id, video, play_list }) {
    return (
        <div className="videos">
            <VideoProvider>
                <Container>
                    <Row>
                        <Col xl={7}>
                            <VideoPlayer video={video[0]} />
                        </Col>
                        <Col xl={5}>
                            <PlayList videos={play_list} />
                        </Col>
                    </Row>
                </Container>
            </VideoProvider>
        </div>
    )
}

export async function getServerSideProps() {
    const video = await fetcher(`video/list?limit=1`);
    const play_list = await fetcher(`video/list?ignore[]=${video[0].id}`);
    return {
        props: {
            video,
            play_list
        }
    }
}