import telegram from "../images/icons/telegram.svg";
import instagram from "../images/icons/instagram.svg";

export default function ContactUs() {
  return (
    <div className="w-screen h-screen text-center pt-52" id="contact">
      <div className="text-5xl font-bold">Would you like to reach out?</div>
      <div className="flex justify-center pt-32  gap-10 cursor-pointer">
        <div className="text-center flex flex-col gap-y-5 hover:gap-y-3 duration-300 [&>*:first-child]:hover:bg-pink-500 [&>*:first-child]:hover:border-cyan-500">
          <div className="rounded-3xl p-2 bg-white border-4  ">
            <img src={instagram} alt="instagram" className="w-20 h-20" />
          </div>
          <span className="font-bold text-xl"> Instagram </span>
        </div>
        <div className="text-center flex flex-col gap-y-5 hover:gap-y-3 duration-300 [&>*:first-child]:hover:bg-cyan-500 [&>*:first-child]:hover:border-pink-500">
          <div className="rounded-full p-2 bg-white border-4">
            <img src={telegram} alt="telegram" className="w-20 h-20" />
          </div>
          <span className="font-bold text-xl"> Telegram </span>
        </div>
      </div>

      <div className="mt-36 font-bold text-2xl">
        We would love to get in touch!
      </div>
    </div>
  );
}
