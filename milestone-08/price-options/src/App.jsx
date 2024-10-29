
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import StudentMarks from "./components/StudentMarks/StudentMarks";
import StudentResult from "./components/StudentMarks/StudentResult";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1>Hello EveryOne</h1>
      <StudentMarks></StudentMarks>
      <StudentResult></StudentResult>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
