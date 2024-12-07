"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiBootstrap, SiTailwindcss, SiNextdotjs, SiCsharp, SiMicrosoftsqlserver, SiPostgresql, SiMongodb, SiPrometheus, SiMicrosoftazure } from "react-icons/si";


// about data
const about = {
  title: "About Me",
  description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Gary"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+27) 67 297 2034"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "South African"
    },
    {
      fieldName: "Email",
      fieldValue: "glouw79@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
  ]
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
  items: [
    {
      company: "Gibson Technologies",
      position: "Full Stack Developer",
      duration: "2022 - Present"
    },
    {
      company: "EventMate SA",
      position: "Back-End Developer Intern",
      duration: "2020 - 2021"
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2019"
    },
  ]
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
  items: [
    {
      institution: "Online Course: Udemy",
      degree: "Azure Developer Associate (AZ-204)",
      duration: "2024"
    },
    {
      institution: "Schneider Electric",
      degree: "Principles of Ethernet Networking",
      duration: "2023"
    },
    {
      institution: "Linkedin Learning",
      degree: "JavaScript Essential Training",
      duration: "2022"
    },
    {
      institution: "Rosebank College",
      degree: "Software Development",
      duration: "2017 - 2020"
    },
  ]
};

const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
  skillList: [
    {
      name: "HTML",
      icon: <FaHtml5 />
    },
    {
      name: "CSS",
      icon: <FaCss3 />
    },
    {
      name: "JavaScript",
      icon: <FaJs />
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap/>
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss/>
    },
    {
      name: "Figma",
      icon: <FaFigma/>
    },
    {
      name: "React",
      icon: <FaReact />
    },
    {
      name: "Next JS",
      icon: <SiNextdotjs />
    },
    {
      name: "C#",
      icon: <SiCsharp />
    },
    {
      name: "Node JS",
      icon: <FaNodeJs />
    },
    {
      name: "SQL Server",
      icon: <SiMicrosoftsqlserver />
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />
    },
  ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          
          {/* Content */}
          <div className="min-h-[70vh] w-full">
          {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <>
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      </>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <>
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                      </>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <>
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                    </>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <>
                      <li className="flex items-center justify-center xl:justify-start gap-4" key={index}>
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    </>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume