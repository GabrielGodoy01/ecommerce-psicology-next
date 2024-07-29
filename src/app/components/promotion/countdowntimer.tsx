'use client'

import { useEffect, useState } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function CountdownTimer({ initialTargetDate }: { initialTargetDate: Date }) {
    const [targetDate, setTargetDate] = useState(initialTargetDate);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(initialTargetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = getTimeLeft(targetDate);
            if (newTimeLeft.total <= 0) {
                const newTargetDate = new Date();
                newTargetDate.setHours(0, 0, 0, 0);
                newTargetDate.setDate(newTargetDate.getDate() + 15);
                setTargetDate(newTargetDate);
                setTimeLeft(getTimeLeft(newTargetDate));
            } else {
                setTimeLeft(newTimeLeft);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    function getTimeLeft(targetDate: Date) {
        const now = new Date();
        const timeDifference = targetDate.getTime() - now.getTime();
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds, total: timeDifference };
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
