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
            <div className='w-[55%]'>
                <img className='w-full h-full object-cover' src={post.mainImage ? urlForImage(post.mainImage).url() : "fallback-image-url" }
 alt='testing'  />
            </div>
            <div className='col-span-1 px-6 overflow-auto w-full'>
              
              {/* <p>{post.description}</p> */}
            
                  <PortableTextEditor body={post.body} />
              
            </div>
        </div>
        
    </>
  )
}

export default Blog