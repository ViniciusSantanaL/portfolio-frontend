import axios from 'axios'
import styles from './styles.module.scss'

export function Header() {
  async function test() {
    axios
      .get('https://jira-clone-api-production.up.railway.app/api/v1/teams', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJ2aW5pQUFBIiwiaWF0IjoxNjg3MjA2MjY0LCJleHAiOjE2ODcyOTI2NjR9.fAl4GiOSEjZWs47bE5W1FA3fGjhafyQca0FgmXRRmIo',
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }
  return (
    <header>
      <div className={styles['header-container']}>
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
  )
}
