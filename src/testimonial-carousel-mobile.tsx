import { motion } from "framer-motion";

const TestimonialCarouselMobile = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 400,
            mass: 1,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="flex flex-col gap-[30px] items-center justify-center bg-white p-[25px] rounded-[16px] w-full "
      >
        <img
          src="https://framerusercontent.com/images/jCl7IxnOEN5iV2G3osyfKLdVdoU.jpg?scale-down-to=512"
          alt=""
          className="rounded-[16px] w-full h-[465px] object-cover"
        />

        <div className="flex flex-col gap-6">
          <h4 className="text-[24px] leading-[31.2px] tracking-[-1px] text-[#050505] w-full poppins-medium">
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 400,
            mass: 1,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="flex flex-col gap-[30px] items-center justify-center bg-[#dffab7] p-[25px] rounded-[16px] w-full "
      >
        <img
          src="https://framerusercontent.com/images/GE1vHAv9NlgFtmyw1WPO1Fsrw28.jpg?scale-down-to=512"
          alt=""
          className="rounded-[16px] w-full h-[465px] object-cover"
        />

        <div className="flex flex-col gap-6">
          <h4 className="text-[24px] leading-[31.2px] tracking-[-1px] text-[#050505] w-full poppins-medium">
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 400,
            mass: 1,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="flex flex-col gap-[30px] items-center justify-center bg-[#f5f5f5] p-[25px] rounded-[16px] w-full "
      >
        <img
          src="https://framerusercontent.com/images/H14E8S7hJnIxSEJdJ1uxSIdkr8E.jpg?scale-down-to=512"
          alt=""
          className="rounded-[16px] w-full h-[465px] object-cover"
        />

        <div className="flex flex-col gap-6">
          <h4 className="text-[24px] leading-[31.2px] tracking-[-1px] text-[#050505] w-full poppins-medium">
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
      </motion.div>
    </div>
  );
};

export default TestimonialCarouselMobile;
