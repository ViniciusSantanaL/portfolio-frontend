import styles from "./styles.module.scss";

export function Header() {
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
        <button>Contact Me</button>
      </div>
    </header>
  );
}
