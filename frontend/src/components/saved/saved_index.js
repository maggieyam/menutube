import React from 'react';
import SavedIndexItem from './saved_index_item';


class SavedIndex extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){

    if (Object.keys(this.props.posts).length === 0) return null;
    debugger

    return (
      <div className="saved-posts-wrapper">
        <ul className="saved-posts">
          {this.props.posts.map(post => {
            return <SavedIndexItem post={post} />
          })}
        </ul>
      </div>
    )
  }
}

export default SavedIndex;