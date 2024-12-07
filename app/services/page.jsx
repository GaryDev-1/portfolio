"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "UI/UX Design",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
    href: "",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile Development",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
    href: "",
  },
  {
    num: "04",
    title: "Web Services",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
    href: "",
  },
  {
    num: "05",
    title: "Full Stack Development",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
    href: "",
  },
  {
    num: "06",
    title: "Cloud Computing",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
    href: "",
  },
  {
    num: "07",
    title: "Database Administrator",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
    href: "",
  },
  {
    num: "08",
    title: "Monitoring, Reporting & Analyses",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Proin laoreet ridiculus mi efficitur iaculis egestas.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  {/* Top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all">
                      {service.num}
                    </div>
                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-slate-200 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl"/>
                    </Link>
                  </div>
                  {/* Title */}
                  <h2 className="text-[42px] font-bold leading-none text-slate-200 group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  {/* Description */}
                  <p className="text-slate-200/60">{service.description}</p>
                  {/* Border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              </>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
