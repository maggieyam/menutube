import React from 'react';
import FeedVideo from '../videos/feed_video';
import DraggableVideo from '../calendar/draggablevideo';


export default ({post}) => {
  return <FeedVideo {...post} />;
}