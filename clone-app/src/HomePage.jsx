import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Homepage.css";
const Homepage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState({});
  const [openComments, setOpenComments] = useState(null);
  const [comments, setComments] = useState({});
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch("/user.json")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user:", err));
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLikes(JSON.parse(localStorage.getItem("likes")) || {});
        setComments(JSON.parse(localStorage.getItem("comments")) || {});
      })
      .catch((err) => console.error("Error fetching posts:", err));
    fetch("/trendy.json")
      .then((res) => res.json())
      .then((data) => setTrending(data))
      .catch((err) => console.error("Error fetching trending news:", err));
  }, []);
  const handleLike = (postId) => {
    const newLikes = { ...likes, [postId]: (likes[postId] || 0) + 1 };
    setLikes(newLikes);
    localStorage.setItem("likes", JSON.stringify(newLikes));
  };
  const toggleComments = (postId) => {
    setOpenComments(openComments === postId ? null : postId);
  };
  return (
    <div>
      <Navbar />
      <div className="homepage-container">
        <div className="left-section">
          {user && (  <>
              <div className="left-block profile-block">
                <div className="half-grey"></div> 
                <div className="profile-content">
                <img src={user.profilePicture} alt="User" className="profile-pic" />
                <h3 className="user-name">{user.name}</h3>
                <p>{user.location}</p>
              </div>
            </div>
              <div className="left-block connections-block">
                <p><strong>Connections</strong></p>
                <p>10</p>
                <p className="connect-link">Connect with alumni</p>
              </div>
              <div className="left-block tools-block">
                <p><strong>Access exclusive tools & insights</strong></p>
                <p>Try 1 month for ₹0</p>
              </div>
              <div className="left-block saved-items">
                <p><i className="fa-solid fa-bookmark"></i> Saved items</p>
                <p><i className="fa-solid fa-users"></i> Groups</p>
                <p><i className="fa-solid fa-envelope"></i> Newsletters</p>
                <p><i className="fa-solid fa-calendar"></i> Events</p>
              </div>
            </>
          )}
        </div>
        <div className="middle-section">
          <div className="post-box">
            <div className="post-box-top">
              {user && <img src={user.profilePicture} alt="User" className="post-profile-pic" />}
              <input type="text" placeholder="Start a post..." className="post-input" />
            </div>
            <div className="post-icons">
              <span className="icon"><i className="fa-solid fa-image"></i> Photo</span>
              <span className="icon"><i className="fa-solid fa-video"></i> Video</span>
              <span className="icon"><i className="fa-solid fa-calendar"></i> Event</span>
              <span className="icon"><i className="fa-solid fa-pen"></i> Write article</span>
            </div>
          </div>
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <div className="post-user-info">
                  <img src={post.userProfilePic} alt={post.userName} className="post-user-pic" />
                  <div className="post-info">
                    <h4>{post.userName}</h4>
                    <p className="user-profession">{post.profession}</p>
                  </div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
              <p>{post.content}</p>
              {post.image && <img src={post.image} alt="Post" className="post-image" />}
              <div className="post-actions">
                <button onClick={() => handleLike(post.id)}>
                  <i className="fa-solid fa-thumbs-up"></i> Like {likes[post.id] || 0}
                </button>
                <button onClick={() => toggleComments(post.id)}>
                  <i className="fa-solid fa-comment"></i> Comment
                </button>
                <button>
                  <i className="fa-solid fa-retweet"></i> Repost
                </button>
                <button>
                  <i className="fa-solid fa-paper-plane"></i> Send
                </button>
              </div>
              {openComments === post.id && (
                <div className="comment-section">
                  {user && (
                    <div className="comment-box">
                      <img src={user.profilePicture} alt="User" className="comment-profile-pic" />
                      <input
                        type="text"
                        placeholder="Write a comment..."
                        className="comment-input"
                        value={comments[post.id] || ""}
                        onChange={(e) => handleCommentChange(post.id, e)}/>
                      <button className="comment-submit" onClick={() => handleCommentSubmit(post.id)}>
                        Post
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="right-section">
          <div className="trending-container">
            <h3>Trending Now <i className="fa-solid fa-info"></i></h3>
            <p className="curated">Curated by LinkedIn News</p>
            <div className="news-wrapper">
              {trending.map((item, index) => (
                <div key={index} className="trending-item">
                  <h4 className="newT">{item.title}</h4>
                  <p className="ago">{item.time} • {item.readers} readers</p>
                </div>
              ))}
            </div>
            <p className="show-more">Show more</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;