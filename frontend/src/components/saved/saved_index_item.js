import React from 'react';
import FeedVideo from '../videos/feed_video';
import DraggableVideo from '../calendar/draggablevideo';


export default ({post}) => {
  return <DraggableVideo 
            id={post._id}
            key={post._id}
            contents={<FeedVideo {...post} />}
          />;
}