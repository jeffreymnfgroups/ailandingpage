import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TestimonialCarouselDesktop = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "30% start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["68px", "-997px"]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-start pl -[68px] w-full overflow-hidden relative h-[467px]"
    >
      <motion.div style={{ x }} className="flex gap-10 absolute left-[68px]">
        <div className="flex flex-row gap-[40px] items-center  justify-center bg-white p-[40px] rounded-[16px] w-[1000px] relative ">
          <img
            src="https://framerusercontent.com/images/jCl7IxnOEN5iV2G3osyfKLdVdoU.jpg?scale-down-to=512"
            alt=""
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
          />

          <img
            src="https://framerusercontent.com/images/WnkIoa1XyN6AiA7NvBYZZ7JIRC4.png"
            alt=""
            className="absolute top-[20px] w-[49px] left-[508px] rotate-[-20deg]"
          />

          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-[32px] leading-[38.4px] tracking-[-1px] text-[#050505] w-full poppins-medium">
              "This app completely transformed how I travel. The AI found hidden gems in Tokyo I never would have discovered, and the itinerary was perfectly timed. Best travel companion ever!"
            </h4>

            <div className="flex flex-col gap-1">
              <h5 className="text-[18px] leading-[28px] text-[#0f1728] font-semibold">
                Emma Rodriguez
              </h5>
              <p className="leading-[24px] text-[#475466]">
                Travel Blogger & Digital Nomad
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[40px] items-center  justify-center bg-[#dffab7] p-[40px] py-0 rounded-[16px] w-[1000px] relative max-h-[440px]">
          <img
            src="https://framerusercontent.com/images/GE1vHAv9NlgFtmyw1WPO1Fsrw28.jpg?scale-down-to=512"
            alt=""
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
          />

          <img
            src="https://framerusercontent.com/images/WnkIoa1XyN6AiA7NvBYZZ7JIRC4.png"
            alt=""
            className="absolute top-[20px] w-[49px] left-[508px] rotate-[-20deg]"
          />

          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-[32px] leading-[38.4px] tracking-[-1px] text-[#050505] w-full poppins-medium">
              "Planning our family vacation used to take weeks. Now it takes minutes! The AI understood our budget and kids' ages perfectly. Our Iceland trip was flawless from start to finish."
            </h4>

            <div className="flex flex-col gap-1">
              <h5 className="text-[18px] leading-[28px] text-[#0f1728] font-semibold">
                Michael Chen
              </h5>
              <p className="leading-[24px] text-[#475466]">
                Father of Two & Adventure Seeker
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[40px] items-center  justify-center bg-white p-[40px] rounded-[16px] w-[1000px] relative max-h-min">
          <img
            src="https://framerusercontent.com/images/H14E8S7hJnIxSEJdJ1uxSIdkr8E.jpg?scale-down-to=512"
            alt=""
            className="rounded-[16px] w-[496px] h-[360px] object-cover"
          />

          <img
            src="https://framerusercontent.com/images/WnkIoa1XyN6AiA7NvBYZZ7JIRC4.png"
            alt=""
            className="absolute top-[20px] w-[49px] left-[508px] rotate-[-20deg]"
          />

          <div className="flex flex-col items-start justify-between w-full gap-6">
            <h4 className="text-[32px] leading-[38.4px] tracking-[-1px] text-[#050505] w-full poppins-medium">
              "As a business traveler, I need efficiency. The AI learns my preferences and books everything seamlessly. I've saved hours of planning time and discovered amazing local restaurants."
            </h4>

            <div className="flex flex-col gap-1">
              <h5 className="text-[18px] leading-[28px] text-[#0f1728] font-semibold">
                Sarah Williams
              </h5>
              <p className="leading-[24px] text-[#475466]">
                Executive Consultant & Frequent Flyer
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialCarouselDesktop;
