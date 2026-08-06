import UserCard from './components/User/UserCard';
import UserProfile from './components/User/UserProfile';
import Footer from './components/Layout/Footer';
import './App.css'

function App() {
  const sampleUser = {
    name: "Christine",
    bio: "Cosmetologist & aspiring web developer",
    avatar: "https://placehold.co/80x80",
    joinDate: "August 2026",
    postCount: 12
  };

  return (
    <div>
      <UserCard user={sampleUser} />
      <UserProfile user={sampleUser} />
    <Footer />
    </div>
   
  );
}

export default App;