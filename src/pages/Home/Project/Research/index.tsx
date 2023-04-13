import { useState, useEffect } from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { MyInput } from "src/components/Input";
import { Select } from "src/components/Select";
import { Technology } from "src/model/Technology.types";
import styles from "./styles.module.scss";

export function Research() {
  const [technologies, setTechnologies] = useState<Array<Technology>>([
    { label: "Java", value: 1, imagePath: "src/assets/java-icon.png" },
    { label: "React", value: 2, imagePath: "src/assets/java-icon.png" },
    { label: "CSS", value: 3, imagePath: "src/assets/java-icon.png" },
    { label: "SASS", value: 4, imagePath: "src/assets/java-icon.png" },
    { label: "C", value: 5, imagePath: "src/assets/java-icon.png" },
  ]);

  const handleAddTechnology = (technology: Technology) => {};

  useEffect(() => {
    console.log(technologies);
  }, [technologies]);

  return (
    <div className={styles["research-container"]}>
      <div className={styles["research-content"]}>
        <div className={styles["group-input"]}>
          <Select
            label="Technologies"
            items={technologies}
            handleSelectItem={handleAddTechnology}
          />
        </div>
      </div>
    </div>
  );
}
