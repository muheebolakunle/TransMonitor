import React from 'react';

import Chart from './components/Chart/Chart';
import TransactionSummaries from './components/TransactionSummaries/TransactionSummaries';
import Layout from './components/Layout/Layout';
import Payments from './components/Payments/Payments';
import Sidebar from './components/Navigation/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <Layout>
          <div>
            <TransactionSummaries />
            <Chart />
            <Payments />
          </div>  
        </Layout>
    </div>
  );
}

export default App;
