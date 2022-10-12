import { useContext, useEffect, useState } from "react";
import ExpenseOutput from "../components/ExpenseOutput";
import { ExpenseContext } from "../store/expense-context";
import styles from "./AllExpenses.module.css";
import { IoLogOutOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { fetchExpense } from "../store/http";
import OverlayLoading from "../../Login&Signup/components/OverlayLoading";



export default function AllExpenses() {
  const expCtx = useContext(ExpenseContext);
  const expenses = expCtx.expenses;
  const navigation = useNavigate();

  const [isFetching, setIsFetching] = useState(true);
  

  useEffect(() =>
    {
        async function getExpenses()
        {
            setIsFetching(true);
            try
            {
                const expenses = await fetchExpense();
                expCtx.setExpenses(expenses);
               
                
            } catch (error)
            {
                console.log(error);
            }

            setIsFetching(false);

        };
        getExpenses();
        
    },[]);

    if (isFetching){
      return <OverlayLoading />
    }
  return (
    <div className={styles.container}>
      <div>
        <button className={styles.iconContainer} onClick={() => navigation("/")} >
          Log Out
          <IconContext.Provider value={{ size: 30, color: "purple" }}>
            <IoLogOutOutline />
          </IconContext.Provider>
        </button>
      </div>
      <ExpenseOutput expenses={expenses} />
    </div>
  );
}
