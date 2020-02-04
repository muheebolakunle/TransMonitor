import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

const navigationItems = () => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link='/'>Support</NavigationItem>
            <NavigationItem link='/'>FAQ</NavigationItem>
            <NavigationItem link='/'><i className="fa fa-bell"></i></NavigationItem>
        </ul>
    )
}

export default navigationItems;