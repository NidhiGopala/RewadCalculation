import React, { useState, useEffect } from "react";
import fetch from './api/dataService';
import Table from './components/Table';
import "./App.css";

function calculateResults(incomingData) {
  // Calculate points per transaction

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const pointsPerTransaction = incomingData.map(transaction => {
    let points = 0;
    let over100 = transaction.amt - 100;

    if (over100 > 0) {
      // A customer receives 2 points for every dollar spent over $100 in each transaction      
      points += (over100 * 2);
    }
    if (transaction.amt > 50) {
      // plus 1 point for every dollar spent over $50 in each transaction
      points += transaction.amt - 50;
    }
    const month = new Date(transaction.transactionDt).getMonth();
    return { ...transaction, points, month };
  });

  let byCustomer = {};
  let totalPointsByCustomer = {};
  pointsPerTransaction.forEach(pointsPerTransaction => {
    let { custid, name, month, points } = pointsPerTransaction;
    if (!byCustomer[custid]) {
      byCustomer[custid] = [];
    }
    if (!totalPointsByCustomer[custid]) {
      totalPointsByCustomer[custid] = { points: 0, name: name };
    }
    console.log(points);
    totalPointsByCustomer[custid].points += points;
    console.log(totalPointsByCustomer[custid]);
    if (byCustomer[custid][month]) {
      byCustomer[custid][month].points += points;
      byCustomer[custid][month].monthNumber = month;
      byCustomer[custid][month].numTransactions++;
    }
    else {
      byCustomer[custid][month] = {
        custid,
        name,
        monthNumber: month,
        month: months[month],
        numTransactions: 1,
        points
      }
    }
  });
  let tot = [];
  for (var custKey in byCustomer) {
    byCustomer[custKey].forEach(cRow => {
      tot.push(cRow);
    });
  }
  console.log("total : " + Object.values(totalPointsByCustomer), Object.keys(totalPointsByCustomer));
  let totByCustomer = [];
  for (custKey in totalPointsByCustomer) {
    totByCustomer.push({
      name: totalPointsByCustomer[custKey]["name"],
      points: totalPointsByCustomer[custKey]["points"]
    });
  }
  return {
    summaryByCustomer: tot,
    totalPointsByCustomer: totByCustomer
  };
}

function App() {
  const [transactionData, setTransactionData] = useState(null);

  const columns1 = [
    {
      Header: 'Customer',
      accessor: 'name'
    },
    {
      Header: 'Month',
      accessor: 'month'
    },
    {
      Header: "# of Transactions",
      accessor: 'numTransactions'
    },
    {
      Header: 'Reward Points',
      accessor: 'points'
    }
  ];
  const columns2 = [
    {
      Header: 'Customer',
      accessor: 'name'
    },
    {
      Header: 'Total Reward Points',
      accessor: 'points'
    }
  ]

  useEffect(() => {
    fetch().then((data) => {
      const results = calculateResults(data);
      setTransactionData(results);
    });
  }, []);

  return transactionData == null ?
    <div>Loading...</div>
    :
    <div style={{ margin: "auto" }}>
      <div><h2 style={{ textAlign: "center" }}>Customer Reward point Calculation</h2></div>
      <Table columns={columns1} rows={transactionData?.summaryByCustomer} header="Calculation by Month" />
      <Table columns={columns2} rows={transactionData?.totalPointsByCustomer} header="Total Calculation" />
    </div>
    ;
}

export default App;
