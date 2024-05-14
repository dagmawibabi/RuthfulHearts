import React, { useEffect, useRef, useState, useMemo } from "react";
import imagesLoaded from "imagesloaded";
import "./styles/team.css";

const TeamMembers = ({ charged, setCharged }) => {
  const [loadedImages, setLoadedImages] = useState([]);
  const teamMembers = useMemo(
    () => [
      {
        name: "Abel Girma",
        role: "Developer",
        photo: "./team-members/placeholder.jpg"
      },
      {
        name: "Amanuel Garomsa",
        role: "Developer",
        link: "https://www.linkedin.com/in/amanuel-garomsa-36ba79213/",
        photo: "./team-members/amanue.jpg"
      },
      {
        name: "Beakal Tizazu",
        role: "Social Media Management",
        link: "https://www.linkedin.com/in/beakal-tizazu",
        photo: "./team-members/placeholder.jpg"
      },
      {
        name: "Dagmawi Esayas",
        role: "Management Developer",
        link: "http://www.linkedin.com/in/dagmawibabi",
        photo: "./team-members/dagim.jpg"
      },
      {
        name: "Daniel Bogale",
        role: "Developer",
        link: "https://www.linkedin.com/in/Daniel-bogale",
        photo: "./team-members/daniel.jpeg"
      },
      {
        name: "Eleny Kahsay",
        role: "Writer",
        link: "http://www.linkedin.com/in/elenykgm",
        photo: "./team-members/eleni.jpg"
      },
      {
        name: "Etsegenet Melese",
        role: "Developer",
        link: "https://www.linkedin.com/in/etsegenet-m-58370a298/",
        photo: "./team-members/etsegenet.jpg"
      },
      {
        name: "Hope Alemayehu",
        role: "Graphics designer",
        link: "https://www.linkedin.com/in/hope-alemayehu-4ba3b0190/",
        photo: "./team-members/hope.jpg"
      },
      {
        name: "Khalid Ibrahim",
        role: "Developer",
        link: "https://www.linkedin.com/in/kalid-js/",
        photo: "./team-members/khalid.jpg"
      },
      {
        name: "Maedot Asrat",
        role: "Graphics designer",
        link: "https://www.linkedin.com/in/maedot-asrat/",
        photo: "./team-members/maedot.jpg"
      },
      {
        name: "Mikias Yheyis",
        role: "Developer",
        link: "https://www.linkedin.com/in/milkias-yeheyis/",
        photo: "./team-members/mikias.jpg"
      },
      {
        name: "Mulu Tsega",
        role: "Writer and Social media manager ",
        link: "https://www.linkedin.com/in/mulu-tsega943?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BiqUV%2B7PRS6y2VM68%2B%2BgXA%3D%3D",
        photo: "./team-members/luna.png"
      },
      {
        name: "Nahom Senay",
        role: "Graphics and Art",
        link: "https://www.linkedin.com/in/nahumbsen-3n5/",
        photo: "./team-members/nahom.png"
      },
      {
        name: "Natnael Mengstu",
        role: "Video Editing",
        link: "https://www.linkedin.com/in/natnael-m-zerga-140853261",
        photo: "./team-members/nathnael.jpg"
      },
      {
        name: "Okitta Ongaye",
        role: "Social Media manager",
        link: "https://www.linkedin.com/in/okitta-ongaye-5610b419a/",
        photo: "./team-members/okita.png"
      },
      {
        name: "Rediet Tekle",
        role: "Schedule Management",
        link: "https://www.linkedin.com/in/rediet-kassie-2b92b62b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        photo: "./team-members/rediet.jpg"
      },
      {
        name: "Ruth Trusew",
        role: "Developer",
        link: "https://www.linkedin.com/in/ruth-tirusew-157250249/",
        photo: "./team-members/ruth.jpg"
      },
      {
        name: "Selamawit Debele",
        role: "Graphics designer",
        link: "https://www.linkedin.com/in/selamawit-debebe-51523529a",
        photo: "./team-members/selamawit.jpg"
      },
      {
        name: "Yonas Sewnet",
        role: "Marketing",
        link: "https://www.linkedin.com/in/yonas-sewnet",
        photo: "./team-members/yonas.jpg"
      },
      {
        name: "Yonatan Tesfaye",
        role: "Marketing",
        link: "https://www.linkedin.com/in/yonas-sewnet",
        photo: "./team-members/yonathan.jpg"
      },
      {
        name: "Freab Mesfin",
        role: "Developer",
        link: "https://www.linkedin.com/in/freab-mesfin-570a78219/",
        photo: "./team-members/freab.png"
      }
    ],
    []
  );

  const namesContainerRef = useRef(null);

  useEffect(() => {
    const namesSlide = namesContainerRef.current.querySelector(".names-slide");
    const copy = namesSlide.cloneNode(true);
    namesContainerRef.current.appendChild(copy);

    const imgLoad = imagesLoaded(namesSlide);
    let totalImages = imgLoad.images.length;
    let loadedImagesCount = 0;
    const teamMemberImages = teamMembers.filter(
      (member) => member.photo !== "./team-members/placeholder.jpg"
    ).length;

    const handleImageProgress = (instance, image) => {
      loadedImagesCount++;
      const progress = (loadedImagesCount / totalImages) * 100;
      setLoadedImages(progress);
      console.log(`Image loading progress: ${progress}%`);

      if (loadedImagesCount === teamMemberImages) {
        setCharged(true);
      }
    };

    imgLoad.on("progress", handleImageProgress);

    return () => {
      imgLoad.off("progress", handleImageProgress);
    };
  }, [setCharged, teamMembers]);
  const handleLinkClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="w-screen h-screen ">
      <div className="team-section" id="teams">
        <h2 className="team-heading">Meet the Team</h2>
        <p>
          The Ruthful Hearts team has a strong belief in changing people's lives
          one person at a time. Showing up from different professions including
          software engineering, marketing, social media management, graphic
          design, and writing, the team members bring their diverse range of
          skills and expertise to the table. Through their collective efforts,
          they are making a real difference in the lives of individuals. Here
          are the amazing team members.
        </p>
        <div className="names" ref={namesContainerRef}>
          <div className="names-slide">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-member"
                onClick={() => handleLinkClick(member.link)}
              >
                <div className="photo-container">
                  <img src={member.photo} alt={member.name} className="photo" />
                </div>
                <span>{member.name}</span>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <a
          href="https://bitter-sand-192.notion.site/7c84a9f74a6b44f99d4ef9ad5ed840e4"
          target="_blank"
          rel="noopener noreferrer"
          className="team-link"
        >
          Want to explore our team further? click here
        </a>
      </div>
    </div>
  );
};

export default TeamMembers;
