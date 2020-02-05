import React from 'react';

import styles from './TransactionSummary.module.css';

const transactionSummary = (props) => {
    return (
        <div className={styles.TransactionSummary}>
            <div className='textpart'>
                <p>Daily Transaction Volume</p>
                <h3>2420</h3>
            </div>

            <div className={styles.SummaryChart}>

            </div>
            
        </div>
    )
}

export default transactionSummary;