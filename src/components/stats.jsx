import axios from "axios";
import { useEffect, useState } from "react";

export default function Stats() {

    // Current Cash
    const [currentCash, setCurrentCash] = useState("23,035");

    async function getCash() {
        let result = await axios({
            method: "get",
            url: "https://ruthfulhearts.com/ruthfulhearts/cash",
            withCredentials: false,
        });
        setCurrentCash(result.data.cash);
    }

    useEffect(() => { getCash() }, [])

    // DATES :(
    // let date1 = new Date().toLocaleDateString();
    // let date2 = new Date('09/24/2023').toLocaleDateString();
    // let diffDays = parseInt(date2.split("/")[1]) - parseInt(date1.split("/")[1]);

    // let dateString = "9/25/2023";
    // var dateComponents = dateString.split('/');
    // var dateObject = new Date(dateComponents[2], dateComponents[0] - 1, dateComponents[1]);    
    // var epochTimestamp = dateObject.getTime() / 1000;
    // epochTimestamp = epochTimestamp.toString().padEnd(13, 0)

    // var current = Date.now();
    // var epochDiff = (parseInt(epochTimestamp) - current).toString().padStart(13,0);

    // var dateObject2 = new Date(epochDiff * 1000);
    var day = 0; // diffDays;
    var hour = 0; // dateObject2.getHours();
    var min = 0; // dateObject2.getMinutes();
    var sec = 0; // dateObject2.getSeconds();

    // setInterval(() => {
    //     if(sec > 0){
    //         sec--;
    //     } else {
    //         sec = 59;
    //         min--;
    //         if(min <= 0) {
    //             hour--;
    //             sec = 59;
    //             if(hour <= 0) {
    //                 day--;
    //                 hour = 23;
    //                 min = 59;
    //                 sec = 59;
    //             }
    //         }
    //     }
    //     document.getElementById('countdownDay').style.setProperty('--value', day)
    //     document.getElementById('countdownHour').style.setProperty('--value', hour)
    //     document.getElementById('countdownMin').style.setProperty('--value', min)
    //     document.getElementById('countdownSec').style.setProperty('--value', sec)

    // }, 1000)

    return (
        <div className="w-screen h-fit text-center pt-44 pb-44">
            <div className="text-2xl font-bold pb-10
                lg:text-5xl xl:text-5xl 2xl:text-5xl
                lg:pb-24 xl:pb-24 2xl:pb-24
            ">
                Current Campaign
            </div>
            <div className="flex flex-col w-full justify-center gap-y-3 gap-x-3 
                lg:flex-row xl:flex-row 2xl:flex-row
            ">
                <div className="py-5">
                    <div className="stats shadow bg-neutral-800 text-white px-5"> 
                        <div className="stat">
                            <div className="stat-title text-lg text-cyan-500 font-bold">Fund Raised</div>
                            <div className="stat-value pt-3 pb-3 text-emerald-500"> {currentCash} </div>
                            <div className="stat-desc text-base font-bold text-pink-500"> BIRR </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center
                    lg:w-fit xl:w-fit 2xl:w-fit
                ">
                    <div className="stats shadow bg-neutral-800 text-white w-fit"> 
                        <div className="stat">
                            <div className="stat-title text-lg text-cyan-500 font-bold"> Time Remaining </div>
                            <div className="grid grid-flow-col gap-5 text-center auto-cols-max bg-neutral-800 pt-3 pb-3 w-fit rounded-2xl px-5">
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                    <span id="countdownDay" style={{"--value": 0 }}></span>
                                    </span>
                                    days
                                </div> 
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                    <span id="countdownHour" style={{"--value": 0 }}></span>
                                    </span>
                                    hours
                                </div> 
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                    <span id="countdownMin" style={{"--value": 0 }}></span>
                                    </span>
                                    min
                                </div> 
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                    <span id="countdownSec" style={{"--value": 0 }}></span>
                                    </span>
                                    sec
                                </div>
                            </div>
                            {/* <div className="stat-desc text-base font-bold text-pink-500"> Donate & Share! </div> */}
                            <div className="stat-desc text-base font-bold text-pink-500"> Fund Raising is now Complete! </div>
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
            <p className="text-sm font-bold px-10 leading-normal pt-10
                sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 
                sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0 
                lg:pt-36 xl:pt-36 2xl:pt-36
            ">
                The first Ruthful Hearts fund raising campaign is now complete and successful! Thank you so much! 
            </p>
        </div>
    )
}