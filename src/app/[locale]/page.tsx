"use client";

import Skill from "@/components/home/Skill";
import Vsc from "@/components/home/vsc";
import DrizzleSvg from "@/components/icons/DrizzleSvg";
import ExpressSvg from "@/components/icons/ExpressSvg";
import GithubSvg from "@/components/icons/GithubSvg";
import GmailSvg from "@/components/icons/GmailSvg";
import JsSvg from "@/components/icons/JsSvg";
import LinkedinSvg from "@/components/icons/LinkedinSvg";
import NestSvg from "@/components/icons/NestSvg";
import NextSvg from "@/components/icons/NextSvg";
import NextUISvg from "@/components/icons/NextUISvg";
import NodeSvg from "@/components/icons/NodeSvg";
import PostgresSvg from "@/components/icons/PostgresSvg";
import PrismaSvg from "@/components/icons/PrismaSvg";
import ReactSvg from "@/components/icons/ReactSvg";
import ResumeSvg from "@/components/icons/ResumeSvg";
import StyledComponentSvg from "@/components/icons/StyledComponentSvg";
import TailwindSvg from "@/components/icons/TailwindSvg";
import TsSvg from "@/components/icons/TsSvg";
import ZustandSvg from "@/components/icons/ZustandSvg";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function Home() {
  const t = useTranslations();
  const localActive = useLocale();

  const [resumeColor, setResumeColor] = useState("#FFFF");
  const [gmailColor, setGmailColor] = useState("#FFFF");
  const [linkedinColor, setLinkedinColor] = useState("#FFFF");
  const [githubColor, setGithubColor] = useState("#FFFF");
  const skills = [
    {
      name: "Javascript",
      icon: <JsSvg />,
      description: t("Skills.js"),
    },
    {
      name: "Next.js",
      icon: <NextSvg />,
      description: t("Skills.next"),
    },
    {
      name: "React / Native",
      icon: <ReactSvg width="80" height="80" />,
      description: t("Skills.react"),
    },
    {
      name: "Typescript",
      icon: <TsSvg />,
      description: t("Skills.ts"),
    },
    {
      name: "Node.js",
      icon: <NodeSvg />,
      description: t("Skills.node"),
    },
    {
      name: "Express.js",
      icon: <ExpressSvg />,
      description: t("Skills.express"),
    },
    {
      name: "Nest.js",
      icon: <NestSvg />,
      description: t("Skills.nest"),
    },
    {
      name: "Zustand",
      icon: <ZustandSvg />,
      description: t("Skills.zustand"),
    },
    {
      name: "Hero UI",
      icon: <NextUISvg />,
      description: t("Skills.nextui"),
    },
    {
      name: "Tailwind",
      icon: <TailwindSvg />,
      description: t("Skills.tailwind"),
    },
    {
      name: "Styled Components",
      icon: <StyledComponentSvg />,
      description: t("Skills.styled"),
    },
    {
      name: "Prisma",
      icon: <PrismaSvg />,
      description: t("Skills.prisma"),
    },
    {
      name: "Drizzle",
      icon: <DrizzleSvg />,
      description: t("Skills.drizzle"),
    },
    {
      name: "Postgres",
      icon: <PostgresSvg />,
      description: t("Skills.postgres"),
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row gap-16 mb-20">
        {/* Presentación */}
        <div className="flex flex-col w-full lg:max-w-[40%] xl:max-w-[600px] animate-slide-in-left">
          {/* Saludo */}
          <div className="w-full max-w-[300px] self-center md:max-w-[400px] lg:max-w-[100%]">
            <h1 className="text-2xl md:text-3xl xl:text-4xl mb-5 text-center lg:text-start font-medium text-white">
              {t("Home.welcome")}{" "}
              <span className="text-blueLight">Joaquín</span>, Frontend
              Developer 👨🏼‍💻
            </h1>
          </div>

          {/* Breve texto de cómo soy */}
          <div className="text-lg lg:text-xl xl:text-2xl text-center w-full max-w-[500px] self-center md:max-w-[600px] lg:max-w-[100%] lg:text-start text-white font-normal">
            {t("Home.presentation")}
          </div>

          {/* Links */}
          <div className="flex flex-col gap-5 sm:flex-row sm:justify-center sm:items-center sm:gap-10 lg:flex-col lg:justify-start lg:items-start lg:gap-5 xl:flex-row xl:items-center xl:gap-10 mt-5">
            <div className="flex flex-col gap-5">
              {/* Cv */}
              <a
                href={
                  localActive === "es"
                    ? "/pdf/cv-joaquin-caggiano-esp.pdf"
                    : "/pdf/cv-joaquin-caggiano-eng.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit flex items-center gap-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-violetPrimary hover:text-violetPrimary"
                onMouseEnter={() => setResumeColor("#ff58cd")}
                onMouseLeave={() => setResumeColor("#FFFF")}
              >
                <ResumeSvg width={24} height={24} color={resumeColor} />
                <span>{t("Home.resume")}</span>
              </a>

              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/joaquin-caggiano-dev/"
                target="_blank"
                className="w-fit flex items-center gap-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0288D1] hover:text-[#0288D1]"
                onMouseEnter={() => setLinkedinColor("#0288D1")}
                onMouseLeave={() => setLinkedinColor("#FFFF")}
              >
                <LinkedinSvg width={24} height={24} color={linkedinColor} />
                <span>joaquin-caggiano-dev</span>
              </a>
            </div>

            <div className="flex flex-col gap-5">
              {/* Github */}
              <a
                href="https://github.com/joaquincaggiano"
                target="_blank"
                className="w-fit flex items-center gap-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:text-gray-500"
                onMouseEnter={() => setGithubColor("#6b7280")}
                onMouseLeave={() => setGithubColor("#FFFF")}
              >
                <GithubSvg width={24} height={24} color={githubColor} />
                <span>joaquincaggiano</span>
              </a>

              {/* Gmail */}
              <a
                href="mailto:joaquincaggiano@gmail.com"
                className="w-fit flex items-center gap-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#DB4437] hover:text-[#DB4437]"
                onMouseEnter={() => setGmailColor("#DB4437")}
                onMouseLeave={() => setGmailColor("#FFFF")}
              >
                <GmailSvg width={24} height={24} color={gmailColor} />
                <span>joaquincaggiano@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Datos personales - VSC */}
        <Vsc />
      </div>

      {/* Skills */}
      <h2 className="text-center text-2xl md:text-3xl mb-7">
        {t("Skills.title")}
      </h2>

      <div className="flex justify-center items-center">
        <div className="w-full lg:max-w-[70%] grid grid-cols-2 sm:grid-cols-4 gap-5">
          {skills
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((skill) => {
              return (
                <Skill
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  description={skill.description}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
