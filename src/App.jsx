import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/Layout/PageLayout'
import Sidebar from './components/Layout/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'          // Trevor builds this
import PostDetail from './pages/PostDetail' // Trevor builds this
import CreatePostPage from './pages/CreatePostPage' // Trevor builds this

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout sidebar={<Sidebar />} />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route path="create-post" element={<CreatePostPage />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App