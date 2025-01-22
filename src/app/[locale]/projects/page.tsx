"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import { useTranslations } from "next-intl";

const ProjectsPage = () => {
  const t = useTranslations();

  const projects = [
    {
      title: "World Rank",
      description: t("Projects.worldRank.description"),
      image: "/img/projects/world-rank.png",
      repo: "https://github.com/joaquincaggiano/world-ranks",
      video: "https://vimeo.com/1046136928/984a2319a4",
    },
    {
      title: "VidextHub",
      description: t("Projects.videxthub.description"),
      image: "/img/projects/videxthub.png",
      repo: "https://github.com/joaquincaggiano/vidext-hub",
      video: "https://vimeo.com/1046153632/77820b2b7f",
    },
    {
      title: "Ucademy Dashboard",
      description: t("Projects.ucademy.description"),
      image: "/img/projects/ucademy.png",
      repo: "https://github.com/joaquincaggiano/ucademy-dashboard",
      video: "https://vimeo.com/1046219396/e92b3c5b49",
    },
    {
      title: "Bite plan",
      description: t("Projects.biteplan.description"),
      image: "/img/projects/biteplanner.png",
      repo: "https://gitlab.com/desaway-apps/menusemanal",
      video: "https://vimeo.com/1049002203/6c8e537fa0",
      download: "https://play.google.com/store/apps/details?id=es.desaway.menuplannerbiteplan"
    },
    {
      title: "Re-K",
      description: t("Projects.re-k.description"),
      image: "/img/projects/re-k.png",
      repo: "https://gitlab.com/desaway-clients/eclekte",
    },
    {
      title: "Work Hub",
      description: t("Projects.workhub.description"),
      image: "/img/projects/workhub.png",
      repo: "https://gitlab.com/desaway-apps/reservaespacios-admin",
      download: "https://play.google.com/store/apps/details?id=es.desaway.managerooms&hl=es"
    },
    {
      title: "Work Space",
      description: t("Projects.work-space.description"),
      image: "/img/projects/work-space.png",
      repo: "https://gitlab.com/desaway-apps/reservaespacios-user",
      download: "https://play.google.com/store/apps/details?id=es.desaway.workspace"
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <div className="flex justify-center items-center">
        <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => {
            return <ProjectCard key={project.title} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
