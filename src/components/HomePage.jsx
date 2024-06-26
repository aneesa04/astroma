import React, { useEffect, useState } from "react";
import astronauts from "/assets/astronauts.jpg";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { EarthInfo, Features } from ".";
function HomePage() {
  const [visible, setVisible] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 150);
    const showAboutSection = () => setTimeout(() => setShowAbout(true), 150);
    window.addEventListener("scroll", showAboutSection);
  }, []);

  return (
    <>
      <nav className="bg-homepage-bg h-screen bg-no-repeat bg-cover bg-center relative font-lato pt-10 xs:pt-14 text-white">
        <ul
          className={` flex flex-col items-center space-y-10 xs:space-y-0 xs:flex-row justify-center uppercase xs:space-x-7 sm:space-x-10 text-xs sm:text-sm font-light  opacity-${visible ? "1" : "0"} transition-opacity duration-700  ease-in`}
        >
          <li className="">
            <Link to="/" className="hover:text-gray-400 mt-8">
              Home
            </Link>
          </li>
          <li>
            <Link to="/planetary-hub" className="hover:text-gray-400">
              PLanetary hub
            </Link>
          </li>
          <li>
            <Link to="/stargazing-guide" className="hover:text-gray-400">
              Stargazing
            </Link>
          </li>
          <li>
            <Link to="/cosmic-gallery" className="hover:text-gray-400">
              Cosmic Gallery
            </Link>
          </li>
        </ul>
        <h1
          className={`font-lato text-[rgba(245, 245, 245, 0.724)]  font-extralight tracking-[15px] sm:tracking-[27px] absolute bottom-[10%] w-full text-center sm:bottom-[8%]  uppercase text-2xl xs:text-4xl sm:text-5xl md:text-6xl opacity-${visible ? "1" : "0"} transition-opacity duration-700  ease-in`}
        >
          Astronomy
        </h1>
      </nav>
      <div className="  bg-gradient-to-br from-gray-400 via-transparent bg-black to-black">
        <div
          className={`bg-transparent flex flex-wrap   ${showAbout ? "w-full opacity-1" : "w-0 opacity-0"} transition-all duration-1000  ease-in-out `}
        >
          <img
            src={astronauts}
            alt="Astronauts"
            className="w-full object-contain md:object-cover md:w-[50%] md:mr-8"
          />
          <p
            className={`md:w-[40%] leading-9 ${showAbout ? "opacity-1" : "opacity-30"} font-medium text-white  sm:p-10 p-6 pointer-events-none`}
          >
            Gaze into the night sky, and you enter a realm of infinite wonder.
            Each twinkling star tells a story of distant worlds and cosmic
            mysteries. The dance of celestial bodies, from radiant moons to
            swirling galaxies, invites us to explore the universe's beauty and
            secrets. Astronomy isn't just about stars—it's about our place in
            this vast, breathtaking cosmos, inspiring awe and curiosity in every
            heart.
          </p>
        </div>
      </div>
      <EarthInfo />
      <div className="relative h-screen sm:h-[80vh] pointer-events-none">
        <h1 className="absolute z-20 bg-explore-heading text-transparent bg-clip-text text-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  leading-loose font-star-jedi font-light text-3xl xxs:text-5xl sm:text-8xl">
          explore space with us
        </h1>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-90"
        >
          <source src="/assets/space.mp4" type="video/mp4"></source> Sorry, your
          browser does not support HTML5 video.
        </video>
      </div>
      <Features />
      <footer className="bg-black pb-5">
        <button className="block px-3 py-2 w-fit m-auto bg-[#e2e2e233] text-white text-xs rounded-lg">
          <a href="https://github.com/aneesa04/astroma.git" target="_blank">
            <FiGithub color="white" className="inline mr-2" />
            Created by Aneesa{" "}
          </a>
        </button>
      </footer>
    </>
  );
}

export default HomePage;
