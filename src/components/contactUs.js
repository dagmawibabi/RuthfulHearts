import telegram from "../images/icons/telegram.svg";
import instagram from "../images/icons/instagram.svg";

export default function ContactUs() {
  return (
    <div id="contact" className="w-screen h-fit text-center pt-52
      sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen
    ">
      <div className="text-2xl font-bold
        sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl
      ">
        Would you like to reach out?
      </div>

      {/* Socials */}
      <div className="flex justify-center pt-10 gap-10 cursor-pointer
        sm:pt-32 md:pt-32 lg:pt-32 xl:pt-32 2xl:pt-32
      ">

        {/* Instagram */}
        <div className="text-center flex flex-col gap-y-5 hover:gap-y-3 duration-300 [&>*:first-child]:hover:bg-pink-500 [&>*:first-child]:hover:border-cyan-500">
          <div className="rounded-3xl p-0 border-4 pl-[1px]
            bg-pink-500 
            sm:bg-white  md:bg-white  lg:bg-white  xl:bg-white  2xl:bg-white 
            sm:p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2
          ">
            <img src={instagram} alt="instagram" className="w-[73px] h-[73px]
            sm:w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20
            sm:h-20 md:h-20 lg:h-20 xl:h-20 2xl:h-20
            " />
          </div>
          <span className="font-bold text-lg text-pink-500
            sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl
            sm:text-white md:text-white lg:text-white xl:text-white 2xl:text-white
          "> Instagram </span>
        </div>

        {/* Telegram */}
        <div className="text-center flex flex-col gap-y-5 hover:gap-y-3 duration-300 [&>*:first-child]:hover:bg-cyan-500 [&>*:first-child]:hover:border-pink-500">
          <div className="rounded-full p-0 border-4
            bg-cyan-500 
            sm:bg-white  md:bg-white  lg:bg-white  xl:bg-white  2xl:bg-white 
            sm:p-2 md:p-2 lg:p-2 xl:p-2 2xl:p-2
          ">
            <img src={telegram} alt="telegram" className="w-[73px] h-[73px]
              sm:w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20
              sm:h-20 md:h-20 lg:h-20 xl:h-20 2xl:h-20            
            " />
          </div>
          <span className="font-bold text-lg text-cyan-500
            sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl
            sm:text-white md:text-white lg:text-white xl:text-white 2xl:text-white
          "> Telegram </span>
        </div>
      </div>

      <div className="pt-16 font-bold text-xl
        sm:pt-36 md:pt-36 lg:pt-36 xl:pt-36 2xl:pt-36
        sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl
      ">
        We would love to get in touch!
      </div>
    </div>
  );
}
