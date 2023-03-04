import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
         text-gray-500 text-2xl "
      >
        Projects
      </h3>

      <h3
        className="absolute top-36 uppercase tracking-[3px]
         text-gray-500 text-sm "
      >
        Scroll horizontally to see my projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden 
      snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20
      scrollbar-thumb-[#F7AB0A]/80 "
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex flex-col flex-shrink-0 snap-center p-20 space-y-5
            items-center justify-center md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="https://s3-alpha.figma.com/hub/file/2883706845/8eabcbdc-557a-4961-8719-e6bf2cd5f386-cover.png"
              alt=""
              className="h-48 md:h-60"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50 ">
                  Case Study {i + 1} of {projects.length} :{" "}
                </span>{" "}
                School Management
              </h4>

              <p className="text-lg text-center md-text-left">
                Our school management software features a user-friendly web UI
                designed to streamline administrative tasks and improve
                communication between teachers, students, and parents. With
                intuitive navigation and easy access to important information,
                the software allows users to manage student data, schedules,
                assignments, and grades with ease. Additionally, the software
              </p>
            </div>
          </div>
        ))}
        {/* Project */}
        {/* Project */}
        {/* Project */}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
