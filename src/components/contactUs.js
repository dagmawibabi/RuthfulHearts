import telegram from "../images/icons/telegram.svg";
import instagram from "../images/icons/instagram.svg";

export default function ContactUs() {
  return (
    <div className="w-screen h-screen text-center pt-32">
      <div className="text-5xl font-bold mt-48 ">
        Would you like to reach out?
      </div>
      <div className="flex justify-center pt-32">
        <div className="text-center mr-20">
          <div className="rounded-3xl p-2 mb-5 hover:mb-3 bg-white border-4 hover:bg-pink-500  hover:border-cyan-500 duration-300">
            <img src={instagram} alt="instagram" className="w-20 h-20" />
          </div>
          <span className="font-bold text-xl"> Instagram </span>
        </div>
        <div>
          <div className="rounded-full p-2 mb-5 hover:mb-3 bg-white border-4 hover:bg-cyan-500  hover:border-pink-500 duration-300">
            <img src={telegram} alt="telegram" className="w-20 h-20" />
          </div>
          <span className="font-bold text-xl"> Telegram </span>
        </div>
      </div>

      <div className="mt-36 font-bold text-2xl">
        {" "}
        We would love to get in touch!{" "}
      </div>
    </div>
  );
}
