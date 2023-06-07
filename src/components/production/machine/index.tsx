import { useState } from "react";
import StartSession from "./startSession";
import SectionActions from "./sectionActions";

export default function Machine() {
  const [Stop, setStop] = useState(false);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [value, setValue] = useState("");

  function FinishAction() {
    setFinish(true);
    if (!finish) setStop(true);
    if (finish) {
      setFinish(false);
      setStart(false);
      setStop(false);
      setValue("");
    }
  }
  function StopAction() {
    setStop(true);
  }
  function Continue() {
    setStop(false);
  }
  return (
    <>
      <StartSession start={start} setStart={setStart} value={value} setValue={setValue}/>
      <SectionActions start={start} Stop={Stop} finish={finish} setFinish={setFinish} setStart={setStart} setStop={setStop} setValue={setValue} />
    </>
  );
}
