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
    <div className="h-fit text-center pb-28" id="thanks">
      <div className="flex justify-center">
        <img src={peep} alt="thank you" className="w-[25%] items-center " />
      </div>
      <div className="mb-5 font-bold text-2xl text-cyan-400 ">
        <span className="text-pink-500 "> {visitorCount} </span> Ruthful Hearts
        have been here!
      </div>
      <span className="font-bold text-5xl "> Thank You So Much! </span>
    </div>
  );
}
