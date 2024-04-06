import React, { useEffect, useState } from 'react'
import { client } from '../lib/sanity/client';
import PortableTextEditor from '../components/sanity/portableText';
import { shortener, urlForImage } from '../lib/utils';
import { Link } from 'react-router-dom';
import Navigation from '../components/navigation';
const BlogLists = () => {

    const [posts, setPosts] = useState([])
    const [loading,setLoading] =  useState(true)

    const postQuery = `*[_type == "post"]| order(_createdAt desc, _updatedAt desc)  {
        ...,
        author->,
        categories[]->
      }  
      `

    useEffect(()=>{

      const fetchPostLists = async ()=>{
        const res = await client.fetch(postQuery, {},{tag:'posts'})
        setPosts(res)
        setLoading(false)
      }

      fetchPostLists()


    //     client
    // .fetch(postQuery, {},{tag:'posts'})
    // .then(res => {
    //   console.log("Post info: ", res);
    //     setPosts(res);
    //    // Here is when i tried to log the data but gets an error message.
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    },[])
  return (
    <>
      <Navigation/>
      <section className="">
        <header className='flex flex-col justify-center items-center p-4 md:p-12 border-b-2 border-b-zinc-900'>
          <h1 className="md:text-6xl font-extralight text-center">Ruthful Blogs</h1>
          <p className='text-center md:w-[50%]'>Discover tales of transformation, anonymous acts of kindness, and the power of compassion on our Ruthful Hearts blog.</p>
        </header>
          <div className='py-10'>
           
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-24 pb-24 justify-between items-stretch">
                  {
                    loading?(
                      <BlogListsFallback/>
                    ):(
                      
                        posts.map((post, index) => (
                            <div className='flex flex-col justify-between' key={index}>
                                <div >
                                <img className='object-cover h-[15rem] w-full' src={urlForImage(post.mainImage).url()} alt='example_image' />
                                <h4 className='p-2'>{shortener(post.title,120)}...</h4>
                                <p className='px-2'>{shortener(post.description,120)}...</p>
                                {index % 2 === 1 && <hr />} 
                                </div>
                                <Link to={`/blog/${post?.slug?.current}`} className='px-4 py-2 w-full text-start'>read more</Link>
                            </div>
                        ))
                  
                    )
                  }
                </div>
          </div>
      </section>
    </>
  );


}

export default BlogLists



const BlogListsFallback = () => {
  return (
    <>
    {
          [1,2,3,4,5,6].map((post, index) => (
              
            <div key={index} className='flex flex-col gap-2 p-4' >
                  <div className='h-[15rem] w-full bg-[#14374230] animate-pulse' />
                  <div className='p-2 w-full h-4 bg-[#13394330] animate-pulse ' />
                  <div className='p-2 w-[40%] h-2 bg-[#1d4b5830] animate-pulse ' />

                  <div className='p-2 w-full h-1 bg-[#1d4b5830] animate-pulse ' />
                  <div className='p-2 w-full h-1 bg-[#1d4b5830] animate-pulse ' />
                  <div className='p-2 w-[40%] h-1 bg-[#1d4b5830] animate-pulse ' />
            </div>
              
          ))
      }
    </>
  )
}