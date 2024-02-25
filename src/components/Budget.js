
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { expenses, budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
}, 0);
  const handleBudgetChange = (event) => {
    const newBudgetValue = event.target.value;
      setNewBudget(newBudgetValue);
      console.log("NewBudget : ", newBudgetValue);
      if (parseInt(newBudgetValue) <= parseInt(totalExpenses)){
        console.log("You cannot reduce the budget lower than spending")
          alert("You cannot reduce the budget lower than spending");
      }
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: £</span>
      <input
        type="number"
        step="10"
        max='20000'
        min={totalExpenses}
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
