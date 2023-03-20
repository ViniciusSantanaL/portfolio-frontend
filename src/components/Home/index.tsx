import { About } from "./About";
import { Presentation } from "./Presentation";
import "./styles.module.scss";

export function Home() {
  return (
    <main>
      <Presentation />
      <About />
    </main>
  );
}
