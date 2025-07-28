import React, { useState } from "react";
import Countdown from "react-countdown";

const CountdownTimer = ({ timeString = "0:0" }) => {
  const [restartKey, setRestartKey] = useState(0);
  const [min = 0, sec = 0] = timeString.split(":").map(Number);
  const totalMilliseconds = (min * 60 + sec) * 1000;

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setRestartKey((prev) => prev + 1);
      return null;
    } else {
      return (
        <span className="font-oswald font-medium text-[40px] text-white">
          {String(minutes)} :{" "}
          {String(seconds)}
        </span>
      );
    }
  };
  return (
    <Countdown
      key={restartKey}
      date={Date.now() + totalMilliseconds}
      renderer={renderer}
    />
  );
};

export default CountdownTimer;
