import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative flex-col overflow-hidden items-center text-left 
    md:flex-row max-w-full px-10 justify-evenly mx-auto z-0"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-md md:text-2xl "
      >
        Projects
      </h3>

      <h3
        className="absolute top-36 uppercase tracking-[3px]
         text-gray-500 text-xs md:text-sm "
      >
        Scroll horizontally to see my projects
      </h3>

      <div
        className="relative w-full h-[80%] md:h-[70%] lg:h-[85%] flex overflow-x-scroll overflow-y-auto 
      snap-x snap-mandatory z-20 mt-10  scrollbar-thin scrollbar-track-gray-400/20
      scrollbar-thumb-[#F7AB0A]/80 "
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex flex-col flex-shrink-0 snap-center p-20 space-y-5
            items-center justify-center md:p-44 h-screen overflow-y-auto"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              className="h-48 md:h-60"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50 ">
                  Case Study {i + 1} of {projects.length} :{" "}
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    className="w-10 h-10"
                    alt="tech"
                  />
                ))}
              </div>

              <p className="text-md md:text-lg text-center md-text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
