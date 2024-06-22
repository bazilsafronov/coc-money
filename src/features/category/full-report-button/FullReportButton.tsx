import React from "react";
import {arrowIcon} from "@/shared/icons";
import styles from './FullReportButton.module.sass'
type FullReportButtonProps = {
    text?: string;
    image: string;
    onClick?: () => void;
}

const FullReportButton: React.FC<FullReportButtonProps> = ( {text = 'View Full Report', image, onClick }) => {
    const handleClick = () => {
        console.log('Click')
    }
    return(
        <div className={styles.fullReportContainer}>
            <button className={styles.fullReportBtn} onClick={handleClick}>
                {text}
                <img src={arrowIcon} alt="arrowIcon"/>
            </button>
        </div>
    )
}

export default FullReportButton;