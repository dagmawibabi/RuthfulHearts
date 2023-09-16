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
    <div className="h-[90%] w-screen" id="home">
      {/* Header Image */}
      <div className="visible h-fit pl-16
         lg:hidden xl:hidden 2xl:hidden
      ">
          <img
            src={headerImages[currentHeaderImageIndex]}
            alt="person"
            className="w-4/5"
          />
        </div>

      <div className="relative flex
          lg:pl-20 xl:pl-20 2xl:pl-56
      ">
        {/* Header Text */}
        <div className=" h-fit pt-0 
           lg:pt-44 xl:pt-44 2xl:pt-56
           lg:w-2/5 xl:w-2/5 2xl:w-2/5
        ">
          <div className="text-3xl leading-snug pb-1 font-bold text-center
             lg:text-4xl xl:text-4xl 2xl:text-6xl
             lg:text-left xl:text-left 2xl:text-left
             lg:leading-snug xl:leading-snug 2xl:leading-snug
           
           ">
            <p>
              Changing{" "}
              <span className="text-pink-500 text-3xl duration-300
                 lg:text-4xl xl:text-4xl 2xl:text-7xl
                 lg:hover:text-cyan-400 xl:hover:text-cyan-400 2xl:hover:text-cyan-400 
              ">
                1*
              </span>{" "}
              Person's <br className="sm:hidden" /> Life One at a Time
            </p>
          </div>
          <div className="text-center
              lg:text-left xl:text-left 2xl:text-left           
          ">
            <span className="text-pink-500 font-bold text-xl
                lg:text-2xl xl:text-3xl 2xl:text-3xl 
            "> * </span>
            <span className="text-cyan-400 font-bold text-lg
                lg:text-lg xl:text-xl 2xl:text-xl 
            ">
              = more with your help
            </span>
          </div>
          <div className="text-base leading-snug pt-5 w-11/12 text-center pl-5
              lg:pl-0 xl:pl-0 2xl:pl-0 
              lg:text-xl xl:text-xl 2xl:text-2xl 
              lg:text-left xl:text-left 2xl:text-left 
          ">
            Ruthful Hearts is aiming to change people's lives one person at a
            time. Using anonymous donations we make meaningful changes on the
            lives of people in need.
          </div>

          {/* CTA */}
          <div className="pt-12 cursor-pointer gap-2 w-screen px-8
              lg:flex xl:flex 2xl:flex 
              lg:gap-2 xl:gap-2 2xl:gap-2               
              lg:px-0 xl:px-0 2xl:px-0 

          ">
            <a href="#donate" rel="noreferrer">
              <div className="bg-gray-700 w-full h-12 rounded-full
                    lg:w-60 xl:w-60 2xl:w-72 
              ">
                <div className="bg-cyan-500 w-full px-8 py-2 -m-1 rounded-full font-bold text-black text-lg duration-200 text-center
                    lg:text-xl xl:text-xl 2xl:text-2xl 
                    lg:w-60 xl:w-60 2xl:w-72 
                    lg:px-0 xl:px-0 2xl:px-8 
                    lg:hover:bg-emerald-500 xl:hover:bg-emerald-500 2xl:hover:bg-emerald-500 
                ">
                  Donate Right Now
                </div>
              </div>
            </a>
            <div className="h-5">

            </div>
            <a href="#about" rel="noreferrer">
              <div className="bg-gray-700 w-full h-12 rounded-full text-center
                    lg:w-56 xl:w-56 2xl:w-56 

              ">
                <div className="bg-slate-100 px-5 py-2 w-full -m-1 rounded-full font-bold text-black text-lg duration-200
                    lg:text-xl xl:text-xl 2xl:text-2xl 
                    lg:px-6 xl:px-6 2xl:px-6 
                    lg:hover:bg-pink-500 xl:hover:bg-pink-500 2xl:hover:bg-pink-500 
                ">
                  Learn More
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Header Image */}
        <div className="w-[70%] invisible h-fit -scale-x-100 
          lg:visible xl:visible 2xl:visible
          min-[590px]:w-[50%]
          md:w-[40%] lg:w-[45%] xl:w-[45%] 2xl:w-[40%]
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
