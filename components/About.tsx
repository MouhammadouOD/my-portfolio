import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import mypic from '../public/IMG_7018 copie.JPG'


type Props = {}

function About({ }: Props) {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-2xl '>
                About
            </h3>

            <motion.img
                initial={{x: -200,opacity: 0,}}
                transition={{duration: 1.2}}
                whileInView={{x: 0,opacity: 1}}
                viewport={{once: true}}
                src="IMG_7018copie.JPG"
                alt="photo"
                className="-mb-32 md:mb-0 flex-shrink-0 w-40 h-40 
                rounded-full object-cover md:rounded-lg md:w-96 md:h-96
                xl:w-[600px] xl:h-[750px]"
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a {" "}
                    <span className='underline decoration-[#F7AB0A]'>little</span>{" "}
                    background
                </h4>
                <p className='text-sm md:text-lg'>
                    I am a Software Engineer specialized in Web Development
                    with JavaScript.My deep passion consist of building Web applications
                    with friendly User Interface to improve productivity and bring solutions
                    to business or industry. {`I'am`} currently working at OMEDEMA as a FullStack Developer
                    to build a Match Marketing Platform that help International companies to find right partners in Africa.
                    I also provides course as a FullStack Js instructor at Gomycode,
                    a school that form young generation about new technologies.
                </p>
            </div>
        </div>
    )
}

export default About