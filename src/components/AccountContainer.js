import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    fetch("https://bank-of-flatiron-5x10.onrender.com/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);
  console.log(transactions);
  const handleNewTransactions = (formData) => {
    setTransactions((data) => [...data, formData]);
  };
  const transactionList = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div>
      <Search searchValue={searchInput} searchValueChange={setSearchInput} />
      <AddTransactionForm onAddTransaction={handleNewTransactions} />
      <TransactionsList transactions={transactionList} />
    </div>
  );
}

export default AccountContainer;
