import React from 'react';
import styles from './ExpenseDisplay.module.sass';

interface ExpenseDisplayProps {
    amount: string;
    text: string;
    imgUrl: string;
}

const ExpenseDisplay: React.FC<ExpenseDisplayProps> = ({ amount, text, imgUrl }) => {
    return (
        <>
        <div className={styles.expenseDisplay}>
            <img src={imgUrl} alt='iconUp' />
            <span className={styles.amount}>${amount}</span>
            <span className={styles.text}>{text}</span>
        </div>
        </>
)
}

export default ExpenseDisplay;