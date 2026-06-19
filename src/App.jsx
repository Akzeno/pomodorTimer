import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Timer from "./components/Timer";

function App() {
  const timeGivenbyUser = {
    usrTimeInSec: 10,
    usrBeakTimeInSec: 5,
  };

  const [time, setTime] = useState(timeGivenbyUser.usrTimeInSec);
  const [runnig, setRunning] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);

  const [isClose, setIsClose] = useState(true);

  return (
    <>
      <Timer
        time={time}
        setTime={setTime}
        runnig={runnig}
        setRunning={setRunning}
        isBreakTime={isBreakTime}
        setIsBreakTime={setIsBreakTime}
        isClose={isClose}
        setIsClose={setIsClose}
        timeGivenbyUser={timeGivenbyUser}
      />
      <Modal isClose={isClose} setIsClose={setIsClose}></Modal>
    </>
  );
}

export default App;
