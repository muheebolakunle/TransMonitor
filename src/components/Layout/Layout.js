import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar'
import Aux from '../../hoc/Aux';

const layout = (props) => {
    return (
        <Aux>
            <div>
                <Toolbar />
                <Sidebar />
            </div>

            <main>
                {props.children}
            </main>  
        </Aux>
    );
}

export default layout;