function PostCard({ post, onLike, onDelete }) {
    return (
        <article className="post-card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="post-meta">
                <span>By {post.author}</span>
                <span>{post.date}</span>
            </div>
            <div className="post-actions">
                <button onClick={() => onLike(post.id)}>
                    ❤️ {post.likes}
                </button>
                <button onClick={() => onDelete(post.id)}>
                    Delete
                </button>
            </div>
        </article>
    );
}

export default PostCard;
