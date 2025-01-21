"use client";

import ExperienceCard from "@/components/cards/ExperienceCard";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CoderLogo from "@public/img/experience/coder.jpeg";
import DesawayLogo from "@public/img/experience/iso_des.svg";
import CardDataExperience from "@/components/cards/CardDataExperience";

const ExperiencePage = () => {
  const t = useTranslations();

  const experience = [
    {
      date: t("Experience.desawayDate"),
      url: "https://desaway.es/",
      image: <Image src={DesawayLogo} width={120} height={80} alt="desaway" />,
      title: "desaway S.L",
      description: t("Experience.desawayDescription"),
      role: t("Experience.desawayRole"),
    },
    {
      date: t("Experience.coderDate"),
      url: "https://www.coderhouse.com/es/",
      image: <Image src={CoderLogo} width={120} height={80} alt="coderhouse" />,
      title: "Coder House",
      description: t("Experience.coderDescription"),
      role: t("Experience.coderRole"),
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-10 sm:flex-row justify-center items-center mb-20">
        <ExperienceCard targetNumber={7} title={t("Experience.coursesTaken")} />
        <ExperienceCard targetNumber={10} title={t("Experience.projectsDone")} addPlus={true} />
        <ExperienceCard targetNumber={24} title={t("Experience.monthsOfExperience")} addPlus={true} />
      </div>

      <div className="flex flex-col justify-center items-center gap-10">
        {experience.map((experience) => {
          return (
            <CardDataExperience
              key={experience.title}
              date={experience.date}
              url={experience.url}
              image={experience.image}
              title={experience.title}
              description={experience.description}
              role={experience.role}
            />
          );
        })}
      </div>
    </>
  );
};

export default ExperiencePage;
