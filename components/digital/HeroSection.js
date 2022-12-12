import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
const titleBoxVariants = {
  animate: { transition: { staggerChildren: 0.2 } },
};
const boxVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};
export default function HeroSection() {
  return (
    <section className="flex items-center max-lg:justify-center max-lg:mt-10 container h-screen lg:h-[90vh] relative">
      <motion.section
        variants={titleBoxVariants}
        initial="initial"
        animate="animate"
        className="relative z-20"
      >
        <motion.h1 variants={boxVariants} className="text-4xl lg:text-7xl">
          Strover Digital
        </motion.h1>
        <motion.p variants={boxVariants} className="max-w-xl mt-3 md:text-lg">
          предлага услуги в областта на дигиталният маркетинг, цялостно
          интегриране на бизнеса ви в желаните от Вас социални мрежи и достигане
          до повече клиенти.
        </motion.p>
        <div className="mt-10 ">
          <a href="#services" className="inline-flex">
            <motion.button
              variants={boxVariants}
              className="px-16 py-2 font-bold bg-pink-100 border border-white rounded-lg "
            >
              Виж повече
            </motion.button>
          </a>
        </div>
      </motion.section>
      <section className="absolute -right-[1050px] hidden lg:flex z-10">
        <motion.section
          animate={{
            rotate: [100, 0],
            x: ["40vw", "0vw"],
            transition: {
              duration: 1,
            },
          }}
          className="relative h-[500px] w-[2000px]"
        >
          <Image
            src="/digitalForms/heroSec2.svg"
            alt="digital marketing with all services"
            fill
            className="object-contain"
          />
        </motion.section>
      </section>
    </section>
  );
}
