import { useEffect, useState,useRef } from "react";
import { ProjectInsights } from "./projectInsights";
import {motion,useScroll} from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { Projects } from "./constant";
export const ProjectSection = () => {
  const ref = useRef(null);
  const [stopScroll, setStopScroll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [inView, setInView] = useState(false);
  const { scrollYProgress } = useScroll({target:ref});
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestScrollValue) => {
      if (inView && latestScrollValue > 0.1) {
        alert("Working");
        console.log("Working");
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, inView]);


  const handleInsightPanel = (status, project = null) => {
    setStopScroll(status);
    setSelectedProject(project);
  };
  useEffect(() => {
    if (stopScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [stopScroll]);
  return (
    <>
      <div id="Projects" className="w-full h-full mt-20 flex flex-col relative">
        <div
          ref={ref}
        className="h-screen w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.7 }}
            className="project-title text-5xl md:text-8xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex max-md:justify-center items-center"
          >
            <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
            <motion.div className="z-30">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="will-change-transform will-change-opacity"
              >
                My
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="will-change-transform will-change-opacity"
              >
                Recent
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="will-change-transform will-change-opacity"
              >
                Projects
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="h-full px-3 flex flex-wrap justify-center gap-10">
          {Object.keys(Projects).map((key) => {
            const project = Projects[key];
            return (
              <ProjectCard
                key={key}
                projectImage={project.image}
                title={project.title}
                subTitle={project.subTitle}
                setOpenInsights={(status) =>
                  handleInsightPanel(status, project)
                }
                githubLink={project.githubLink}
              />
            );
          })}
        </div>
        {selectedProject && (
          <ProjectInsights
            stopScroll={stopScroll}
            handleInsightPanel={handleInsightPanel}
            title={selectedProject.title}
            desc={selectedProject.insights.desc}
            category={selectedProject.insights.category}
            techstack={selectedProject.insights.techStack}
            reportLink={selectedProject.insights.reportLink}
          />
        )}
      </div>
    </>
  );
};
