import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  skill: Skill
  directionleft?: boolean;
};

function Skill({ skill, directionleft }: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{ x: directionleft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{once: true}}
        src={urlFor(skill?.image).url()}
        alt=""
        className="rounded-full border border-gray-500 object-cover w-16 h-16 lg:w-20 lg:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition
      duration-300 ease-in-out group-hover:bg-white w-16 h-16 lg:w-20 lg:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">{skill?.progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
