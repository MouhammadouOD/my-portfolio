import { Skill as SkillType } from "@/typings";
import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative flex flex-col text-center md:tex-left
            xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0
            items-center mx-auto"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-2xl "
      >
        Skills
      </h3>

      <h3
        className="absolute top-36 uppercase tracking-[3px]
         text-gray-500 text-sm "
      >
        hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 pt-16 lg:pt-32">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionleft/>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
