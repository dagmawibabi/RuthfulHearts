// Different Age Group, Lifestyles, religion, gender, disability
// 52 57 61 67 79 82 87 96 100 18
import image1 from "../images/illustrations/Bust/peep-26.png";
import image2 from "../images/illustrations/Bust/peep-35.png";
import image3 from "../images/illustrations/Bust/peep-100.png";
import image4 from "../images/illustrations/Bust/peep-50.png";

export default function AboutSection() {
  return (
    <div>
      {/* IMAGE THEN TEXT */}
      <div className="h-screen w-screen px-60 pt-24 flex justify-between">
        <div className="w-[40%] h-fit relative">
          <img alt="img1" src={image1} />
        </div>
        <div className="ml-5 w-3/6 h-fit mt-72">
          <span className="text-6xl font-bold"> Lorem Ipsum Dolor It </span>
          <p className="mt-8 text-2xl">
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
        <div className="ml-5 w-3/6 h-fit mt-72">
          <span className="text-6xl font-bold"> Lorem Ipsum Dolor It </span>
          <p className="mt-8 text-2xl">
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
        <div className="ml-5 w-3/6 h-fit mt-72">
          <span className="text-6xl font-bold"> Lorem Ipsum Dolor It </span>
          <p className="mt-8 text-2xl">
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
        <div className="ml-5 w-3/6 h-fit mt-72">
          <span className="text-6xl font-bold"> Lorem Ipsum Dolor It </span>
          <p className="mt-8 text-2xl">
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
