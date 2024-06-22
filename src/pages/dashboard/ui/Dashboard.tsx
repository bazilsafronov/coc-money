
import React from 'react'
import AnalyticsCard from "@/entities/analytics-card/ui/AnalyticsCard";
import ExpenseDisplay from "@/entities/expense-display/ui/ExpenseDisplay";
import {handIcon} from "@/shared/icons";
import Transaction from "@/features/transactions/ui/Transaction";
import styles from './Dashboard.module.sass'
import WalletCard from "@/widgets/card-wallet/ui/WalletCard";
import CategoryChart from "@/features/category/CategoryChart";

const Dashboard = () => {
    const handleManageCards = () => {
        console.log('Manage Cards clicked');
    };

    const handleTransfer = () => {
        console.log('Transfer clicked');
    };
    return(
        <div className={styles.dashboardContainer}>
            <h1>Welcome back,Bazil<span><img src={handIcon} alt="emodji"/></span> </h1>
            <ExpenseDisplay amount={632.000} text={'Total Income'} />
            <ExpenseDisplay amount={578.000} text={'Total Outcome'} />
            <AnalyticsCard />
            <WalletCard balance={330.580} cardNumber="4400 3879 9824 0009" issueDate="09/25" onManageCards={handleManageCards} onTransfer={handleTransfer} />
            <Transaction name="Sample Transaction" date="2023-01-01" amount={100} status="Completed" />
            <CategoryChart />
        </div>
    )
}

export default Dashboard;