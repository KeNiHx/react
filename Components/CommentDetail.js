import React from 'react';
import faker from 'faker';

//new component
const CommentDetail = (props) => {
    // console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
            <img alt="avatar" src={props.profilePic}/>
            </a>
        <div className="content">
        <a href="/" className="author">
        {props.author}
        </a>
        <div className="metadata">
            <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
            </div>
        </div>
    );
};

//makes this component avaliable 
export default CommentDetail;