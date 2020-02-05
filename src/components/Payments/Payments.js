import React, { Component } from 'react';

import PaymentsTable from './PaymentsTable/PaymentsTable';

class Payments extends Component {
    render() {
        return (
            <div>
               <div className= "row">
                    <div className="col-md-12" >
                        <h2 className="ml-5">Payments</h2>
                    </div>
               </div> 
               <div className="row">
                   <div className="col-1 mb-0 pl-3 pr-0">
                       <p className="mb-0 my-auto">Showing</p>
                   </div>

                   <div className="col-1 p-0">
                   <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="text-primary">20 </span><span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a href="/">Action</a></li>
                            <li><a href="/">Another action</a></li>
                            <li><a href="/trans-monitor">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="/">Separated link</a></li>
                        </ul>
                        </div>
                   </div>

               </div>
               <div style={{width: '80%', paddingLeft: "50px"}}>
                    <PaymentsTable />
               </div>
               
            </div>
        );
    }
}

export default Payments;
