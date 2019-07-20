import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
    <div className="ui container comments">
        {/* <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
   <div className="content">
    <a href="/" className="author">
        Bob
    </a>
    <div className="metadata">
        <span className="date">Today at 6:00PM</span>
    </div>
    <div className="text">Nice blog post!</div>
        </div>
    </div>
    <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
   <div className="content">
    <a href="/" className="author">
        Mary
    </a>
    <div className="metadata">
        <span className="date">Today at 8:00PM</span>
    </div>
    <div className="text">Nice blog post!</div>
        </div>
    </div>
    <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
   <div className="content">
    <a href="/" className="author">
        Dav
    </a>
    <div className="metadata">
        <span className="date">Today at 10:00PM</span>
    </div>
    <div className="text">Nice blog post!</div>
        </div>
    </div> */}
    {/* //When showing a component do not user "{}" */}
    <CommentDetail author="Sam" timeAgo="Today at 4:45pm" comment="Nice Post!" profilePic={faker.image.avatar()}/>
    <CommentDetail author="Alex" timeAgo="Today at 5:35am" comment="This is Horrible." profilePic={faker.image.avatar()}/>
    <CommentDetail author="Jane" timeAgo="Yesterday at 6:51pm" comment="What?" profilePic={faker.image.avatar()}/>
    </div>
   
    
        );
};

ReactDom.render(<App />, document.querySelector('#root'));
