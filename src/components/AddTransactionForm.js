import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  // State for form fields
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const newTransaction = {
      date,
      description,
      category,
      amount: parseFloat(amount), // Convert to number
    };

    try {
      // POST data to the backend API
      const response = await fetch("  http://localhost:8001/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction), // Convert data to JSON
      });

      if (response.ok) {
        const data = await response.json(); // Get the response data

        // Call the callback to update the transactions table

        onAddTransaction(data);

        // Reset form fields
        setDate("");
        setDescription("");
        setCategory("");
        setAmount("");
      } else {
        console.error("Failed to submit the form:", response.statusText);
      }
    } catch (error) {
      console.error("Error while submitting the form:", error);
    }
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
