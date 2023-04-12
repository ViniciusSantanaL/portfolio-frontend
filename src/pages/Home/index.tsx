import { About } from "./About";
import { Presentation } from "./Presentation";
import { Project } from "./Project";
import { Works } from "./Works";
import "./styles.module.scss";

export function Home() {
  return (
    <main>
      <Presentation />
      <About />
      <Works />
      <Project />
    </main>
  );
}
