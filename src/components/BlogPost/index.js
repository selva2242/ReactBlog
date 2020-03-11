import React, {useState, useEffect}from 'react';
import './style.css'
import Card from '../UI/Card';
import blogPost from '../../containers/data/blog.json'

const BlogPost = (props) => {

    const [post, setPost] = useState({
        blogImage : "post1Image.jpg"
    });

    useEffect(()=>{
        const postId = props.match.params.postId;
        console.log(blogPost)
        const Post = blogPost.data.find(post=>post.id==postId);
        setPost(Post);
    }, )

    
    return (
        <div className="blogPostContainer">
            <Card >
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted {post.postedOn} by author {post.author}</span>
                </div>
                <div className="imageContainer">
                    <img src={require('../../assests/blogPostImages/'+post.blogImage)} alt={post.blogTitle}/>
                    <div className="blogText">
                        {post.blogText}
                    </div>
                </div>
                
            </Card>
        </div>
        
    )
};

export default BlogPost;