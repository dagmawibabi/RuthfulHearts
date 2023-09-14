import image1 from "../images/illustrations/Bust/peep-18.png";
import telegram from "../images/icons/telegram.svg";

export default function Donations() {
  return (
    <div className="w-screen h-screen text-center pt-36" id="donations">
      <div className="text-5xl font-bold"> Donate Now </div>
      <div className="flex justify-center gap-10 p-5 py-20">
        {/* <div>
          <div className="rounded-full p-1 bg-cyan-500">
            <img src={telegram} alt="telegram" className="w-10" />
          </div>
          <div className="border border-neutral-700 text-left py-5 w-full px-10 font-bold text-xl bg-neutral-900 rounded-xl flex gap-5 items-center">
            Goto our Telegram Channel
          </div>
        </div> */}
        <div className="steps steps-vertical flex flex-col [&>div]:hover:[&>div]:bg-emerald-500 [&>div]:hover:[&>div]:text-black">
          <div className="step step-success py-2">
            <div className="py-2 w-full px-10 ">
              <div className="rounded-full py-2 bg-cyan-500 flex gap-3 items-center pr-5 justify-center">
                <img src={telegram} alt="telegram" className="w-10" />
                <div className="font-bold text-black text-xl">
                  Goto our Telegram Channel
                </div>
              </div>
            </div>
          </div>
          <div className="step step-success py-2">
            <div className="border border-neutral-700 text-left py-8 w-full px-10 font-bold text-xl bg-neutral-900 rounded-xl">
              Choose a Donation Amount
            </div>
          </div>
          <div className="step step-success py-2">
            <div className="border border-neutral-700 text-left py-8 w-full px-10 font-bold text-xl bg-emerald-500 bg-opacity-10 rounded-xl">
              Donate Using Your Preferred Payment Provider
            </div>
          </div>
          <div className="step step-success py-2">
            <div className="border border-neutral-700 text-left py-8 w-full px-10 font-bold text-xl bg-neutral-900 rounded-xl">
              Join the Channel to See the Help We Provide with the Donations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
