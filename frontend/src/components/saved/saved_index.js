import React from 'react';
import SavedIndexItem from './saved_index_item';


class SavedIndex extends React.Component {

  componentDidMount(){
    // fetch posts
    // fetch current user
  }

  render(){

    if (this.props.posts.length === 0) return null;

    return (
      <div className="saved-posts-wrapper">
        <ul className="saved-posts">
          {this.props.posts.slice(0,1).map(post => {
            return <SavedIndexItem key={post._id} post={post} />
          })}
        </ul>
      </div>
    )
  }
}

export default SavedIndex;