import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Accordion from "./accordion";
import ogImg from "./assets/propellent-og.png";


const Faqs = () => {
  return (
    <section className="bg-white flex flex-col items-center w-full pt-[60px] pb-[92px] md:pb-[80px] px-[24px] md:px-[32px] xl:px-[64px] gap-[60px] md:gap-[80px] relative">
      <div className="w-full flex flex-col items-center gap-[10px] md:w-[850px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 150,
              mass: 1,
              delay: 0.2,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex items-center py-2 px-3 bg-[#bdff1c] rounded-[11px]"
        >
          <h4 className="ibm-plex-mono-semibold text-black text-[12px] leading-[13.2px] text-center tracking-[1.2px]">
            FAQs
          </h4>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 150,
              mass: 1,
              delay: 0.3,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="text-[40px] leading-[44px] tracking-[-1.6px] md:text-[56px] md:leading-[56px] md:tracking-[-2px] flex flex-col items-center w-full poppins-medium relative"
        >
          <h3 className="text-[#a3a6ae] text-center md:text-left">
            Still not convinced?
          </h3>
          <h3 className="text-[#0f1728] mt-[-8px] md:mt-[-0px] text-center md:text-left">
            We've got the answers
          </h3>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: 0.3,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="bg-[#f5f5f5] pl-[20px] pr-[24px] rounded-[20px] w-full h-full"
      >
        <Accordion />
      </motion.div>

      <motion.h4
        initial={{ opacity: 0, y: 5 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 40,
            stiffness: 150,
            mass: 1,
            delay: 0.2,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="text-[18px] mt-5 md:mt-0 leading-[24.3px] tracking-[-0.54px] be-vietnam-pro-medium text-[#0f1728] bg-transparent rounded-full px-[24px] py-[24px] md:px-5 w-full text-center"
      >
        Need help planning your trip? Contact our
        <span className="underline ml-1 cursor-pointer hover:text-[#475466]">
          travel support
        </span>
        .
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 40,
            stiffness: 160,
            mass: 1,
            delay: 0.1,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="flex flex-col xl:flex-row items-center bg-[#bdff1c] w-full sm:w-[622px] h-[749px] rounded-[24px] overflow-hidden md:w-full xl:w-full xl:h-[480px]"
      >
        <div className="flex flex-col gap-12 items-start w-full px-10 md:pl-16 pt-[60px] pb-[60px] border w-[285px]">
          <h1 className="poppins-medium text-[40px] leading-[44px] tracking-[-1px] text-[#0f1728] w-[80%] md:text-[52px] md:leading-[57.2px] md:w-[505px]">
            Start your next adventure with AI-powered planning.
          </h1>
          <Link
            to="https://jeffreydev.vercel.app/"
            target="_blank"
            className="w-full md:w-max flex justify-start"
          >
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.44, 0, 0, 1],
                },
              }}
              className="bg-[#0f1728] text-white px-8 py-4 rounded-full poppins-medium text-[16px] hover:bg-[#1a2332] transition-colors duration-300"
            >
              Download App
            </motion.button>
          </Link>
          <p className="text-[#0f1728] text-center mt-4 be-vietnam-pro-regular text-[14px] leading-[20px]">
            We currently cover 180+ countries with detailed local insights, booking partnerships, and cultural information. New destinations are added monthly.
          </p>
        </div>
        <img
          src="https://framerusercontent.com/images/xbGd7KjeOkQuVXYhzidyCZ0EUM.jpg?scale-down-to=2048"
          alt=""
          className="rounded-b-[24px] h-[400px] object-cover w-full xl:h-full xl:w-[631px] md:rounded-b-[0px]"
        />
      </motion.div>

      <img src={ogImg} alt="" className="w-full opacity-0 absolute bottom-0 -z-10" />
    </section>
  );
};

export default Faqs;