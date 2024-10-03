import { useState, useEffect } from "react";

function useTimer(initialTime) {
  const [timer, setTimer] = useState(initialTime || null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer !== null && prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          return null;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const setterTimer = (duration) => setTimer(duration);

  return { timer, setterTimer };
}

export default useTimer;
