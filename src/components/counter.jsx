import React, { useEffect, useState } from "react";




const Counter =  (props)  =>  {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn){
      interval = setInterval(() => {
        setTimerOn(prevTime => prevTime + 10)

      },10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timerOn])

  return(

    <div>
    <div>{time}</div>
    <div>
    <button onClick={() => setTimerOn(true)}>Start</button>
    <button onClick={() => setTimerOn(false)}>Stop</button>
    <button onClick={() => setTimerOn(true)}>Resume</button>
    <button onClick={() => setTime(0)}>Reset</button>
    </div>
    </div>

  );



}

export default Counter;
