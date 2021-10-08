import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetcher, tolken } from "../../Helper/fetch-wrapper";
import { AnnouncementAside } from "../Announcement/AnnouncementAside";
import { CardNewsHorizontal } from "../Cards/CardNewsHorizontal";
import useSWR from "swr";
import { useRouter } from "next/router";

export function ListPosts({ search, data }) {
    const router = useRouter();
    const { s } = router.query;
    const [posts, setPosts] = useState(data);

    useEffect(() => {
        setPosts(data);
    }, [s]);

    const getMorePost = async () => {
        const newPosts = await fetcher(`publication/list?search=${search}&limit=2`);
        setPosts((post) => [...post, ...newPosts]);
    };
    return (
        <div className="news-list-body mt-4">
            <Row>
                <Col xl={8}>
                    <ul>
                        {posts.map((item) =>
                            <li className="d-flex justify-content-center" key={item.id_string}>
                                <CardNewsHorizontal news={item[0]} />
                            </li>
                        )}
                    </ul>
                    <button onClick={getMorePost}>Ver mais</button>
                </Col>
                <Col xl={4}>
                    <AnnouncementAside />
                </Col>
            </Row>
        </div>

    )
}