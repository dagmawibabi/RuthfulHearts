import logo from "../images/logo/logo.png";

export default function Navigation() {
  return (
    <div className="flex justify-between border-b border-b-cyan-950 border-opacity-50 p-5 items-center sticky top-0 left-0 right-0 bg-[#151515] backdrop-blur-2xl z-50 opacity-95">
      <img src={logo} alt="logo" className="w-72"></img>
      <div className="flex justify-between w-56 font-bold text-base hover:[&>span]:text-cyan-400 uppercase cursor-pointer backdrop-blur-2xl">
        <span> Home </span>
        <span> About </span>
        <span> Contact </span>
      </div>
    </div>
  );
}
