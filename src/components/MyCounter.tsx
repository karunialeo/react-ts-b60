import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useSuhuCounterStore } from "@/stores/suhu";

function MyCounter() {
  // const [suhu, setSuhu] = useState<number>(17);
  const {
    counter,
    increment,
    decrement,
    reset,
    incrementByAmount,
    decrementByAmount,
  } = useSuhuCounterStore((state) => state);
  const [background, setBackground] = useState<string>("#71b4ff");

  // useEffect(() => {
  //   if (suhu > 25) {
  //     setBackground("#fff200");
  //   } else if (suhu < 20) {
  //     setBackground("#97ff5c");
  //   } else {
  //     setBackground("#71b4ff");
  //   }
  // }, [suhu]);

  // const tambah = () => {
  //   if (suhu < 30) {
  //     setSuhu(suhu + 1);
  //   } else {
  //     alert("suhu tidak bisa lebih dari 30");
  //   }
  // };

  // const kurang = () => {
  //   if (suhu > 16) {
  //     setSuhu(suhu - 1);
  //   } else {
  //     alert("suhu tidak bisa kurang dari 16");
  //   }
  // };

  return (
    <div
      id="my-counter"
      style={{
        backgroundColor: background,
        height: "30vh",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>My Counter</h1>
      <h1>{counter}</h1>
      <Button onClick={increment}>Tambah</Button>
      <br />
      <Button onClick={decrement}>Kurang</Button>
      <br />
      <Button onClick={reset}>Reset</Button>
      <br />
      <Button onClick={() => incrementByAmount(3)}>Increase By 3</Button>
    </div>
  );
}

export default MyCounter;
