// 52 57 61 67 79 82 87 96 100 18 26 35 50 100
import image1 from "../images/illustrations/Bust/peep-26.png";  // Anonymous Donations
import image2 from "../images/illustrations/Bust/peep-50.png";  // For All Kinds of People 
import image3 from "../images/illustrations/Bust/peep-72.png";  // One at a Time 
import image4 from "../images/illustrations/Bust/peep-100.png"; // Private and Graceful 
import ImageThenText from "./imageThenText";
import TextThenImage from "./textThenImage";

export default function AboutSection() {
  return (
    <div id="about" className="h-fit w-screen">
      {/* IMAGE THEN TEXT */}
      <ImageThenText 
        image={image1} 
        header={"Anonymous Donations"} 
        details={
          <span>
            We <span className="text-pink-500">focus on the people being helped</span> instead of focusing on who donated how much. Beause charity is all about helping the needy selflessly, we keep the identities of the donors private. We use a huge range of payment options for you to transfer money which also includes <span className="text-cyan-500">crypto</span>. 
          </span>
        }
      />

      {/* TEXT THEN IMAGE */}
      <TextThenImage 
        image={image2} 
        header={"For All Kinds of People"} 
        details={
          <span>
            We value a person simply because <span className="text-pink-500">each human life is valuable</span>. We don't discriminate by their age, religion, gender, lifestyle, mistakes they've made to end up in their current state, problems they've caused or any other reason. We simply lend a hand because everyone deserves a second chance at being <span className="text-cyan-500">brand new and good</span>! 
          </span>
        } 
      />      

      {/* IMAGE THEN TEXT */}
      <ImageThenText 
        image={image3} 
        header={"One at a Time"} 
        details={
          <span>
            The way we help people is by running fund raising campaigns <span className="text-pink-500">every season of the year</span>. Then depending on the amount of donations gathered, we invest it all on one person. We do this so a person's life <span className="text-cyan-500">instantly and drastically changes for the better</span>! We think it's better to completely change one person's life entirely than scatter the donations everywhere.
          </span>
        } 
      />
      
      {/* TEXT THEN IMAGE */}
      <TextThenImage 
        image={image4} 
        header={"Private and Graceful"} 
        details={
          <span>
            The people we choose to help are people like us and we're trying to give them a brand new life. That starts by <span className="text-pink-500">keeping their identities private</span> within the ruthful community. We don't share them around social medias or use them to promote this charity. We keep their <span className="text-cyan-500">dignity and respect</span> them fully. 
          </span>
        } 
      />
      
    </div>
  );
}
