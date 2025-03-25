import { Button } from "@/components/ui/button";
import { useSuhuCounterStore } from "@/stores/suhu";
import { NavLink } from "react-router-dom";

function About() {
  const {
    counter,
    increment,
    decrement,
    reset,
    incrementByAmount,
    decrementByAmount,
  } = useSuhuCounterStore((state) => state);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p>This is about page</p>
      <p>Suhu saat ini : {counter}</p>
      <NavLink to="/">Ke Halaman Home with NavLink</NavLink>

      <br />
      <Button onClick={reset}>Reset</Button>
    </main>
  );
}

export default About;
