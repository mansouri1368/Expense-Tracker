import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import ExpenseOutput from "../components/ExpenseOutput";
import styles from './AllExpenses.module.css';


export default function RecentExpenses() {

  const expCtx = useContext(ExpenseContext);

  const recentExpenses = expCtx.expenses.filter((m) => {
    const today = new Date();
    const sevenDaysAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate()-7 )
    return m.date >= sevenDaysAgo.toISOString().slice(0,10) && m.date <= today.toISOString().slice(0,10);
  });
  
  return (<div className={styles.container}><ExpenseOutput expenses={recentExpenses} /> </div>);
}
