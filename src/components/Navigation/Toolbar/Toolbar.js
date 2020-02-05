import React, { Component } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Search from './Search/Search';
import styles from './Toolbar.module.css';

class Toolbar extends Component {
   
    render() {
        return (
            <header className={styles.Toolbar}>
                <h1>TransMonitor</h1>
                <Search />
                <NavigationItems />
            </header>
        );
    }
}


export default Toolbar;