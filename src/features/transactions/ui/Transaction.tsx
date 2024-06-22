import React, { useState } from 'react';
import styles from './Transaction.module.sass';

interface TransactionProps {
    name: string;
    date: string;
    amount: number;
    status: string;
}

const Transaction:React.FC<TransactionProps> = ( { name, date, amount, status } ) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterDate, setFilterDate] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);
    const handleFilterDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setFilterDate(e.target.value);

    const transactions = [
        { name: 'Transaction 1', date: '2023-01-01', amount: 100, status: 'Purchase' },
        { name: 'Transaction 2', date: '2023-01-05', amount: 200, status: 'Return' },
        { name: 'Transaction 1', date: '2023-01-01', amount: 100, status: 'Purchase' },
        { name: 'Adobe After Effect', date: '2023-01-05', amount: 200, status: 'Return' },
        { name: 'Adobe After Effect', date: '2023-01-01', amount: 100, status: 'Purchase' },
        { name: 'Adobe After Effect', date: '2023-01-05', amount: 200, status: 'Return' },
    ];

    const filteredTransactions = transactions.filter(transaction =>
        transaction.name.includes(searchQuery) &&
        transaction.date.includes(filterDate)
    );

    return (
        <div className={styles.transactionContainer}>
            <h2>Transaction</h2>
            <div className={styles.filterContainer}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
                <input
                    type="date"
                    value={filterDate}
                    onChange={handleFilterDateChange}
                    className={styles.dateInput}
                />
            </div>
            <div className={styles.transactionList}>
                <div className={styles.transactionList}>
                    <div >
                        <span>Name</span>
                    </div>
                    <div>
                        <span>Date</span>
                    </div>
                    <div>
                        <span>Amount</span>
                    </div>
                    <div>
                        <span>Status</span>
                    </div>
                </div>


                {filteredTransactions.map((transaction, index) => (
                    <div key={index} className={styles.transactionItem}>
                        <span className={styles.transactionName}>{transaction.name}</span>
                        <span className={styles.transactionDate}>{transaction.date}</span>
                        <span className={styles.transactionAmount}>${transaction.amount}</span>
                        <span className={styles.transactionStatus}>{transaction.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transaction;