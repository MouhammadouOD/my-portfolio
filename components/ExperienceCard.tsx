import { urlFor } from "@/sanity";
import { Experience } from "@/typings";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
        cursor-pointer transition-opacity duration-200 overflow-y-scroll"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover
        object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-1 md:px-10">
        <h4 className="text-2xl lg:text-3xl font-light">{experience.jobTitle}</h4>
        <p className="text-lg lg:text-xl mt-1 font-bold">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="w-10 h-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 pr-5 text-sm lg:text-lg h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black
     scrollbar-thumb-[#F7AB0A]/80">
            {experience?.points?.map((point, i) =>(
                <li key={i}>{point}</li>
            ))}
        </ul>
        <br />
        <br />
        
      </div>
    </article>
  );
}

export default ExperienceCard;
