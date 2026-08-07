import { useState } from 'react';
import CreatePost from './CreatePost';
import PostList from './PostList';

// Starting sample data so the list isn't empty on first load.
const initialPosts = [
    {
        id: 1,
        title: 'Getting Started with React',
        excerpt: 'Learn the basics of React and how components work...',
        author: 'John Doe',
        date: 'Jan 15, 2026',
        likes: 3,
    },
    {
        id: 2,
        title: 'JavaScript Best Practices',
        excerpt: 'Write cleaner, more maintainable code with these tips...',
        author: 'Jane Smith',
        date: 'Jan 10, 2026',
        likes: 5,
    },
];

function PostsPage() {
    const [posts, setPosts] = useState(initialPosts);

    // Bonus: like/unlike posts (toggle-style increment for simplicity,
    // per the curriculum's Task 16.4 "lifting state up" example)
    function handleLike(postId) {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId ? { ...post, likes: post.likes + 1 } : post
            )
        );
    }

    // Bonus: delete posts
    function handleDelete(postId) {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    }

    // Adds a newly created post to the front of the list
    function handleCreatePost(newPost) {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    }

    return (
        <div className="posts-page">
            <h2>Posts</h2>
            <CreatePost onCreatePost={handleCreatePost} />
            <PostList posts={posts} onLike={handleLike} onDelete={handleDelete} />
        </div>
    );
}

export default PostsPage;
