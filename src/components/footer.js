export default function Footer() {
  return (
    <div className="w-screen py-5 text-zinc-200 text-center bg-black cursor-pointer text-sm
      sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base 
    ">
      Made with{" "}
      <span className="text-pink-500 font-bold hover:text-cyan-400">
        {" "}
        Love{" "}
      </span>{" "}
      for
      <span className="text-cyan-400 font-bold hover:text-pink-500">
        {" "}
        Love{" "}
      </span>
      <span className="text-zinc-500">&copy; Dream Intelligence</span>
    </div>
  );
}
