import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/Sidebar';

const Post = (props) =>{
    return (
        <div className="container">
            <BlogPost {...props}/> 
            <SideBar/>
        </div>
    )
};

export default Post;