
import { FaFacebookF, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa"
import { getDomain } from "../lib/utils"
import { FacebookShareButton, LinkedinShareButton, TelegramShareButton, TwitterShareButton } from "react-share"


const ShareBar = ({post}) => {
  return (
    <ul className="social-card  flex flex-row justify-center items-center gap-5 px-4 py-8 bg-transparent rounded-r-[10px] text-stone-800 md:text-stone-100 dark:text-stone-100  pointer-events-auto">
        <li className="text-xl text-center hover:scale-105 hover:text-cyan-600 cursor-pointer transition-all duration-700"><FacebookShareButton url={`${getDomain()}/blog/${post?.slug?.current}`} hashtag={post?.categories?.length?post.categories[0]?.title : ""}><FaFacebookF/></FacebookShareButton></li>
        <li className="text-xl text-center hover:scale-105 hover:text-cyan-600 cursor-pointer transition-all duration-700"><TwitterShareButton title={post.title} hashtags={post?.categories?.map((categ,ind)=>(categ.title))}  url={`${getDomain()}/blog/${post?.slug?.current}`}><FaTwitter/></TwitterShareButton></li>
        <li className="text-xl text-center hover:scale-105 hover:text-cyan-600 cursor-pointer transition-all duration-700"><LinkedinShareButton title={post.title}   url={`${getDomain()}/blog/${post?.slug?.current}`}><FaLinkedin/></LinkedinShareButton></li>
        <li className="text-xl text-center hover:scale-105 hover:text-cyan-600 cursor-pointer transition-all duration-700"><TelegramShareButton title={post.title}   url={`${getDomain()}/blog/${post?.slug?.current}`}><FaTelegram/></TelegramShareButton></li>
    </ul>
  )
}

export default ShareBar