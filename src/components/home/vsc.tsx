"use client";

import InfoCode from "./info-code";

import FilesSvg from "../icons/FilesSvg";
import GitSvg from "../icons/GitSvg";
import LupaSvg from "../icons/LupaSvg";
import LupaVscSvg from "../icons/LupaVscSvg";
import ReactSvg from "../icons/ReactSvg";
import SettingSvg from "../icons/SettingSvg";
import UserSvg from "../icons/UserSvg";

const Vsc = () => {
  return (
    <div
      className="flex flex-col w-full lg:max-w-[40%] xl:max-w-[600px] rounded-md text-md bg-gradient-to-r from-zinc-800 to-zinc-900 animate-customBounce"
      style={{ borderWidth: 0.5 }}
    >
      {/* Barra de VSC */}
      <div
        className="w-full flex justify-between items-center gap-3 p-4"
        style={{ borderBottomWidth: 0.5 }}
      >
        <div className="flex gap-2">
          <div className="rounded-full bg-red-500 w-[10px] h-[10px]" />
          <div className="rounded-full bg-yellow-500 w-[10px] h-[10px]" />
          <div className="rounded-full bg-green-500 w-[10px] h-[10px]" />
        </div>

        <div className="rounded-md w-full max-w-[200px] p-2 flex items-center justify-center gap-2 text-xs lg:text-base bg-zinc-800">
          <LupaSvg />
          portfolio-joaquin
        </div>

        <div className="flex w-full max-w-[30px]" />
      </div>

      {/* Barra vertical y código */}
      <div className="flex">
        <div
          className="w-full max-w-[50px] flex flex-col items-center justify-between text-2xl"
          style={{ borderRightWidth: 0.5 }}
        >
          <div className="flex flex-col gap-4">
            <div className="mt-5">
              <FilesSvg />
            </div>
            <div>
              <LupaVscSvg />
            </div>
            <div>
              <GitSvg />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 mb-4">
            <div>
              <UserSvg />
            </div>
            <div>
              <SettingSvg />
            </div>
          </div>
        </div>

        {/* Código */}
        <div className="flex flex-col w-full">
          <div>
            <div
              className="flex items-center gap-2 p-2 w-full max-w-[100px] md:max-w-[120px] text-xs md:text-base lg:text-lg"
              style={{ borderRightWidth: 0.5 }}
            >
              <ReactSvg width="14" height="14" />
              page.tsx
            </div>
            <div style={{ borderBottomWidth: 0.5 }} />
          </div>
          <InfoCode />
        </div>
      </div>
    </div>
  );
};

export default Vsc;
