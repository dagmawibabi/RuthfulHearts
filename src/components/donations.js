// import image1 from "../images/illustrations/Bust/peep-18.png";
import telegram from "../images/icons/telegram.svg";
import chapa from "../images/icons/chapa.png";

export default function Donations() {
  return (
    <div className="w-screen h-screen text-center pt-36" id="donate">
      <div className="text-5xl font-bold"> Donate Now </div>

      {/* STEPS TO DONATE */}
      <div className="flex justify-center gap-10 p-5 py-20">
        <div className="steps steps-vertical flex flex-col ">
          <div className="step step-success py-2 ">
            <div className="py-2 w-full px-10 cursor-pointer">
              <div className="rounded-full py-2 bg-cyan-500 flex gap-3 items-center pr-5 justify-center hover:bg-emerald-500 duration-300">
                <img src={telegram} alt="telegram" className="w-10" />
                <div className="font-bold text-black text-xl">
                  Goto our Telegram Channel
                </div>
              </div>
            </div>
          </div>
          <div className="step step-success py-2 cursor-default">
            <div className="w-full px-10">
              <div className="border border-neutral-700 text-center py-4 px-10 font-bold text-xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-full">
                Choose any<span className="text-pink-500">*</span> Donation
                Amount in the Channel
              </div>
            </div>
          </div>
          <div className="step step-success py-3 cursor-default">
            <div className="py-2 w-full px-10 flex gap-3">
              <div className="py-3 pl-6 pr-5 rounded-tl-full rounded-bl-full font-bold text-black border border-dashed border-emerald-500 text-x">
                <img src={chapa} alt="chapa" className="w-14 " />
              </div>
              <div className="py-3 w-full px-5 rounded-tr-full rounded-br-full font-bold text-black bg-emerald-500 text-xl">
                Donate Using Your Preferred Payment Provider
              </div>
            </div>
          </div>

          <div className="step step-success py-0 cursor-pointer">
            <div className="w-full px-10">
              <div className="border border-dashed text-center py-4 px-5 font-bold text-xl border-pink-500 text-pink-500 rounded-full hover:text-cyan-500 hover:border-cyan-500 duration-300">
                Join the Channel and See the wonders the Donations Do
              </div>
            </div>
          </div>

          <div className="step step-success py-4 cursor-default">
            <div className="w-full px-10">
              <div className="relative">
                <div className="absolute py-4 px-5 w-full text-black text-center font-bold text-xl rounded-full bg-red-300 opacity-0 hover:opacity-100 duration-500">
                  YOU'VE GOT A RUTHFUL HEART! ❤️
                </div>
                <div className="py-4 px-5 bg-neutral-300 text-black text-center font-bold text-xl rounded-full">
                  THANK YOU SO MUCH FOR DONATING!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MEANING */}
      <p className="text-xl font-bold">
        <span className="text-pink-500">* </span> = Donations as little as 1 ETB
        mean a whole lot to us!{" "}
      </p>
    </div>
  );
}
