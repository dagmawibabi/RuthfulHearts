import { useState } from "react";
import axios from "axios";
import peep from "../images/illustrations/Bust/peep-78.png";
// 10 61 67

export default function ThankYou() {
  //   let date = new Date();
  //   let humanReadableDate = date.toDateString();

  // Get and Set Visitor Count
  const [visitorCount, setVisitorCount] = useState(0);
  async function getVisitorCount() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate() + 1).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    let visitorCountResult = await axios({
      method: "get",
      url: `https://api.loglib.io/v1/insight?apiKey=site_kod5oihihi&startDate=2023-09-11&endDate=${formattedDate}&timeZone=Africa/Addis_Ababa`,
      withCredentials: false,
    });
    console.log("visitorCountResult");
    console.log(visitorCountResult);
    setVisitorCount(visitorCountResult.data.insight.totalPageViews.current);
  }
  getVisitorCount();
  return (
    <div
      id="thanks"
      className="h-fit w-screen pt-36 text-center pb-20
       lg:pt-0 xl:pt-0 2xl:pt-0 
       lg:pb-20 xl:pb-20 2xl:pb-20 
    "
    >
      <div className="flex justify-center">
        <img
          src={peep}
          alt="thank you"
          className="w-[70%] items-center
           lg:w-[25%] xl:w-[25%] 2xl:w-[25%] 
        "
        />
      </div>

      {/* Visitor Count */}
      <div
        className="pb-5 font-bold text-lg text-cyan-400
         lg:text-2xl xl:text-2xl 2xl:text-2xl 
      "
      >
        <span className="text-pink-500 "> {visitorCount} </span> Ruthful Hearts 
        {/* <span className="text-pink-500 "> 0 </span> Ruthful Hearts */} have been
        here!
      </div>

      {/* Thank You */}
      <span
        className="font-bold text-2xl
         lg:text-5xl xl:text-5xl 2xl:text-5xl 
      "
      >
        Thank You So Much!
      </span>
    </div>
  );
}
