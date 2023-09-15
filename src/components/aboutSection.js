// Different Age Group, Lifestyles, religion, gender, disability
// 52 57 61 67 79 82 87 96 100 18
import image1 from "../images/illustrations/Bust/peep-26.png";
import image2 from "../images/illustrations/Bust/peep-35.png";
import image3 from "../images/illustrations/Bust/peep-50.png";
import image4 from "../images/illustrations/Bust/peep-100.png";
import ImageThenText from "./imageThenText";
import TextThenImage from "./textThenImage";

export default function AboutSection() {
  return (
    <div id="about" className="h-fit w-screen">
      {/* IMAGE THEN TEXT */}
      <ImageThenText image={image1} header={"Lorem Ipsum Dolor It"} details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur aliquam nisl, ac imperdiet odio mattis eu. Fusce vitae justo dignissim, accumsan nisl a, pulvinar quam. Aliquam imperdiet sem vel fermentum rutrum. Suspendisse a ex velit. Quisque tincidunt auctor dignissim."} />

      {/* TEXT THEN IMAGE */}
      <TextThenImage image={image2} header={"Lorem Ipsum Dolor It"} details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur aliquam nisl, ac imperdiet odio mattis eu. Fusce vitae justo dignissim, accumsan nisl a, pulvinar quam. Aliquam imperdiet sem vel fermentum rutrum. Suspendisse a ex velit. Quisque tincidunt auctor dignissim."} />      

      {/* IMAGE THEN TEXT */}
      <ImageThenText image={image3} header={"Lorem Ipsum Dolor It"} details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur aliquam nisl, ac imperdiet odio mattis eu. Fusce vitae justo dignissim, accumsan nisl a, pulvinar quam. Aliquam imperdiet sem vel fermentum rutrum. Suspendisse a ex velit. Quisque tincidunt auctor dignissim."} />
      
      {/* TEXT THEN IMAGE */}
      <TextThenImage image={image4} header={"Lorem Ipsum Dolor It"} details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur aliquam nisl, ac imperdiet odio mattis eu. Fusce vitae justo dignissim, accumsan nisl a, pulvinar quam. Aliquam imperdiet sem vel fermentum rutrum. Suspendisse a ex velit. Quisque tincidunt auctor dignissim."} />
      
    </div>
  );
}
