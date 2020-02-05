import React from 'react';

import styles from './Sidebar.module.css';

const sidebar = (props) => {
    return (
        <div className={styles.Sidebar}>
            <button>Generate invoice</button>
            <div>
                <p>Main</p>
                <ul class="navbar">
                    <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="/">Overview</a></li>
  
                </ul>
            </div>

            <div>
                <p>Payments</p>
                <ul>
                    <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="/">All Payments</a></li>
                    <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="/">Reconciled Payments</a></li>
                    <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="/">Un - Reconciled Payments</a></li>
                    <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="/">Manual Settlement </a></li>
                    
                </ul>
            </div>

            <div>
                <p>Orders</p>
                <ul>
                    <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="/">All Orders</a></li>
                    <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="/">Pending Orders</a></li>
                    <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="/">Reconciled Orders</a></li>
                   
                </ul>
            </div>

            <ul>
                    <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="/">Merchant Profile</a></li> 
            </ul>

        </div>
    );
}

export default sidebar;