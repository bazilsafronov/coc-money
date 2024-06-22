import React from 'react';
import styles from './WalletCard.module.sass';
import {masterIcon} from "@/shared/icons";

interface WalletCardProps {
    balance: number;
    cardNumber: string;
    issueDate: string;
    onManageCards: () => void;
    onTransfer: () => void;
}

const WalletCard: React.FC<WalletCardProps> = ({ balance, cardNumber, issueDate, onManageCards, onTransfer }) => {
    return (
        <div className={styles.cardContainer}>
            <h2>My Card</h2>
            <h3>Total Card Balance</h3>
            <h3>${balance.toFixed(3)}</h3>
            <div className={styles.cardInfo}>
                <h4 className={styles.balance}>Current Balance: ${balance.toFixed(3)}</h4>
                <img src={masterIcon} alt="mastercard"/>
                <p className={styles.cardNumber}>{cardNumber}</p>
                <p className={styles.issueDate}>{issueDate}</p>
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.manageButton} onClick={onManageCards}>Manage Cards</button>
                <button className={styles.transferButton} onClick={onTransfer}>Transfer</button>
            </div>
        </div>
    );
};

export default WalletCard;