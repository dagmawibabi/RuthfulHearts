import headerImage from "../images/illustrations/Bust/peep-11.png";
import headerImage1 from "../images/illustrations/Bust/peep-5.png";
import headerImage2 from "../images/illustrations/Bust/peep-6.png";
import headerImage3 from "../images/illustrations/Bust/peep-7.png";
import headerImage4 from "../images/illustrations/Bust/peep-8.png";
import headerImage5 from "../images/illustrations/Bust/peep-9.png";
import headerImage6 from "../images/illustrations/Bust/peep-10.png";
import headerImage7 from "../images/illustrations/Bust/peep-100.png";
// eslint-disable-next-line
import { useEffect, useState } from "react";

export default function Header() {
  let headerImgIndex = 0;
  const [currentHeaderImageIndex, setcurrentHeaderImageIndex] = useState(0);
  let headerImages = [
    headerImage,
    headerImage1,
    headerImage2,
    headerImage3,
    headerImage4,
    headerImage5,
    headerImage6,
    headerImage7,
  ];

  // eslint-disable-next-line
  function changeHeaderImage() {
    setInterval(() => {
      // method to be executed;
      headerImgIndex++;
      if (headerImgIndex > headerImages.length - 1) {
        headerImgIndex = 0;
      }
      console.log(headerImgIndex);
      setcurrentHeaderImageIndex(headerImgIndex);
    }, 5000);
  }

  // useEffect(() => {changeHeaderImage()}, [])

  return (
    <div className="w-screen h-[90%]">
      <div className="relative pl-56 flex">
        {/* Header Text */}
        <div className="w-2/5 h-fit mt-56  ">
          <div className="text-6xl leading-tight mb-1 font-bold">
            <p>
              Changing
              <span className="text-pink-500 text-7xl hover:text-cyan-400">
                {" "}
                1*{" "}
              </span>
              Person's <br /> Life one at a time
            </p>
          </div>
          <span className="text-pink-500 font-bold text-3xl"> * </span>{" "}
          <span className="text-cyan-400 font-bold text-xl">
            {" "}
            = more with your help
          </span>
          <p className="text-2xl leading-snug mt-5 w-11/12">
            {" "}
            Ruthful Hearts is aiming to change people's lives one person at a
            time. Using anonymous donations we make meaningful changes on the
            lives of people in need.
          </p>
          {/* CTA */}
          <div className="flex mt-8 mr-5 cursor-pointer">
            <div className="bg-gray-700 w-72 rounded-md">
              <div className="bg-pink-500 w-72 px-8 py-2 -m-1 rounded-md font-bold text-black text-2xl hover:bg-cyan-400 duration-200">
                Donate Right Now!
              </div>
            </div>
            <div className="bg-gray-700 w-56 h-12 rounded-md ml-5 text-center ">
              <div className="bg-slate-100 px-6 py-2 w-full h-full -m-1 rounded-md font-bold text-black text-2xl hover:bg-cyan-400 duration-200">
                Learn More
              </div>
            </div>
          </div>
        </div>

        {/* Header Image */}
        <div className="ml-20 h-fit -mt-20 -scale-x-100">
          <img
            src={headerImages[currentHeaderImageIndex]}
            alt="person"
            className="h-3/6"
          />
        </div>
      </div>
    </div>
  );
}
