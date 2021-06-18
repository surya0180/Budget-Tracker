import React, { useState } from "react";
import './ExpenseList.css'
import Card from "../UI/Card.jsx";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import Expenses from "./Expenses";

const ExpenseList = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    let filteredList = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)


    return (
        <li>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <Expenses items={filteredList}/>
            </Card>
        </li>
    );
} 

export default ExpenseList