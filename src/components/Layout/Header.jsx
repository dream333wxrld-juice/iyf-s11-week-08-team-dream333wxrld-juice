function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>CommunityHub</h1>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Posts</a>
        <a href="#">About</a>
      </nav>
      <div className="user-menu">
        <button className="login-btn">Log In</button>
      </div>
    </header>
  );
}

export default Header;