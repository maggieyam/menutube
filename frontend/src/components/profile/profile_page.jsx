import React, { Component } from "react";
import PostIndexItem from "../posts/post_index_item";
import { Link } from "react-router-dom";
import "./profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserPosts(this.props.match.params.userId);
  }

  render() {
    const posts = !this.props.posts
      ? null
      : this.props.posts.map((post) => {
          return <Link to={`/show/${post._id}`}>{post.title} </Link>;
        });

    return (
      <div className="profile-container">
        <div>
          <div>
            {/* Profile Pic */}
            <img
              className="profile-test-img"
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
    {/* <h4>{this.props.user}</h4> */}
            <div className="user-saves">
              {/* <h6>50 Favorites</h6> for user saves */}
              <h6>{posts.length} Posts</h6>
            </div>
            <div className="user-post-container">
              {" "}
              {/** This will contain videos for Users need route */}
              <div className="user-posts">{posts}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
