import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const navigation = useNavigate();

  return (
    <div className={styles.main}>
      <div className={styles["first-page"]}>
        <ul>
          <li className={styles.home} style={{ backgroundColor: "green" }}>
            <a href="/">Home</a>
          </li>
          <li className={styles.home} style={{backgroundColor:'rgb(51, 51, 204)'}}>
            <a href="/Login">Log in</a>
          </li>
          <li className={styles.home}>
            <a href="/">Contact</a>
          </li>
          <li className={styles.home}>
            <a href="/">About</a>
          </li>
        </ul>
        <div className={styles.image} />

        <div className={styles.adage}>
          <h1 >
            CREDITORS HAVE BETTER MEMORIES THAN DEBTORS.
          </h1>
          <h3 >Ben Franklin</h3>
          <p >
            As much as we’d like to be able to forget our bad money decisions
            and let our old debts drift away into obscurity, that just isn’t
            happening. And just because you can’t remember who you owe and how
            much, trust me – they know. So keep good records and don’t lose
            track of your debts.
          </p>
        </div>
        
      </div>
    </div>
  );
}
