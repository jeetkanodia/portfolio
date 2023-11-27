"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sukoon - Mental Health Website",
    description:
      "Empowering users to assess their mental well-being through articulated tests, share personal stories via user-generated blogs, and connect with experts; Sukoon, built with the MERN stack and MongoDB, serves as a supportive platform for fostering community and accessing mental health resources.",
    image: "/images/projects/sukoon.png",
    tag: ["All", "Frontend", "Backend"],
    gitUrl: "https://github.com/jeetkanodia/MentalHealth-frontend",
    previewUrl: "https://mental-health-frontend-neon.vercel.app",
  },
  {
    id: 2,
    title: "Botify",
    description:
      "Botify is a Spotify clone built with React and RapidApi's - Shazam Core Api, where users can search for songs, artists and play a preview of the song.",
    gitUrl: "https://github.com/jeetkanodia/Botify",
    tag: ["All", "Frontend"],
    previewUrl: "https://botify-jeetkanodia.vercel.app/",
    image: "/images/projects/botify.png",
  },

  {
    id: 3,
    title: "Sarpanch: The Multipurpose Discord Bot",
    description:
      "Sarpanch: Versatile Discord Bot with Discord.js v14, featuring games, a currency system, and slash command support. Rigorously updated and secured with rate limits, the bot is a collaborative effort with Team Troubleshooters, ensuring a seamless user experience. Built using JavaScript, Express JS, Node, and Discord.js v14.",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/YuvrajxGarg/sarpanch",
    image: "/images/projects/sarpanch.png",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "My portfolio website built with Next.js, Tailwind CSS, Framer Motion and uses MongoDB to store the emails.",
    gitUrl: "https://github.com/jeetkanodia/portfolio",
    tag: ["All", "Frontend", "Backend"],
    previewUrl: "https://portfolio-jeetkanodia.vercel.app",
    image: "/images/projects/portfolio.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={setTag} name="All" isSelected={tag === "All"} />
        <ProjectTag
          onClick={setTag}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={setTag}
          name="Backend"
          isSelected={tag === "Backend"}
        />
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
