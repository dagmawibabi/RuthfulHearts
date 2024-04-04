import React,{useEffect, useState} from 'react'
import Navigation from '../components/navigation'
import { useParams } from 'react-router-dom'
import { client } from '../lib/sanity/client';
import PortableTextEditor from '../components/sanity/portableText';
import { urlForImage } from '../lib/utils';

const Blog = () => {
  const params  = useParams()

  const [post, setPost] = useState([])
  const [count,setCount] = useState(0)



  useEffect(()=>{

    const postQuery = `*[_type == "post" && slug.current == $slug] {
      ...,
      author->,
      categories[]->,
      "audioUrl": audio.asset -> url 
    }
    [0]`

    client
    .fetch(postQuery, {slug:params.slug},{tag:'post'})
    .then(res => {
        console.log("Post info: ", res);
          setPost(res);
          
          // Here is when i tried to log the data but gets an error message.
      })
      .catch(err => {
        console.log(err);
      });

  },[params.slug])

  return (
    <>
      <Navigation/>

      <div className="flex h-[86vh] overflow-hidden">
        <div className='relative w-[65%]'>
          <div className="absolute bottom-0 flex flex-col gap-0 justify-end items-end w-full h-2/3 bg-gradient-to-t from-black">
            
            <div className="flex gap-2 w-full h-fit items-center px-4 py-2" >
              <img className='h-[3rem] w-[3rem] rounded-full border-2 border-stone-600 justify-end items-center' src={post.mainImage ? urlForImage(post.mainImage).url() : "fallback-image-url" }  alt='this is a test avatar'/>
              <ul className="flex flex-col justify-center">
                <li className='text-xs text-gray-400'>written by</li>
                <li className='text-gray-200'>{post.author.name}</li>
              </ul>
            </div>
            <div className='flex flex-col gap-2 w-full h-fit '>
              <h3 className='text-2xl font-bold text-stone-300 w-full px-3'>{post.title}</h3>
            </div>
          </div>
          <img className='w-full h-full object-cover' src={post.mainImage ? urlForImage(post.mainImage).url() : "fallback-image-url" } alt='testing'  />
        </div>
        <div className='col-span-1 px-10 overflow-auto w-full'>
          {/* <p>{post.description}</p> */}
          <PortableTextEditor body={post.body} />
        </div>
      </div>
    </>
  )
}

export default Blog