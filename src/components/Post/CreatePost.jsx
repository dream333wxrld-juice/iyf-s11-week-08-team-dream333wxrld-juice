import { useState } from 'react';

function CreatePost({ onCreatePost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!title.trim() || !content.trim()) return;

        const newPost = {
            id: Date.now(),
            title,
            excerpt: content.slice(0, 100),
            author: 'You',
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }),
            likes: 0,
        };

        onCreatePost(newPost);

        // Reset form
        setTitle('');
        setContent('');
    }

    return (
        <form onSubmit={handleSubmit} className="create-post-form">
            <h3>Create a New Post</h3>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Post content"
                required
            />
            <button type="submit">Post</button>
        </form>
    );
}

export default CreatePost;
