import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Expense.module.css";
import { BiAddToQueue } from "react-icons/bi";
import { IconContext } from "react-icons";
import ExpenseSummary from "./ExpenseSummary";
import ListOfExpenses from "./ListOfExpenses";

export default function ExpenseOutput({ expenses }) {
  const navigation = useNavigate();

  function clickHandler() {
    navigation("/ManageExpense");
  }

  const totalExpense = expenses.reduce((a, b) => {
    return a + parseInt(b.cost);
  }, 0);

  return (
    <div className={styles.expenseOutputPage}>
      <button className={styles.iconContainer} onClick={clickHandler}>
        Add New Expense
        <IconContext.Provider value={{ color: "rgb(212, 0, 204)", size: 30 }}>
          <BiAddToQueue />
        </IconContext.Provider>
      </button>
      <ExpenseSummary totalExpense={totalExpense} />
      <ListOfExpenses expenses={expenses} />
      <div className={styles.navLink}>
        <NavLink
          className={styles.manageNav}
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "green" }
          }
          to="/AllExpenses"
        >
          AllExpenses
        </NavLink>
        <NavLink
          className={styles.manageNav}
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "green" }
          }
          to="/RecentExpenses"
        >
          RecentExpenses
        </NavLink>
      </div>
    </div>
  );
}
