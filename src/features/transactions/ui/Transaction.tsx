import React, { useState } from "react";
import styles from "./Transaction.module.sass";

interface TransactionProps {
  name: string;
  date: string;
  amount: number;
  status: string;
}

const transactions = [
  {
    name: "Transaction 1",
    date: "2023-01-01",
    amount: 100,
    status: "Purchase",
  },
  {
    name: "Transaction 2",
    date: "2023-01-05",
    amount: 200,
    status: "Return",
  },
  {
    name: "Transaction 1",
    date: "2023-01-01",
    amount: 100,
    status: "Purchase",
  },
  {
    name: "Adobe After Effect",
    date: "2023-01-05",
    amount: 200,
    status: "Return",
  },
  {
    name: "Adobe After Effect",
    date: "2023-01-01",
    amount: 100,
    status: "Purchase",
  },
  {
    name: "Adobe After Effect",
    date: "2023-01-05",
    amount: 200,
    status: "Return",
  },
];

const Transaction: React.FC<TransactionProps> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);
  const handleFilterDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilterDate(e.target.value);

  React.useEffect(() => {
    if (searchQuery.length >= 3) {
      setFilteredTransactions(
        transactions.filter((transaction) =>
          transaction.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredTransactions(transactions);
    }
  }, [searchQuery]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div className={styles.transactionContainer}>
      <div className={styles.filterContainer}>
        <h2>Transactions</h2>
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
        <div className={styles.transactionHeader}>
          <span>Name</span>
          <span>Date</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        {filteredTransactions.length === 0 ? (
          <div>No transactions found</div>
        ) : (
          filteredTransactions.map((transaction, index) => (
            <div key={index} className={styles.transactionItem}>
              <span className={styles.transactionName}>{transaction.name}</span>
              <span className={styles.transactionDate}>
                {formatDate(transaction.date)}
              </span>
              <span className={styles.transactionAmount}>
                ${transaction.amount}
              </span>
              <span className={styles.transactionStatus}>
                {transaction.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Transaction;
