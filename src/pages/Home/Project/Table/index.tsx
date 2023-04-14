import styles from "./styles.module.scss";
export function Table() {
  return (
    <table className={styles["table-container"]}>
      <thead>
        <tr>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
        </tr>
        <tr>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
        </tr>
        <tr>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
        </tr>
      </tbody>
    </table>
  );
}
