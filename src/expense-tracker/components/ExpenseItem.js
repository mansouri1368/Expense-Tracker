import { useNavigate} from "react-router-dom";
import styles from "./Expense.module.css";

export default function ExpenseItem({ title, date, cost, id }) {
  const navigation = useNavigate();
  

  function clickHandler() {
    navigation(`/ManageExpense/${id}`);
  }
  

  return (
    <button className={styles.Button} type="button" onClick={clickHandler}>
      <div className={`${styles["left-side"]}`}>
        <h2>{title}</h2>
        <h3>{date}</h3>
      </div>
      <div className={`${styles["right-side"]}`}>
        <h3>{`${cost}$`}</h3>
      </div>
    </button>
  );
}