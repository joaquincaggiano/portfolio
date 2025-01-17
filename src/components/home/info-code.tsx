"use client";

import { useTranslations } from "next-intl";

const InfoCode = () => {
  const t = useTranslations("Home");

  return (
    <div className="p-4 text-xs md:text-base xl:text-xl">
      <span className="text-blueLight">const</span> {t("nameFunction")}{" "}
      <span>=</span> <span className="text-blueLight">{"()"}</span>{" "}
      <span>{"=>"}</span> <span className="text-violetPrimary">{"{"}</span>
      <br />
      {"\u00A0\u00A0\u00A0\u00A0"}
      <span className="text-blueLight">const</span> {t("aboutMe")}{" "}
      <span>=</span> <span className="text-violetPrimary">{"{"}</span>
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span className="text-blueLight1">{t("name")}:</span>{" "}
      <span className="text-orange-400">&#39;Joaquin&#39;</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span className="text-blueLight1">{t("lastName")}:</span>{" "}
      <span className="text-orange-400">&#39;Serra Caggiano&#39;</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span className="text-blueLight1">{t("age")}:</span>{" "}
      <span className="text-orange-400">&#39;27&#39;</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span className="text-blueLight1">{t("languages")}:</span>{" "}
      <span className="text-violetPrimary">{"["} </span>
      <span className="text-orange-400">&#39;{t("spanish")}&#39;</span>,
      <span className="text-orange-400"> &#39;{t("english")}&#39;</span>
      <span className="text-violetPrimary"> {"]"}</span>,<br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span className="text-blueLight1">{t("currentCountry")}:</span>{" "}
      <span className="text-orange-400">&#39;{t("spain")}&#39;</span>,
      <br />
      {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
      <span className="text-blueLight1">{t("nationality")}:</span>{" "}
      <span className="text-violetPrimary">{"["} </span>
      <span className="text-orange-400">&#39;{t("argentina")}&#39;</span>,
      <span className="text-orange-400"> &#39;{t("italian")}&#39;</span>
      <span className="text-violetPrimary"> {"]"}</span>
      <br />
      {"\u00A0\u00A0\u00A0\u00A0"}
      <span className="text-violetPrimary">{"}"}</span>
      <br />
      <br />
      {"\u00A0\u00A0\u00A0\u00A0"}
      <span className="text-violetPrimary">return</span>{" "}
      <span>{t("aboutMe")}</span>
      <br />
      <span className="text-violetPrimary">{"}"}</span>
      <br />
      <br />
      <span>{t("nameFunction")}</span>
      <span className="text-blueLight">{"()"}</span>;
    </div>
  );
};

export default InfoCode;
