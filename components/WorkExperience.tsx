import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'

type Props = {
    experiences: Experience[]
}

function WorkExperience({ experiences }: Props) {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0, }}
            transition={{ duration: 1.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='h-screen flex relative overflow-scroll flex-col text-left 
    md:flex-row max-w-full px-10 md:pt-[350px] xl:pt-40 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-lg lg:text-2xl '>
                Experience
            </h3>

            <div className='flex w-full space-x-5 p-10 overflow-x-scroll snap-x snap-mandatory
            scrollbar-thin scrollbar-track-gray-400/20
            scrollbar-thumb-[#F7AB0A]/80'>
                {/* ExperienceCard */}
                {experiences.sort((a, b)=> b.dateEnded - a.dateEnded).map((experience : Experience) =>(
                    <ExperienceCard
                    key={experience._id}
                    experience={experience}
                    />
                ))}

            </div>
        </motion.div>
    )
}

export default WorkExperience