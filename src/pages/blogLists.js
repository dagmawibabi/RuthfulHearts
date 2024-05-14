import React, { useEffect, useState } from "react";
import { client } from "../lib/sanity/client";
// import PortableTextEditor from '../components/sanity/portableText';
import { shortener, urlForImage } from "../lib/utils";
import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
const BlogLists = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const postQuery = `*[_type == "post"]| order(_createdAt desc, _updatedAt desc)  {
        ...,
        author->,
        categories[]->
      }  
      `;

  useEffect(() => {
    const fetchPostLists = async () => {
      const res = await client.fetch(postQuery, {}, { tag: "posts" });
      setPosts(res);
      setLoading(false);
    };

    fetchPostLists();

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
  }, []);
  return (
    <>
      <Navigation />
      <section className="bg-[#141416]">
        <header className="flex flex-col items-center justify-center p-4 border-b-2 md:p-12 border-b-zinc-900">
          <h1 className="text-center md:text-6xl font-extralight">
            Ruthful Blogs
          </h1>
          <p className="text-center md:w-[50%] py-2 md:text-lg">
            Discover tales of transformation, anonymous acts of kindness, and
            the power of compassion on our Ruthful Hearts blog.
          </p>
        </header>
        <div className="py-10">
          <div className="grid items-stretch justify-between grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3 md:px-24">
            {loading ? (
              <BlogListsFallback />
            ) : (
              posts.map((post, index) => (
                <Link
                  to={`/blog/${post?.slug?.current}`}
                  className="flex flex-col justify-between bg-[#0b1d2230] p-2 rounded-md cursor-pointer hover:bg-[#1f3f4830] transition-all duration-500"
                  key={index}
                >
                  <div>
                    <img
                      className="object-cover h-[15rem] w-full"
                      src={urlForImage(post.mainImage).url()}
                      alt="example_image"
                    />
                    <h1 className="p-2 text-xl md:text-2xl font-extrabold text-white">{shortener(post.title, 120)}...</h1>
                    <p className="px-2 text-md md:text-xl">
                      {shortener(post.description, 120)}...
                    </p>
                    {index % 2 === 1 && <hr />}
                  </div>
                  <Link className="w-full px-4 py-2 text-start">read more</Link>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLists;

const BlogListsFallback = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((post, index) => (
        <div key={index} className="flex flex-col gap-2 p-4">
          <div className="h-[15rem] w-full bg-[#14374230] animate-pulse" />
          <div className="p-2 w-full h-4 bg-[#13394330] animate-pulse " />
          <div className="p-2 w-[40%] h-2 bg-[#1d4b5830] animate-pulse " />

          <div className="p-2 w-full h-1 bg-[#1d4b5830] animate-pulse " />
          <div className="p-2 w-full h-1 bg-[#1d4b5830] animate-pulse " />
          <div className="p-2 w-[40%] h-1 bg-[#1d4b5830] animate-pulse " />
        </div>
      ))}
    </>
  );
};
