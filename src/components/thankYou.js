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
      url: `https://api.loglib.io/v1/insight?apiKey=site_c245xfs2th&startDate=2023-09-11&endDate=${formattedDate}&timeZone=Africa/Addis_Ababa`,
      withCredentials: false,
    });
    setVisitorCount(visitorCountResult.data.insight.totalPageViews.current);
  }
  getVisitorCount();
  return (
    <div id="thanks" className="h-screen pt-36 text-center
      sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0 
      sm:h-fit md:h-fit lg:h-fit xl:h-fit 2xl:h-fit 
      sm:pb-20 md:pb-20 lg:pb-20 xl:pb-20 2xl:pb-20 
      
    ">
      <div className="flex justify-center">
        <img src={peep} alt="thank you" className="w-[90%] items-center
          sm:w-[25%] md:w-[25%] lg:w-[25%] xl:w-[25%] 2xl:w-[25%] 
        " />
      </div>

      {/* Visitor Count */}
      <div className="pb-5 font-bold text-lg text-cyan-400
        sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 
      ">
        <span className="text-pink-500 "> {visitorCount} </span> Ruthful Hearts
        have been here!
      </div>

      {/* Thank You */}
      <span className="font-bold text-2xl
        sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl 
      "> 
        Thank You So Much! 
      </span>
    </div>
  );
}
