import { useState, useEffect, useRef, use } from "react";

export default function useTimer(timerTime = 1000) {
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!isActive) {
            setIsActive(true)
        }
    };

    const stopTimer = () => {
        setIsActive(false);
        setTimer(0);
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, timerTime);
        }

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isActive, timerTime]);

    return { timer, startTimer, stopTimer, isActive };
}