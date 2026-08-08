function UserCard({ user }) {
    return (
        <div className="user-card">
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <h3>{user.name}</h3>
            <p>{user.bio}</p>
        </div>
    );
}

export default UserCard;