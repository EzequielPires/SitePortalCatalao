export function CardHumor({post}) {
    return(
        <div className="card-humor">
            <img src={post.img} className="w-100" alt="Card Humor"/>
            <span className="title-card">{post.title}</span>
        </div>
    );
}