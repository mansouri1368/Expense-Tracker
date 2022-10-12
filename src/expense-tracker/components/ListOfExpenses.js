import ExpenseItem from "./ExpenseItem";



export default function ListOfExpenses({expenses}) {
  
  
  return (
    <>
      {expenses.map((m) => { return <ExpenseItem key={m.id} title={m.description} date={m.date} cost={m.cost} id={m.id}/>
  
      })}
    </>
  );
}
