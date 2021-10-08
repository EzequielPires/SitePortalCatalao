import { CardNewsHorizontal } from '../../Cards/CardNewsHorizontal';

export function NewsListing({post}) {
    return (
        <div id="newsListing" className="d-none d-lg-flex flex-column">
            {!post ? <CardNewsHorizontal /> : <CardNewsHorizontal news={post[5]} />}
            {!post ? <CardNewsHorizontal /> : <CardNewsHorizontal news={post[6]} />}
            {!post ? <CardNewsHorizontal /> : <CardNewsHorizontal news={post[7]} />}
            {!post ? <CardNewsHorizontal /> : <CardNewsHorizontal news={post[8]} />}
        </div>
    );
}