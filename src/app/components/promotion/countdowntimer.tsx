'use client'

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate } : { targetDate: Date }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>();
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(getTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);

  function getTimeLeft() {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div>
        <h1 className="font-bold text-white text-center lg:text-3xl xl:text-4xl text-xl md:text-2xl pb-4">ENCERRA EM:</h1>
        <div className="flex w-full justify-between max-w-[90%] text-white lg:text-3xl xl:text-4xl text-xl md:text-2xl mx-auto text-center">
            <div className="flex flex-col items-center">
                <p className="font-bold">{timeLeft?.days}</p>
                <p>dias</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold">{timeLeft?.hours}</p>
                <p>hrs</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold">{timeLeft?.minutes}</p>
                <p>min</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold">{timeLeft?.seconds}</p>
                <p>seg</p>
            </div>
        </div>
    </div>
  );
}