// Different Age Group, Lifestyles, religion, gender, disability
// 52 57 61 67 79 82 87 96 100 18
import image1 from "../images/illustrations/Bust/peep-26.png";
import image2 from "../images/illustrations/Bust/peep-35.png";
import image3 from "../images/illustrations/Bust/peep-50.png";
import image4 from "../images/illustrations/Bust/peep-100.png";

export default function AboutSection() {
  return (
    <div id="about">
      {/* IMAGE THEN TEXT */}
      <div className="h-screen w-screen px-60 pt-24 flex justify-between">
        <div className="w-[40%] h-fit relative">
          <img alt="img1" src={image1} />
          {/* <div className="flex w-full">
            <div className="w-full border-dashed pt-1 bg-gradient-to-l rounded-l-xl from-zinc-500 "></div>
            <div className="w-full border-dashed pt-1 bg-gradient-to-r from-zinc-500 to-zinc-500"></div>
            <div className="w-full border-dashed pt-1 bg-gradient-to-r rounded-r-xl from-zinc-500 "></div>
          </div> */}
        </div>
        <div className="w-3/6 h-fit pt-72">
          <span className="text-6xl font-bold hover:text-cyan-500 delay-150 duration-700 cursor-default">
            Lorem Ipsum Dolor It
          </span>
          <p className="pt-8 pb-20 text-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur aliquam nisl, ac imperdiet odio mattis eu. Fusce vitae
            justo dignissim, accumsan nisl a, pulvinar quam. Aliquam imperdiet
            sem vel fermentum rutrum. Suspendisse a ex velit. Quisque tincidunt
            auctor dignissim.
          </p>
        </div>
      </div>

      {/* TEXT THEN IMAGE */}
      <div className="h-screen w-screen px-60 pt-24 flex justify-between">
        <div className="pt-72 w-3/6 h-fit">
          <span className="text-6xl font-bold"> Lorem Ipsum Dolor It </span>
          <p className="pt-8 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur aliquam nisl, ac imperdiet odio mattis eu. Fusce vitae
            justo dignissim, accumsan nisl a, pulvinar quam. Aliquam imperdiet
            sem vel fermentum rutrum. Suspendisse a ex velit. Quisque tincidunt
            auctor dignissim.
          </p>
        </div>
        <div className="w-[40%] h-fit relative -scale-x-100">
          <img alt="img1" src={image2} />
        </div>
      </div>

      {/* IMAGE THEN TEXT */}
      <div className="h-screen w-screen px-60 pt-24 flex justify-between">
        <div className="w-[40%] h-fit relative">
          <img alt="img1" src={image3} />
        </div>
        <div className="w-3/6 h-fit pt-72">
          <span className="text-6xl font-bold"> Lorem Ipsum Dolor It </span>
          <p className="pt-8 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur aliquam nisl, ac imperdiet odio mattis eu. Fusce vitae
            justo dignissim, accumsan nisl a, pulvinar quam. Aliquam imperdiet
            sem vel fermentum rutrum. Suspendisse a ex velit. Quisque tincidunt
            auctor dignissim.
          </p>
        </div>
      </div>

      {/* TEXT THEN IMAGE */}
      <div className="h-screen w-screen px-60 pt-24 flex justify-between ">
        <div className="pt-72 w-3/6 h-fit">
          <span className="text-6xl font-bold"> Lorem Ipsum Dolor It </span>
          <p className="pt-8 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur aliquam nisl, ac imperdiet odio mattis eu. Fusce vitae
            justo dignissim, accumsan nisl a, pulvinar quam. Aliquam imperdiet
            sem vel fermentum rutrum. Suspendisse a ex velit. Quisque tincidunt
            auctor dignissim.
          </p>
        </div>
        <div className="w-[40%] h-fit relative -scale-x-100">
          <img alt="img1" src={image4} />
        </div>
      </div>
    </div>
  );
}
