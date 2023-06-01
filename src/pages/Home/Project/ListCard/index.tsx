import styles from "./styles.module.scss";
import { useCallback, useEffect, useState } from "react";
import { useApi } from "src/hooks/useApi";
import { Card } from "src/pages/Home/Project/ListCard/Card";
import { ControlListCard } from "src/pages/Home/Project/ListCard/ControlCard";
export function ListCard() {

    const [repos, setRepos] = useState([]);
    const [actualPositions, setActualPositions] = useState({
        start: 0,
        end: 4
    });
    const reposActual = repos.slice(actualPositions.start, actualPositions.end);
    const api = useApi();

    const requestRepos = useCallback(async () => {
        try {
            const { data } = await api.get(import.meta.env.VITE_GITHUB_URL);
            setRepos(data);
        } catch (error) {
            console.log(error);
        }
    },[]);

    useEffect(() => {
        requestRepos();
    },[]);

  return (
      <div className={styles["cards-container"]}>
          {reposActual.map((item, _id) => (
              <Card key={_id} />)
          )}
         <ControlListCard
             listCardSize={repos.length}
             setActualPositions={setActualPositions}
             actualPositions={actualPositions} />
      </div>
  );
}
