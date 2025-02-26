import NextLink from "next/link";
import React from "react";
import {
  Certificates,
  Container,
  Experiences,
  Head,
  NavBar,
  Skills,
} from "../components";
import { withApollo } from "../utils";
import { WorkInProgress } from "../components/WorkInProgress";

const About = ({}) => {
  return (
    <>
      <Head
        title="AC - About"
        description="Here you can know more about me, personally and professionally."
      />
      <NavBar />
      <Container title="About">
        <div
          id="intro"
          className="flex flex-col md:flex-row justify-center items-center"
        >
          <img
            src="https://res.cloudinary.com/bluecatencode/image/upload/v1619416736/IMG_1713_n5ssbx.png"
            alt="profile"
            className="max-full w-72"
          />
          <div className="flex flex-col items-start gap-4">
            <p className="animate__animated animate__fadeIn max-w-xl mt-10 md:mt-0 md:ml-16 text-2xl text-justify">
              I am a product focused Software Engineer based in Utrecth,
              Netherlands. I create web apps and cool software, focused on the
              best design patterns and creating stories visually, through
              enjoyable and meaningful experiences.
            </p>

            <p className="animate__animated animate__fadeIn max-w-xl mt-10 md:mt-0 md:ml-16 text-2xl text-justify">
              My approach combines technical excellence with a deep
              understanding of user needs. I believe that the best products are
              those that seamlessly blend functionality with elegant design,
              creating experiences that users love.
            </p>
          </div>
        </div>

        <div className="mt-52">
          <h1 className="text-5xl text-white font-semibold text-left tracking-wide mb-16">
            Professional Skills
          </h1>
          {/* <Skills /> */}
          <WorkInProgress title="Skills & Expertise" />
        </div>

        <div className="mt-32">
          <h1 className="text-5xl text-white font-semibold text-left tracking-wide mb-16">
            Experience
          </h1>
          {/* <Experiences /> */}
          <WorkInProgress title="Professional Experience" />
        </div>

        <div className="mt-32">
          <h1 className="text-5xl text-white font-semibold text-left tracking-wide mb-16">
            Certificates
          </h1>
          {/* <Certificates /> */}
          <WorkInProgress title="Certifications & Education" />
        </div>

        <div className="mt-32 flex justify-center">
          <h1 className="cursor-pointer text-5xl text-white text-center mb-16 border-b-4 border-white w-72">
            <NextLink href="/contact">Contact me</NextLink>
          </h1>
        </div>
      </Container>
    </>
  );
};

export default withApollo({ ssr: false })(About);
