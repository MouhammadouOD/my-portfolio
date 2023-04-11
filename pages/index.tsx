import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { motion } from "framer-motion";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pageInfo, experiences, projects, skills, socials} : Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
     overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
     scrollbar-thumb-[#F7AB0A]/80 "
    >
      <Head>
        <title>{`${pageInfo?.name} - Portfolio`}</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <motion.img
              src="https://t3.ftcdn.net/jpg/00/84/82/62/360_F_84826209_BTRwFyUhjSxwN5bE3z5BzzRdnBPKbidc.jpg"
              alt=""
              className="w-10 h-10 text-[#F7AB0A] rounded-full filter grayscale
            hover:grayscale-0 cursor-pointer"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () =>{
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props:{
      pageInfo,
      experiences,
      projects,
      skills,
      socials
    },
    // NextJs will attempt to regenerate this page:
    //- when a request comes in 
    //- At most once every 10 seconds 
    revalidate: 10, 
  }
}
