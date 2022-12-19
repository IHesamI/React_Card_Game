import { useState } from "react";
import Header from "./components/Header";
import PicturesList from "./components/PicturesList";

function useHeart(initial, val) {
  const [hearts, setHearts] = useState(initial);
  function deacrease() {
    setHearts(hearts - val);
  }
  return [hearts, deacrease];
}

function useScore(initial, val) {
  const [score, setScore] = useState(initial);
  function increase() {
    setScore(score + val);
  }
  return [score, increase];
}



function App() {
  const [hearts, deacrease] = useHeart(5, 1)
  const [score, increase] = useScore(0, 10);
  return (
    <>
      <Header
        hearts={hearts}
        score={score} />
      <PicturesList
        deacreaseHearts={deacrease}
        increaseScore={increase} />

    </>

  )
}

export default App
