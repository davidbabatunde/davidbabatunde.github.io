import React, { useState, useRef, useEffect } from "react";

const Clock = () => {
  const Ref = useRef(null);

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const countDownDate = new Date("2022-09-09").getTime();

  const getTimeRemaining = (e) => {
    const total = countDownDate - Date.parse(new Date());

    const seconds = Math.floor((total / 1000) % 60);

    const minutes = Math.floor((total / 1000 / 60) % 60);

    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    const days = Math.floor(total / 1000 / 60 / 60 / 24);

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);

    if (total >= 0) {
      setDays(days > 9 ? days : "0" + days);
      setHours(hours > 9 ? hours : "0" + hours);
      setMinutes(minutes > 9 ? minutes : "0" + minutes);
      setSeconds(seconds > 9 ? seconds : "0" + seconds);
    }
  };

  const clearTimer = (e) => {
    setDays("00");
    setHours("00");
    setMinutes("00");
    setSeconds("00");

    if (Ref.current) clearInterval(Ref.current);

    const id = setInterval(() => {
      startTimer(e);
    }, 1000);

    Ref.current = id;
  };

  // We can use useEffect so that when the component

  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid

  // mount only

  useEffect(() => {
    clearTimer();
  }, []);

  return (
    <div>
      <ol className="timer">
        <li>
          <div className="main">{days}</div>
          <p>DAYS</p>
        </li>
        <li>
          <div className="main">{hours}</div>
          <p>HOURS</p>
        </li>
        <li>
          <div className="main">{minutes}</div>
          <p>MINUTES</p>
        </li>
        <li>
          <div className="main">{seconds}</div>
          <p>SECONDS</p>
        </li>
      </ol>
    </div>
  );
};

export default Clock;
