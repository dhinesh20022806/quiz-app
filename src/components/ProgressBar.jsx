import { useEffect, useState } from 'react';

const ProgressBar = ({ timer, onSkip }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setRemainingTime(prev => prev - 100);
    }, 100);

    return () => {
      console.log('CLEAR INTERVAL');
      clearInterval(intervalTimer);
    };
  }, []);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timeOut = setTimeout(() => {
      onSkip();
    }, timer);

    return () => {
      console.log('CLEAR TIMEOUT');
      clearTimeout(timeOut);
    };
  }, [timer, onSkip]);

  return <progress value={remainingTime} max={timer} />;
};

export default ProgressBar;
