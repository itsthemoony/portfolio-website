import { socialMedia } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading mx-6 lg:max-w-[45vw]">
          Ready to Take <span className="text-purple">Your</span> Digital
          Presence to the Next Level?
        </h1>
        <p className="text-white-200 mx-6 mt-10 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:kheirollahi.mahan@gmail.com" className="mt-6">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex items-center justify-center mt-20 md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <a
            key={info.id}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <Image
              src={info.img}
              alt={`${info.link} icon`}
              width={20}
              height={20}
              priority
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
