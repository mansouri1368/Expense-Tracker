import styles from "./ManageExpense.module.css";
import { IconContext } from "react-icons";
import { BsFillTrashFill } from "react-icons/bs";
import ExpenseForm from "../components/ExpenseForm";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ExpenseContext } from "../store/expense-context";
import { deleteExpense, storeExpense, updateExpense } from "../store/http";

export default function ManageExpenses() {
  const expCtx = useContext(ExpenseContext);
  const navigation = useNavigate();

  const { itemId } = useParams();
  const editedExpenseId = itemId;
  const isEditing = !!itemId;

  const selectedItem = expCtx.expenses.find((m) => m.id === itemId);

  async function confirmHandler(expenseData) {
    if (isEditing) {
      try {
        await updateExpense(editedExpenseId, expenseData);
        expCtx.updateExpense(editedExpenseId, expenseData);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const id = await storeExpense(expenseData);

        expCtx.addExpense({ ...expenseData, id: id });
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function removeHandler() {
    try {
      await deleteExpense(editedExpenseId);
      expCtx.removeExpense(editedExpenseId);
    } catch (error) {
      console.log(error);
    }

    navigation("/AllExpenses");
  }

  return (
    <div className={styles.container}>
      <ExpenseForm
        onSubmit={confirmHandler}
        defaultValue={selectedItem}
        submitButtonLabel={isEditing ? "Update" : "Add"}
      />
      {isEditing && (
        <button className={styles.iconContainer} onClick={removeHandler}>
          <IconContext.Provider
            value={{
              color: "rgb(212, 0, 204)",
              size: 40,
              style: { marginTop: 10 },
            }}
          >
            <BsFillTrashFill>Delete</BsFillTrashFill>
          </IconContext.Provider>
        </button>
      )}
    </div>
  );
}
