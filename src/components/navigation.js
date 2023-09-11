import logo from "../images/logo/logo.png";

export default function Navigation() {
    return  (
        <div className="flex justify-between border-b border-b-cyan-950 border-opacity-50 p-5 items-center">
            <img src={logo} alt="logo" className="w-72"></img>
            <div className="flex justify-between w-56 font-bold text-base hover:[&>span]:text-cyan-400 uppercase cursor-pointer">
                <span> Home </span>
                <span> About </span>
                <span> Contact </span>
            </div>
        </div>
    )
}