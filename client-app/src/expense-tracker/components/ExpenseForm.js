import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../main-components/Buttons";
import styles from "./Expense.module.css";

export default function ExpenseForm({
  onSubmit,
  defaultValue,
  submitButtonLabel,
}) {
  const navigation = useNavigate();

  const [inputs, setInputs] = useState({
    cost: defaultValue ? defaultValue.cost : "",
    date: defaultValue ? defaultValue.date : "",
    description: defaultValue ? defaultValue.description : "",
  });

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    cost: false,
    date: false,
    description: false,
  });

  const {
    cost: expenseIsInvalid,
    date: dateIsInvalid,
    description: descriptionIsInvalid,
  } = credentialsInvalid;

  function onChangeHandler(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setInputs((current) => ({ ...current, [name]: value }));
    setCredentialsInvalid((current) => ({ ...current, [name]: !target.value }));
  }

  function submitHandler(event) {
    event.preventDefault();

    const cost = parseInt(inputs.cost);
    const date = new Date(inputs.date);

    const expenseIsValid = !isNaN(cost) && cost > 0;
    const dateIsValid = date !== "Invalid Date" && inputs.date.length === 10;
    const descriptionIsValid = inputs.description.length > 0;

    if (!expenseIsValid || !dateIsValid || !descriptionIsValid) {
      alert("inputs are invalid");
      setCredentialsInvalid({
        cost: !expenseIsValid,
        date: !dateIsValid,
        description: !descriptionIsValid,
      });
      return;
    }
    onSubmit({
      cost: inputs.cost,
      date: inputs.date,
      description: inputs.description,
    });
    navigation("/AllExpenses");
  }

  function cancelHandler() {
    navigation("/AllExpenses");
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.block}>
        <div
          className={`${styles.mblock} ${expenseIsInvalid && styles.invalid}`}
        >
          <label>Expense</label>
          <input
            type={"number"}
            name="cost"
            maxLength={3}
            value={inputs.cost}
            onChange={onChangeHandler}
          />
        </div>
        <div className={`${styles.mblock} ${dateIsInvalid && styles.invalid}`}>
          <label>Date</label>
          <input
            type={"date"}
            name="date"
            value={inputs.date}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div
        className={`${styles["block-description"]} ${
          descriptionIsInvalid && styles.invalid
        }`}
      >
        <label>Description</label>
        <textarea
          type={"text"}
          name="description"
          value={inputs.description}
          onChange={onChangeHandler}
          rows={7}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          style={{ backgroundColor: 'rgb(0, 153, 255)' }}
          onClick={cancelHandler}
          type="button"
        >
          Cancel
        </button>

        <button
          className={styles.button}
          style={{ backgroundColor: "rgb(51, 51, 204)" }}
          onClick={submitHandler}
          type="Submit"
        >
          {submitButtonLabel}
        </button>
      </div>
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
    </form>
  );
}
