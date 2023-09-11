import Navigation from "./components/navigation";
import headerImage from "./images/illustrations/Bust/peep-11.png";
import headerImage1 from "./images/illustrations/Bust/peep-5.png";
import headerImage2 from "./images/illustrations/Bust/peep-6.png";
import headerImage3 from "./images/illustrations/Bust/peep-7.png";
import headerImage4 from "./images/illustrations/Bust/peep-8.png";
import headerImage5 from "./images/illustrations/Bust/peep-9.png";
import headerImage6 from "./images/illustrations/Bust/peep-10.png";
import headerImage7 from "./images/illustrations/Bust/peep-100.png";
import { useEffect, useState } from "react";

function App() {
  let headerImgIndex = 0;
  const [currentHeaderImageIndex, setcurrentHeaderImageIndex] = useState(0);
  let headerImages = [headerImage, headerImage1, headerImage2, headerImage3, headerImage4, headerImage5, headerImage6, headerImage7];

  function changeHeaderImage() {
    setInterval(() => {
      // method to be executed;
      headerImgIndex++;
      if(headerImgIndex > headerImages.length - 1){
        headerImgIndex = 0;
      }
      console.log(headerImgIndex)
      setcurrentHeaderImageIndex(headerImgIndex);
    }, 5000);
  }
 

  useEffect(() => {changeHeaderImage()}, [])
  
  return (
    <div className="bg-[#151515] w-screen h-screen text-white">
      <Navigation />

      <div className="w-screen h-[90%]">
        <div className="relative pl-56 flex">

          {/* Header Text */}
          <div className="w-2/5 h-fit mt-56  ">
            <div className="text-6xl leading-tight mb-1 font-bold">
              <p> 
                Changing 
                <span className="text-pink-500 text-7xl"> 1* </span>
                Person's <br/> Life one at a time 
              </p>
            </div>
            <span className="text-pink-500 font-bold text-3xl"> * </span> <span className="text-cyan-400 font-bold text-xl"> = more with your help</span>
            <p className="text-2xl leading-snug mt-5 w-11/12"> Ruthful Hearts is aiming to change people's lives one person at a time. Using anonymous donations we make meaningful changes on the lives of people in need.</p>
          </div>

          {/* Header Image */}
          <div className="ml-20 h-fit -mt-20 -scale-x-100">
            <img src={headerImages[currentHeaderImageIndex]} alt="person" className="h-3/6" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
