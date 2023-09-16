// import image1 from "../images/illustrations/Bust/peep-18.png";
import telegram from "../images/icons/telegram.svg";
import chapa from "../images/icons/chapa.png";

export default function Donations() {
  return (
    <div className="w-screen h-fit text-center pt-36" id="donate">
      <div className="text-3xl font-bold
        sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl 

      "> Donate Now </div>

      {/* STEPS TO DONATE */}
      <div className="flex justify-center gap-10 p-1 py-10
        sm:p-5 md:p-5 lg:p-5 xl:p-5 2xl:p-5 
        sm:py-20 md:py-20 lg:py-20 xl:py-20 2xl:py-20 
        
      ">
        <div className="steps steps-vertical flex flex-col ">

          {/* STEP 1 */}
          <div className="step step-success py-0
            sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2 
          ">
            <div className="py-0 w-full px-0 pr-3 cursor-pointer
              sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10 
              sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2 
              sm:pr-0 md:pr-0 lg:pr-0 xl:pr-0 2xl:pr-0 

            ">
              <div className="rounded-full py-1 bg-cyan-500 flex gap-3 items-center pr-0 pl-2 justify-start duration-300
                sm:justify-center md:justify-center lg:justify-center xl:justify-center 2xl:justify-center 
                sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0 
                lg:hover:bg-emerald-500 xl:hover:bg-emerald-500 2xl:hover:bg-emerald-500 
              ">
                <img src={telegram} alt="telegram" className="w-10" />
                <div className="font-bold text-black text-base
                  sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 
                  sm:pr-5 md:pr-5 lg:pr-5 xl:pr-5 2xl:pr-5 
                  sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2 
                ">
                  Goto our Telegram Channel
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="step step-success py-2 cursor-default">
            <div className="w-full px-0 pr-3
              sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10 
              sm:pr-0 md:pr-0 lg:pr-0 xl:pr-0 2xl:pr-0 
            ">
              <div className="border border-neutral-700 text-center py-3 px-0 font-bold text-sm bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-full
                  sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10 
                  sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 
                  sm:py-4 md:py-4 lg:py-4 xl:py-4 2xl:py-4 

              ">
                Choose any<span className="text-pink-500">*</span> Donation
                Amount in the Channel
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="step step-success py-1 cursor-default
            sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 
          ">
            <div className="py-2 w-full px-0 pr-3 flex gap-3
              sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10 
              sm:pr-0 md:pr-0 lg:pr-0 xl:pr-0 2xl:pr-0 
            ">
              <div className="py-2 pl-3 pr-3 rounded-tl-full rounded-bl-full font-bold text-black border border-dashed border-emerald-500">
                <img src={chapa} alt="chapa" className="w-[70px]
                  sm:w-14 md:w-14 lg:w-14 xl:w-14 2xl:w-14 
                  sm:pl-6 md:pl-6 lg:pl-6 xl:pl-6 2xl:pl-6 
                  sm:pr-5 md:pr-5 lg:pr-5 xl:pr-5 2xl:pr-5 
                  sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 

                " />
              </div>
              <div className="py-2 w-full px-5 rounded-tr-full rounded-br-full font-bold text-black bg-emerald-500 text-sm text-left
                  sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 
                  sm:text-center md:text-center lg:text-center xl:text-center 2xl:text-center 
                  sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3 

              ">
                Donate Using Your Preferred Payment Provider
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="step step-success py-0 cursor-pointer">
            <div className="w-full px-0 pr-3
              sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10 
              sm:pr-0 md:pr-0 lg:pr-0 xl:pr-0 2xl:pr-0 
            ">
              <div className="border border-dashed text-start py-2 px-5 font-bold text-sm border-pink-500 text-pink-500 rounded-full duration-300
                  sm:py-4 md:py-4 lg:py-4 xl:py-4 2xl:py-4 
                  sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 
                  sm:text-center md:text-center lg:text-center xl:text-center 2xl:text-center 
                  lg:hover:text-cyan-500 xl:hover:text-cyan-500 2xl:hover:text-cyan-500
                  lg:hover:border-cyan-500 xl:hover:border-cyan-500 2xl:hover:border-cyan-500
              ">
                Join the Channel and See the wonders the Donations Do
              </div>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="step step-success py-4 cursor-default">
            <div className="w-full px-0 pr-3
              sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10 
              sm:pr-0 md:pr-0 lg:pr-0 xl:pr-0 2xl:pr-0 
              ">
              <div className="relative">
                <div className="absolute py-4 px-5 w-full text-black text-center font-bold text-xl rounded-full bg-red-300 opacity-0 hover:opacity-100 duration-500 hidden
                  sm:block md:block lg:block xl:block 2xl:block 
                ">
                  YOU'VE GOT A RUTHFUL HEART! ❤️
                </div>
                <div className="py-2 px-5 bg-neutral-300 text-black text-center font-bold text-sm rounded-full
                  sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 
                  sm:py-4 md:py-4 lg:py-4 xl:py-4 2xl:py-4 
                ">
                  THANK YOU SO MUCH FOR DONATING!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MEANING */}
      <p className="text-sm font-bold px-10 leading-normal
        sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 
        sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0 

      ">
        <span className="text-pink-500">* </span> = Donations as little as 1 ETB
        mean a whole lot to us!{" "}
      </p>
    </div>
  );
}
