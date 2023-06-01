import axios from "axios";
import styles from "./styles.module.scss";

export function Header() {
  async function test() {
    axios
      .post("http://localhost:8080/api/v1/sign-up", {
        body: JSON.stringify({
          user_username: "test2",
          user_email: "viniciussantanaleao@gmail.com2",
          user_password: "test2",
        }),
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  return (
    <header>
      <div className={styles["header-container"]}>
        <h1>
          Viniciussls<span>.</span>
        </h1>
        <nav>
          <a>Home</a>
          <a>About</a>
          <a>Works</a>
          <a>Projects</a>
          <a>Skills</a>
        </nav>
        <button onClick={() => test()}>Contact Me</button>
      </div>
    </header>
  );
}
