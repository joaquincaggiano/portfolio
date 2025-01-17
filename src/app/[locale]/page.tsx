import Skill from "@/components/home/Skill";
import Vsc from "@/components/home/vsc";
import DrizzleSvg from "@/components/icons/DrizzleSvg";
import ExpressSvg from "@/components/icons/ExpressSvg";
import EyeSvg from "@/components/icons/EyeSvg";
import JsSvg from "@/components/icons/JsSvg";
import NestSvg from "@/components/icons/NestSvg";
import NextSvg from "@/components/icons/NextSvg";
import NextUISvg from "@/components/icons/NextUISvg";
import NodeSvg from "@/components/icons/NodeSvg";
import PostgresSvg from "@/components/icons/PostgresSvg";
import PrismaSvg from "@/components/icons/PrismaSvg";
import ReactSvg from "@/components/icons/ReactSvg";
import StyledComponentSvg from "@/components/icons/StyledComponentSvg";
import TailwindSvg from "@/components/icons/TailwindSvg";
import TsSvg from "@/components/icons/TsSvg";
import ZustandSvg from "@/components/icons/ZustandSvg";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const localActive = useLocale();

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
      name: "NextUI",
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
            <h1 className="text-2xl md:text-3xl xl:text-4xl mb-5 text-center lg:text-start">
              {t("Home.welcome")}{" "}
              <span className="text-blueLight">Joaquín</span>, Frontend
              Developer 👨🏼‍💻
            </h1>
          </div>

          {/* Breve texto de cómo soy */}
          <div className="text-lg lg:text-xl xl:text-2xl text-center w-full max-w-[500px] self-center md:max-w-[600px] lg:max-w-[100%] lg:text-start">
            {t("Home.presentation")}
          </div>

          {/* Boton ver CV */}
          <a
            href={
              localActive === "es"
                ? "/pdf/cv-joaquin-caggiano-esp.pdf"
                : "/pdf/cv-joaquin-caggiano-eng.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-fit text-center text-white py-3 px-4 mt-5 text-sm font-medium rounded-xl border-2 border-bluePrimary hover:bg-bluePrimary"
          >
            {t("Home.viewCV")}

            <EyeSvg width={20} height={20} />
          </a>
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
          {skills.map((skill) => {
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
