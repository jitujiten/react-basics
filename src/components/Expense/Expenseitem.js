import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const Expenseitem=(props)=> {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div>{props.location}</div>
      <ExpenseDetails title={props.title} amount={props.amount} />
    </div>
  );
  
}

export default Expenseitem;
