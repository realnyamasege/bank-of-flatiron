import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions }) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions &&
          transactions.map((trans) => (
            <Transaction
              date={trans.date}
              description={trans.description}
              category={trans.category}
              amount={trans.amount}
              key={trans.id}
            />
          ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
