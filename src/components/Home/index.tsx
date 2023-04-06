import { About } from "./About";
import { Presentation } from "./Presentation";
import { Works } from "./Works";
import "./styles.module.scss";

export function Home() {
  return (
    <main>
      <Presentation />
      <About />
      <Works />
    </main>
  );
}
