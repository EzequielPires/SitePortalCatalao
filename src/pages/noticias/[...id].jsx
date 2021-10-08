import New from "../../components/pages/New";
import Category from "../../components/pages/Category";
import { Breadcrumb } from '../../components/Breadcrumb';
import { useRouter } from "next/dist/client/router";
import { fetcher } from '../../Helper/fetch-wrapper';
import { BannerTop } from "../../components/Announcement/BannerTop";
import { BannerContext } from "../../contexts/BannerContext";
import { useContext, useEffect } from "react";


export default function Noticias({
    isPost,
    post,
    postCategories,
    videos
}) {
    const {
        getBannersPublication,
        homeTopo,
        homeLateral } = useContext(BannerContext);


    useEffect(() => {
        const handleBanners = async () => {
            await getBannersPublication();
        }
        handleBanners();
    }, []);

    const router = useRouter();
    const id = router.query.id || [];
    return (
        <div className="py-4">
            {homeTopo ? <BannerTop banner={homeTopo} /> : null}
            <Breadcrumb rota={id} />
            {
                isPost ?
                    <New
                        id={id}
                        post={post}
                        postCategories={postCategories}
                        banner={homeLateral}
                        videos={videos}
                    />
                    :
                    <Category
                        id={id[id.length - 1]}
                        data={post}
                        banner={homeLateral}
                    />
            }
        </div>
    )
}

export async function getServerSideProps({ params, res }) {
    const id = params.id;
    const pattern = new RegExp('.phtml$');
    const isPost = pattern.test(id[id.length - 1]);
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=1200'
    )
    let post;
    let postCategories = [];
    let videos = [];

    if (isPost) {
        const idSplit = id[id.length - 1].split('.');
        post = await fetcher(`publication/id-string?id_string=${idSplit[0]}`);
        postCategories = await fetcher(`publication/list?category=${id[id.length - 2]}%&ignore[]=${post.id}&limit=5`);
    } else {
        post = await fetcher(`publication/list?category=${id[id.length - 1]}&limit=15`);
    }

    if (post.message) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            isPost,
            post,
            postCategories,
            videos
        },
    };
}
