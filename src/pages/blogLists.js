import React, { useEffect, useState } from 'react'
import { client } from '../lib/sanity/client';
import PortableTextEditor from '../components/sanity/portableText';
import { urlForImage } from '../lib/utils';
import { Link } from 'react-router-dom';

const BlogLists = () => {

    const [posts, setPosts] = useState([])

    const postQuery = `*[_type == "post"]| order(_createdAt desc, _updatedAt desc)  {
        ...,
        author->,
        categories[]->
      }  
      `

    useEffect(()=>{
        client
    .fetch(postQuery, {},{tag:'posts'})
    .then(res => {
      console.log("Post info: ", res);
        setPosts(res);
       // Here is when i tried to log the data but gets an error message.
    })
    .catch(err => {
      console.log(err);
    });
    },[])
  return (
    <div>
      <h1>{posts.length} blogs to so far </h1>
       
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-24">
           {
                posts.map((post, index) => (
                    <Link to={`/blog/${post.slug.current}`} key={index}>
                        <div >
                        <img src={urlForImage(post.mainImage).url()} alt='example image' />
                        <h4>{post.title}</h4>
                        <p>{(post.description).substring(200)}...</p>
                        {index % 2 === 1 && <hr />} 
                    </div>
                    </Link>
                ))
            }
           </div>
    </div>
  );


}

export default BlogLists