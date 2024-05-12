import React, { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import { Link, useParams } from "react-router-dom";
import { client } from "../lib/sanity/client";
import PortableTextEditor from "../components/sanity/portableText";
import { urlForImage } from "../lib/utils";
import ShareBar from "../components/sharebar";
import style from "./blog.module.css";

const Blog = () => {
  const params = useParams();

  const [post, setPost] = useState([]);
  // const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postQuery = `*[_type == "post" && slug.current == $slug] {
      ...,
      author->,
      categories[]->,
      "audioUrl": audio.asset -> url 
    }
    [0]`;

    const fetchPost = async () => {
      const res = await client.fetch(
        postQuery,
        { slug: params.slug },
        { tag: "post" }
      );
      setPost(res);
      setLoading(false);
    };

    fetchPost();

    // client
    // .fetch(postQuery, {slug:params.slug},{tag:'post'})
    // .then(res => {
    //     console.log("Post info: ", res);
    //       setPost(res);

    //       // Here is when i tried to log the data but gets an error message.
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, [params.slug]);

  return (
    <>
      <Navigation />
      {loading ? (
        <BlogFallback />
      ) : (
        <section className="z-20 flex flex-col items-center w-full min-h-screen gap-4 px-4 md:px-12 lg:px-36 bg-[#141416]">
          <div className="z-20 flex  flex-col gap-4  items-center w-[95%] md:w-[80%] min-h-screen bg-[#141416]">
            <div className={style.portable}>

            <div className="flex flex-col gap-2 border-b post-header border-b-gray-800">
              <div className="relative w-full border-none image-container">
                <img
                  className={`w-full h-full border-2 border-[#1d4b5830]`}
                  src={post.mainImage && urlForImage(post.mainImage).url()}
                  alt={post.title}
                />
              </div>
              <div className="">
                <div className="flex items-center justify-between w-full">
                  <Link to="/" className="px-4 text-sm text-gray-400">
                    return to home
                  </Link>
                  <div className="flex items-center gap-2 author-avatar">
                    <div className="relative w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 border-stone-600">
                    <img
                      className="   justify-end items-center bg-[#1d4b5830] "
                      src={
                        post.author
                          ? urlForImage(post.author.image).url()
                          : "fallback-image-url"
                      }
                      alt="avatar"
                    />
                    </div>
                    <ul className="flex flex-col justify-center">
                      <li className="text-[10px] text-gray-400">written by</li>
                      <li className="text-gray-200">
                        {post.author && post.author.name}
                      </li>
                    </ul>
                  </div>
                </div>
                <h1 className="p-0 mt-1 title text-start md:text-4xl">
                  {post.title}
                </h1>
              </div>

              <div className="flex justify-start w-full">
                <ShareBar post={post} />
              </div>
            </div>
            <div >
              <PortableTextEditor body={post.body} />
            </div>
            </div>
            
          </div>

          {/* <div className="w-full px-2 ">
                <div className="imageContainer relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem]">
                    <img className='object-cover' src={post.mainImage && urlForImage(post.mainImage).url()} alt={post.title}/>
                </div>
               < div className='flex mt-12 post-header '>
                <h1 className="w-full p-0 m-0 text-center title ">{post.title}</h1>
                <Link to="/">return to home</Link>
            </div>

            </div>
            


            
           {/* this is a like dislike button  */}

          {/* this is a like dislike button  */}
        </section>
      )}
    </>
  );
};

export default Blog;

const BlogFallback = () => {
  return (
    <section className="z-20 flex flex-col items-center w-full min-h-screen gap-4 px-1 md:px-12 lg:px-36 bg-[#141416]">
      <div className="z-20 flex  flex-col gap-4  items-center w-[95%] md:w-[80%] min-h-screen">
        <div className="flex flex-col items-center w-full min-h-screen gap-4">
          <div className="post-header flex flex-col gap-2 w-[95%] border-b border-b-gray-800">
            <div className="relative w-full border-none image-container">
              <div
                className={`object-cover h-[26rem] bg-[#1d4b5830] animate-pulse border-2 border-[#1d4b5830]`}
              ></div>
            </div>
            <div className="">
              <div className="flex items-center justify-between w-full">
                <Link to="/" className="px-4 text-sm text-gray-400">
                  return to home
                </Link>
                <div className="flex items-center gap-2 author-avatar h-fit ">
                  <div className="h-[2rem] w-[2rem] rounded-full border-2 border-stone-600 justify-end items-center bg-[#1d4b5830] animate-pulse"></div>
                  <ul className="flex flex-col justify-center">
                    <li className="text-[10px] text-gray-400">written by</li>
                    <li className="text-gray-200 bg-[#1d4b5830] animate-pulse h-2 w-full" />
                  </ul>
                </div>
              </div>
              <div className="title text-start p-0 mt-1  text-4xl bg-[#1d4b5830] animate-pulse w-[70%] h-4" />
              <div className="title text-start p-0 mt-1  text-4xl bg-[#1d4b5830] animate-pulse w-[40%] h-4 mt-2" />

              <div className="flex justify-start w-full gap-2 p-2">
                <div className="bg-[#1d4b5830] w-12 h-4 animate-pulse" />
                <div className="bg-[#1d4b5830] w-12 h-4 animate-pulse" />
                <div className="bg-[#1d4b5830] w-12 h-4 animate-pulse" />
              </div>
            </div>

            <div className="flex justify-start w-full">
              <div className="bg-[#1d4b5830] animate-pulse"></div>
            </div>
          </div>

          <div className="flex flex-col justify-center w-full gap-4 px-6 content">
            <div className="bg-[#1d4b5830] animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
