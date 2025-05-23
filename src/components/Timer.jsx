import { useState } from "react";

const Timer = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    settime(new Date().toLocaleTimeString());
  }, 1000);
  return <div>
    <h1>{time}</h1>
  </div>;
};

export default Timer;
