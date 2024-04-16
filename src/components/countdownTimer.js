import CountdownTimer from "./countdownTimer";
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
      {/* <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-col gap-y-3 gap-x-3"> */}
      <div className="justify-center">
        <div className="flex w-full justify-center lg:w-auto xl:w-auto 2xl:w-full">
          <DonationCounter />
        </div>
        {/* time countdown */}
        <CountdownTimer />
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
