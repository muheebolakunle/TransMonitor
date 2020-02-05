import React, {Component} from 'react';

import TransactionSummary from './TransactionSummary/TransactionSummary';
import styles from './TransactionSummaries.module.css';

class TransactionSummaries extends Component {
    state={
        dailyTransactionVolume: 2342,
        dailyTransactionValue: 4000000,
        totalTransactionVolume: 452000,
        totalTransactionValue: 4000000
    }

    render(){
        return(
            <div className={styles.TransactionSummaries}>
              
                    <TransactionSummary />
                    <TransactionSummary />
                    <TransactionSummary />
                    <TransactionSummary />
                
                
            </div>
        )
    }
}

export default TransactionSummaries;