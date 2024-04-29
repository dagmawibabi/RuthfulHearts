import React, { useEffect, useRef } from "react";
import "./team.css";

const TeamMembers = () => {
  const teamMembers = [
    { name: "Abel Girma", role: "Developer" },
    {
      name: "Amanuel Garomsa",
      role: "Developer",
      link: "https://www.linkedin.com/in/amanuel-garomsa-36ba79213/",
    },
    {
      name: "Beakal Tizazu",
      role: "Social Media Management",
      link: "https://www.linkedin.com/in/beakal-tizazu",
    },
    {
      name: "Dagmawi Esayas",
      role: "Management Developer",
      link: "http://www.linkedin.com/in/dagmawibabi",
    },
    {
      name: "Daniel Bogale",
      role: "Developer",
      link: "https://www.linkedin.com/in/Daniel-bogale",
    },
    {
      name: "Eleny Kahsay",
      role: "Writer",
      link: "http://www.linkedin.com/in/elenykgm",
    },
    {
      name: "Etsegenet Melese",
      role: "Developer",
      link: "https://www.linkedin.com/in/etsegenet-m-58370a298/",
    },
    {
      name: "Hope Alemayehu",
      role: "Graphics",
      link: "https://www.linkedin.com/in/hope-alemayehu-4ba3b0190/",
    },
    {
      name: "Khalid Ibrahim",
      role: "Developer",
      link: "https://www.linkedin.com/in/kalid-js/",
    },
    {
      name: "Maedot Asrat",
      role: "Graphics",
      link: "https://www.linkedin.com/in/maedot-asrat/",
    },
    {
      name: "Mikias Yheyis",
      role: "Developer",
      link: "https://www.linkedin.com/in/milkias-yeheyis/",
    },
    {
      name: "Mulu Tsega",
      role: "Writer and Social Media Management",
      link: "https://www.linkedin.com/in/mulu-tsega943?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BiqUV%2B7PRS6y2VM68%2B%2BgXA%3D%3D",
    },
    {
      name: "Nahom Senay",
      role: "Graphics and Art",
      link: "https://www.linkedin.com/in/nahumbsen-3n5/",
    },
    {
      name: "Natnael Mengstu",
      role: "Video Editing",
      link: "https://www.linkedin.com/in/natnael-m-zerga-140853261",
    },
    {
      name: "Okitta Ongaye",
      role: "Social Media",
      link: "https://www.linkedin.com/in/okitta-ongaye-5610b419a/",
    },
    {
      name: "Rediet Tekle",
      role: "Schedule Management",
      link: "https://www.linkedin.com/in/rediet-kassie-2b92b62b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ruth Trusew",
      role: "Developer",
      link: "https://www.linkedin.com/in/ruth-tirusew-157250249/",
    },
    {
      name: "Selamawit Debele",
      role: "Graphics",
      link: "https://www.linkedin.com/in/selamawit-debebe-51523529a",
    },
    {
      name: "Yonas Sewnet",
      role: "Marketing",
      link: "https://www.linkedin.com/in/yonas-sewnet",
    },
    {
      name: "Yonatan Tesfaye",
      role: "Marketing",
      link: "https://www.linkedin.com/in/yonas-sewnet",
    },
    {
      name: "Freab Mesfin",
      role: "Developer",
      link: "https://www.linkedin.com/in/freab-mesfin-570a78219/",
    },
  ];

  const namesContainerRef = useRef(null);

  useEffect(() => {
    const namesSlide = namesContainerRef.current.querySelector(".names-slide");
    const copy = namesSlide.cloneNode(true);
    namesContainerRef.current.appendChild(copy);
  }, []);

  const handleLinkClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="w-screen h-screen text-center pt-52 lg:h-screen xl:h-screen 2xl:h-screen">
      <div className="team-section">
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
                <span>{member.name}</span>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
