import { useState } from 'react';
import PostCard from './PostCard';

function PostList({ posts, onLike, onDelete }) {
    const [searchTerm, setSearchTerm] = useState('');

    // Bonus: filter/search posts by title (case-insensitive)
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="post-list-wrapper">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search posts by title..."
                className="post-search"
            />

            <div className="post-list">
                {filteredPosts.length === 0 ? (
                    <p>No posts found.</p>
                ) : (
                    filteredPosts.map((post) => (
                        <PostCard
                            key={post.id}
                            post={post}
                            onLike={onLike}
                            onDelete={onDelete}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default PostList;
