import { useState } from 'react'
import './App.css'

import PageLayout from './components/Layout/PageLayout'
import Sidebar from './components/Layout/Sidebar'
import PostList from './components/Post/PostList'
import CreatePost from './components/Post/CreatePost'
import UserCard from './components/User/UserCard'
import UserProfile from './components/User/UserProfile'

function App() {
  // Posts state — lifted up so PostList, PostCard, and CreatePost all share it
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how components work...",
      author: "Trevor Wachira",
      date: "Jan 15, 2026",
      likes: 3
    },
    {
      id: 2,
      title: "Why JavaScript is Fun",
      excerpt: "A quick look at what makes JS such an interesting language...",
      author: "Christine Wambui",
      date: "Jan 10, 2026",
      likes: 5
    },
    {
      id: 3,
      title: "Setting Up Our Team Repo",
      excerpt: "How we structured CommunityHub and split up ownership...",
      author: "Gilbert Mungai",
      date: "Aug 5, 2026",
      likes: 1
    }
  ])

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, likes: post.likes + 1 }
        : post
    ))
  }

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  // Sample users — placeholder data until Auth is wired in
  const users = [
    {
      id: 1,
      name: "Gilbert Mungai",
      avatar: "https://github.com/dream333wxrld-juice.png",
      bio: "Team lead. Building the frontend one component at a time."
    },
    {
      id: 2,
      name: "Trevor Wachira",
      avatar: "https://github.com/TrevorWachira690.png",
      bio: "Handles the posts feature — feed, cards, and creation."
    },
    {
      id: 3,
      name: "Christine Wambui",
      avatar: "https://github.com/kaywambui-1.png",
      bio: "Owns profiles and footer. Detail-oriented."
    }
  ]

  const currentUser = {
    name: "Gilbert Mungai",
    avatar: "https://github.com/dream333wxrld-juice.png",
    bio: "Team lead for CommunityHub. Full-stack learner at IYF.",
    joinDate: "Aug 2026",
    postCount: posts.filter(p => p.author === "Gilbert Mungai").length
  }

  return (
    <PageLayout sidebar={<Sidebar />}>
      <h2>Welcome to CommunityHub</h2>

      <section>
        <h3>Your Profile</h3>
        <UserProfile user={currentUser} />
      </section>

      <section>
        <h3>Create a Post</h3>
        <CreatePost onCreatePost={handleCreatePost} />
      </section>

      <section>
        <h3>Posts</h3>
        <PostList posts={posts} onLike={handleLike} onDelete={handleDelete} />
      </section>

      <section>
        <h3>Community Members</h3>
        <div className="user-list" style={{ display: 'flex', gap: '1rem' }}>
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </section>
    </PageLayout>
  )
}

export default App