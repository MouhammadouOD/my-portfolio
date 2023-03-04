import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
        cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0, }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center'
                src="https://media.licdn.com/dms/image/C4D0BAQEsh0_oXveAxg/company-logo_200_200/0/1575038888929?e=1684368000&v=beta&t=JZ1pO0biz8IH7CoKnQiP_wWv_57_lwCDlbSEf9QeWRs"
                alt="" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>FullStack Developer</h4>
                <p className='text-2xl mt-1 font-bold'>OMEDEMA</p>
                <div className='flex space-x-2 my-2'>
                    <img
                        className='w-10 h-10 rounded-full'
                        src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
                        alt="" />
                    <img
                        className='w-10 h-10 rounded-full'
                        src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
                        alt="" />
                    <img
                        className='w-10 h-10 rounded-full'
                        src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
                        alt="" />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work... -Ended...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>summary points</li>
                    <li>summary points</li>
                    <li>summary points</li>
                    <li>summary points</li>
                    <li>summary points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard