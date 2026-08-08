function UserProfile({ user }) {
    return (
        <div className="user-profile">
            <img src={user.avatar} alt={user.name} className="profile-avatar" />
            <h2>{user.name}</h2>
            <p className="profile-bio">{user.bio}</p>
            <div className="profile-meta">
                <span>Joined: {user.joinDate}</span>
                <span>Posts: {user.postCount}</span>
            </div>
        </div>
    );
}

export default UserProfile;