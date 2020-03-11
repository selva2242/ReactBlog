import React, {useState, useEffect}from 'react';
import './style.css'
import Card from '../UI/Card';
import blogPost from '../../containers/data/blog.json'
import {NavLink} from 'react-router-dom';


const SideBar = (props) =>{

    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        const post = blogPost.data
        setPosts(post)
    },[])
    return (
        <div className="sideBarContainer">
            <Card style={{marginBottom:'20px'}}>
                <div className="cardHeader">
                    <span> About me</span>
                </div>
                <div className="bloggerImage">
                    <img  src={require('../../assests/blogPostImages/iAmBloggerImage.png')}alt=""/>
                </div>
                <div>
                    <p className="personalBio">I am blogger - that is amazing for me, because it captures a moment in time everyday</p>
                </div>
            </Card>
            
            <Card style={{marginBottom:'20px'}}>
                <div className="cardHeader">
                    <span> social media</span>
                </div>
            </Card>

            <Card style={{marginBottom:'20px'}}>
                
                <div className="cardHeader">
                    <span> recent Posts</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.map(post=>{
                            return(
                                            <div className="recentPost">
                                            <NavLink to={`/post/${post.id}`}>
                                                <h3 >{post.blogTitle}</h3>
                                            </NavLink>
                                                <span>{post.postedOn}</span>
                                            </div>
                            )
                        })
                    }
                    
                </div>
                
            </Card>
        </div>
        
    )
};

export default SideBar;