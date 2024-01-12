import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3
        className="absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-lg lg:text-2xl "
      >
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo.heroImage).url()}
        alt="photo"
        className="-mb-32 md:mb-0 flex-shrink-0 w-40 h-40 
                rounded-full object-cover md:rounded-lg md:w-96 md:h-96
                xl:w-[400px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl lg:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-lg">{pageInfo.backgroundInformation}</p>
      </div>
    </div>
  );
}

export default About;
