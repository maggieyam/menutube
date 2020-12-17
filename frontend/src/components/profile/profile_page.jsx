import React,{useEffect} from "react";
import { useRouteMatch, useHistory } from 'react-router-dom'; 
import { fetchUserPosts } from "../../actions/post_actions";
import "./profile.css";
const Profile = () => {
  const match = useRouteMatch();

  useEffect(() => {
    fetchUserPosts(match.params.userId)
  },[fetchUserPosts])

 
    return (
      <div className="profile-container">
        <div>
          <div>
            <img
              className="profile-test-img"
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
            <h4>Username</h4>
            <div className="user-saves">
              <h6>50 Favorites</h6>
              <h6>40 Posts</h6>
            </div>
            <div className="user-post-container">
              {" "}
              {/** This will contain videos for Users need route */}
              
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Profile;
