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
    <div className="w-screen h-[90%]" id="home">
      {/* Header Image */}
      <div className="visible h-fit pl-16
        md:hidden
        lg:hidden
        xl:hidden
        2xl:hidden
      ">
          <img
            src={headerImages[currentHeaderImageIndex]}
            alt="person"
            className="w-4/5"
          />
        </div>

      <div className="relative flex
        sm:pl-56
        md:pl-56
        lg:pl-56 
        xl:pl-56 
        2xl:pl-56
      ">
        {/* Header Text */}
        <div className="w-full h-fit pt-0
          sm:pt-56 sm:w-2/5
          md:pt-56
          lg:pt-56 
          xl:pt-56 
          2xl:pt-56
        ">
          <div className="text-3xl leading-snug pb-1 font-bold text-center
           sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl
           sm:text-left md:text-left lg:text-left xl:text-left 2xl:text-left
           sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-snug
           
           ">
            <p>
              Changing{" "}
              <span className="text-pink-500 text-3xl hover:text-cyan-400 duration-300
               sm:text-7xl
               md:text-7xl
               lg:text-7xl 
               xl:text-7xl 
               2xl:text-7xl
              ">
                1*
              </span>{" "}
              Person's <br /> Life One at a Time
            </p>
          </div>
          <div className="text-center
            sm:text-left md:text-left lg:text-left xl:text-left 2xl:text-left           
          ">
            <span className="text-pink-500 font-bold text-xl
              sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl 
            "> * </span>
            <span className="text-cyan-400 font-bold text-lg
              sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 
            ">
              = more with your help
            </span>
          </div>
          <div className="text-base leading-snug pt-5 w-11/12 text-center pl-5
            sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0 
            sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 
            sm:text-left md:text-left lg:text-left xl:text-left 2xl:text-left 
          ">
            Ruthful Hearts is aiming to change people's lives one person at a
            time. Using anonymous donations we make meaningful changes on the
            lives of people in need.
          </div>

          {/* CTA */}
          <div className="pt-12 cursor-pointer gap-5 w-screen px-5
            sm:flex md:flex lg:flex xl:flex 2xl:flex 
          ">
            <a href="#donate" rel="noreferrer">
              <div className="bg-gray-700 w-full rounded-full
                  sm:w-72 md:w-72 lg:w-72 xl:w-72 2xl:w-72 
              ">
                <div className="bg-cyan-500 w-full px-8 py-2 -m-1 rounded-full font-bold text-black text-lg hover:bg-emerald-500 duration-200 text-center
                  sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 
                  sm:w-72 md:w-72 lg:w-72 xl:w-72 2xl:w-72 

                ">
                  Donate Right Now!
                </div>
              </div>
            </a>
            <div className="h-5">

            </div>
            <a href="#about" rel="noreferrer">
              <div className="bg-gray-700 w-full h-12 rounded-full text-center
                  sm:w-56 md:w-56 lg:w-56 xl:w-56 2xl:w-56 

              ">
                <div className="bg-slate-100 px-6 py-2 w-full h-full -m-1 rounded-full font-bold text-black text-lg hover:bg-pink-500 duration-200
                  sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 
                  sm:px-6 md:px-6 lg:px-6 xl:px-6 2xl:px-6 

                ">
                  Learn More
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Header Image */}
        <div className="invisible h-fit -scale-x-100 
          md:visible
          lg:visible
          xl:visible
          2xl:visible
        ">
          <img
            src={headerImages[currentHeaderImageIndex]}
            alt="person"
            className="w-5/6"
          />
        </div>
      </div>
    </div>
  );
}
