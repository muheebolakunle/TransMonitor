import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar'
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';

const layout = (props) => {
    return (
        <Aux>
            <div>
                <Toolbar />
            </div>
            <div className={styles.MainBody}>
                <Sidebar />
                <main className={styles.Content}>
                    {props.children}
                </main>

            </div>

        </Aux>
    );
}

export default layout;