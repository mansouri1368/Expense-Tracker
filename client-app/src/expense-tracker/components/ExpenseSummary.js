import styles from './Expense.module.css';

export default function ExpenseSummary({ totalExpense }) {
  return (
    <div className={styles.expenseSummary}>
      <h3>Total</h3>
      <h3>{`${totalExpense}$`}</h3>
    </div>
  );
}
