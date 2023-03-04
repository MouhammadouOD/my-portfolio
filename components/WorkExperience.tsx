import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({ }: Props) {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0, }}
            transition={{ duration: 1.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='h-screen flex relative overflow-hidden flex-col text-left 
    md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-2xl '>
                Experience
            </h3>

            <div className='flex w-full space-x-5 p-10 overflow-x-scroll snap-x snap-mandatory
            scrollbar-thin scrollbar-track-gray-400/20
            scrollbar-thumb-[#F7AB0A]/80 '>
                {/* ExperienceCard */}
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>

            </div>
        </motion.div>
    )
}

export default WorkExperience