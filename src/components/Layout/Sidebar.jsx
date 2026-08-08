function Sidebar() {
  const popularPosts = [
    "Getting Started with React",
    "Why JavaScript is Fun",
    "Understanding Props"
  ];

  const tags = ["react", "javascript", "webdev", "community"];

  return (
    <aside className="sidebar">
      <section>
        <h3>About</h3>
        <p>CommunityHub is a place to share and discover posts with people who care about the same things you do.</p>
      </section>

      <section>
        <h3>Popular Posts</h3>
        <ul>
          {popularPosts.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Tags</h3>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;