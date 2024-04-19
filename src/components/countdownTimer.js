import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [countdown, setCountdown] = useState("");
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const countDownDate = new Date("April 25, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        setCountdown("expiredMessage");
      } else {
        setCountdown("countdownMessage");
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    };

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <div className="flex w-full justify-center lg:w-auto xl:w-auto 2xl:w-full">
      <div className="stats shadow bg-neutral-800 text-white w-auto">
        <div className="stat">
          <div className="stat-title text-lg text-cyan-500 font-bold">
            Time Remaining
          </div>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max bg-neutral-800 pt-3 pb-3 rounded-2xl px-5">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span id="countdownDay" style={{ "--value": days }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span id="countdownHour" style={{ "--value": hours }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span id="countdownMin" style={{ "--value": minutes }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span id="countdownSec" style={{ "--value": seconds }}></span>
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
  );
}
