import React from 'react';
import styles from './ExpenseDisplay.module.sass';

interface ExpenseDisplayProps {
    amount: number;
    text: string;
}

const ExpenseDisplay: React.FC<ExpenseDisplayProps> = ({ amount, text }) => {
    return (
        <>
        <div className={styles.expenseDisplay}>
            <span className={styles.amount}>${amount}</span>
            <span className={styles.text}>{text}</span>
        </div>
        </>
)
}

export default ExpenseDisplay;