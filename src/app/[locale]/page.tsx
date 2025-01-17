import Vsc from "@/components/home/vsc";
import EyeSvg from "@/components/icons/EyeSvg";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const localActive = useLocale();

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

      {/* <div className="flex justify-center items-center">
        <div className="w-full lg:max-w-[70%] grid grid-cols-2 sm:grid-cols-4 gap-5">
          {skills.map((skill) => {
            return (
              <CardSkill
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                description={skill.description}
              />
            );
          })}
        </div>
      </div> */}
    </>
  );
}
