"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "kids Movie Website",
    description: "React, Boostrap",
    image: "/images/kids.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/faezemohades/movieSite",
    previewUrl: "https://kids.mp4.ir/",
  },
  {
    id: 2,
    title: "CRM Panel",
    description: "React,Bootstrap",
    image: "/images/Crm.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/faezemohades/CRM",
    previewUrl: "https://panel.pishtaz.ir/content",
  }
 ,
  {
    id: 3,
    title: "Potography Portfolio Website",
    description: "Next js, Tailwind",
    image: "/images/port.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/faezemohades/Portfolio",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Youtube Application",
    description: "React, Styled-component",
    image: "/images/Youtube.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/faezemohades/YoutubeReactMui-master",
    previewUrl: "https://youtubesite2022.netlify.app/",
  },
  {
    id: 5,
    title: "E-commerce Application",
    description: "React, MUI",
    image: "/images/modelina.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/faezemohades/modelinaEcommerce",
    previewUrl: "https://modelinaecommerce.netlify.app/",
  },
  {
    id: 6,
    title: "Game hub",
    description: "Nextjs, Tailwind",
    image: "/images/gamehub.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/faezemohades/gameHub",
    previewUrl: "https://game2hub.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
  project.tag && project.tag.includes(tag)
);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className=" text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        /> */}
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;