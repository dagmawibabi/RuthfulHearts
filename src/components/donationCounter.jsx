import React, { useState, useEffect } from "react";
import axios from "axios";
import OdometerTimer from "./OdometerTimer";

export default function DonationCounter() {
  const [totalDonations, setTotalDonations] = useState([]);

  const donationUrl = `https://script.google.com/macros/s/AKfycby5dmeudl0nFk4yYI3yNGmkOlCrw0mCLNEa4lTDtSw2kO4ADQ4bfSPvX567oypY_ivr/exec`;

  const getDonations = async () => {
    try {
      const response = await axios.get(donationUrl);
      const donations = response.data.data;
      setTotalDonations(donations);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDonations();
    const interval = setInterval(() => {
      getDonations();
    }, 1000); // Check for updates every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const getTotalDonation = () => {
    return totalDonations.reduce((acc, campaign) => acc + campaign.value, 0);
  };

  return (
    <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-col gap-y-3 gap-x-3">
      <div className="py-5">
        <div className="stats shadow bg-neutral-800 text-white px-5">
          <div className="stat">
            <div className="stat-title text-lg w-40 text-cyan-500 font-bold">
              Fund Raised
            </div>
            {/* Use the Counter component to render the animated numbers */}
            <div className="stat-value pt-3 pb-3 text-emerald-500">
              <OdometerTimer destination={getTotalDonation()} duration={1000} />
            </div>
            <div className="stat-desc text-base font-bold text-pink-500">
              BIRR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
