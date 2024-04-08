import DonationCounter from "./donationCounter";

export default function Stats() {

  return (
    <div className="w-screen h-fit text-center pt-44 pb-44">
      <div
        className="text-2xl font-bold pb-10
                lg:text-5xl xl:text-5xl 2xl:text-5xl
                lg:pb-24 xl:pb-24 2xl:pb-24
            "
      >
        Current Campaign
      </div>
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-col gap-y-3 gap-x-3">
        <DonationCounter />
        <div className="flex w-full justify-center lg:w-auto xl:w-auto 2xl:w-full">
          <div className="stats shadow bg-neutral-800 text-white w-auto">
            <div className="stat">
              <div className="stat-title text-lg text-cyan-500 font-bold">
                Time Remaining
              </div>
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max bg-neutral-800 pt-3 pb-3 rounded-2xl px-5">
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span id="countdownDay" style={{ "--value": 0 }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span id="countdownHour" style={{ "--value": 0 }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span id="countdownMin" style={{ "--value": 0 }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span id="countdownSec" style={{ "--value": 0 }}></span>
                  </span>
                  sec
                </div>
              </div>
              <div className="stat-desc text-base font-bold text-pink-500">
                Fund Raising is now Complete!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <p className="text-sm font-bold px-10 leading-normal pt-10
                sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 
                sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0 
                lg:pt-36 xl:pt-36 2xl:pt-36
            ">
                Let's make the most of this time and help by donating any amount or sharing this to a friend or family!
            </p> */}
      <p
        className="text-sm font-bold px-10 leading-normal pt-10
                sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 
                sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0 
                lg:pt-36 xl:pt-36 2xl:pt-36
            "
      >
        The first Ruthful Hearts fund raising campaign is now complete and
        successful! Thank you so much!
      </p>
    </div>
  );
}
