"use client";
import DownloadSvg from "../icons/DownloadSvg";
import GithubSvg from "../icons/GithubSvg";
import VideoSvg from "../icons/VideoSvg";
import styles from "./project-card.module.css";

interface Props {
  project: {
    title: string;
    description: string;
    image: string;
    repo: string;
    video?: string;
    download?: string;
  };
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={`${styles.card} relative w-[300px] h-[380px]`}>
      <div
        className={styles.front}
        style={{
          background: `url(${project.image}) top no-repeat`,
          backgroundSize: "cover",
        }}
      />
      <div
        className={`${styles.back} flex flex-col justify-between bg-gradient-to-br from-black to-zinc-700`}
      >
        <section className="flex flex-col">
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-normal">
            {project.description}
          </p>
        </section>

        <section className="flex justify-end items-center">
          <a
            href={project.repo}
            target="_blank"
            className="rounded-full p-2 hover:bg-bluePrimary transition-all duration-300"
          >
            <GithubSvg width={24} height={24} />
          </a>

          {project.video && (
            <a
              href={project.video}
              target="_blank"
              className="rounded-full p-2 hover:bg-bluePrimary transition-all duration-300"
            >
              <VideoSvg width={24} height={24} color="#ffffff" />
            </a>
          )}

          {project.download && (
            <a
              href={project.download}
              target="_blank"
              className="rounded-full p-2 hover:bg-bluePrimary transition-all duration-300"
            >
              <DownloadSvg width={24} height={24} color="#ffffff" />
            </a>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
