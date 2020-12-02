import React from "react";
// import { useHistory } from 'react-router-dom';

const PostIndexItem = ({ post }) => {
  // const history = usehistory();
  const { title } = post;
  return (
    <div className="video-container">
      <img
        alt="testing"
        src="https://media.istockphoto.com/photos/delicious-meal-on-a-black-plate-top-view-copy-space-picture-id1165399909?k=6&m=1165399909&s=612x612&w=0&h=qM-LhRdpRcrhBwvuFItHoZC-XYxG2xcX8hh42xJgWcw="
      ></img>
      <h1>{title}</h1>
    </div>
  );
};

export default PostIndexItem;
