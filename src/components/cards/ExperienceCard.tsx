"use client";

import { useEffect, useState } from "react";

interface Props {
  targetNumber: number;
  title: string;
  addPlus?: boolean;
}

const ExperienceCard = ({ targetNumber, title, addPlus }: Props) => {
  const [displayedNumber, setDisplayedNumber] = useState(0);

  useEffect(() => {
    let currentNumber = 0;
    const interval = setInterval(() => {
      if (currentNumber < targetNumber) {
        currentNumber += 1;
        setDisplayedNumber(currentNumber);
      } else {
        clearInterval(interval);
      }
    }, 50); // Velocidad de la animación (en ms)

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <div className="w-[250px] border-[1px] border-gray-700 bg-content1 rounded-xl p-3 flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center text-6xl font-semibold">
        {addPlus && <span>+</span>}
        <div className="animate-fade-in-down">
          {displayedNumber}
        </div>
      </div>
      <p className="text-xs font-medium text-center">{title}</p>
    </div>
  );
};

export default ExperienceCard;
