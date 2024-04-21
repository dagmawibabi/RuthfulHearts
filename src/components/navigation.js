// import { Link } from "react-router-dom";
import logo from "../images/logo/logo.png";

export default function Navigation() {
  return (
    <div
      className="w-screen border-b border-b-cyan-950 border-opacity-50 p-5 items-center sticky top-0 left-0 right-0 bg-[#151515] backdrop-blur-xl bg-opacity-80 z-50
       md:justify-between
      lg:flex lg:justify-between
      xl:flex xl:justify-between
      2xl:flex 2xl:justify-between  
      overflow-hidden  
    "
    >
      <div className="flex justify-center">
        <img
          src={logo}
          alt="logo"
          className="w-60 sm:w-72 lg:w-72 xl:w-72 2xl:w-72 "
        ></img>
      </div>
      <div
        className="flex items-center justify-center gap-3 font-bold text-sm  uppercase cursor-pointer duration-300
        pt-5 
        lg:justify-between 
        lg:pt-0 xl:pt-0 2xl:pt-0
        sm:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4
        sm:text-base lg:text-base xl:text-base 2xl:text-base
        lg:hover:[&>a]:text-cyan-400 xl:hover:[&>a]:text-cyan-400 2xl:hover:[&>a]:text-cyan-400 
      "
      >
        <a href="/" rel="noreferrer">
          <span> Home </span>
        </a>

        <a href="/blog">
          <span>Blog</span>
        </a>

        <a href="/#about" rel="noreferrer">
          <span> About </span>
        </a>
        <a href="/#contact" rel="noreferrer">
          <span> Contact </span>
        </a>
        <a href="/teams">
          <span> teams </span>
        </a>
        <div className="flex flex-row gap-3 ">
          <a href="/#donate" rel="noreferrer">
            <div className="duration-300 rounded-full text-emerald-500 sm:px-5 lg:px-5 xl:px-5 2xl:px-5 sm:py-2 lg:py-2 xl:py-2 2xl:py-2 sm:text-black lg:text-black xl:text-black 2xl:text-black sm:bg-cyan-500 lg:bg-cyan-500 xl:bg-cyan-500 2xl:bg-cyan-500 lg:hover:bg-emerald-500 xl:hover:bg-emerald-500 2xl:hover:bg-emerald-500 ">
              <span> Donate </span>
            </div>
          </a>
          <a href="/#thanks" rel="noreferrer" className="hidden md:block">
            <div className="text-pink-400 duration-300 rounded-full sm:px-6 lg:px-6 xl:px-6 2xl:px-6 sm:py-2 lg:py-2 xl:py-2 2xl:py-2 sm:text-black lg:text-black xl:text-black 2xl:text-black sm:bg-pink-400 lg:bg-pink-400 xl:bg-pink-400 2xl:bg-pink-400 lg:hover:bg-white xl:hover:bg-white 2xl:hover:bg-white ">
              <span> Thank You </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
