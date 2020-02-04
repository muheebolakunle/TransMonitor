import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Aux';

const layout = (props) => {
    return (
        <Aux>
            <div>
                <Toolbar />
            </div>

            <main>
                {props.children}
            </main>  
        </Aux>
    );
}

export default layout;