"use client"; // Client Component because it uses useState and interactivity

import React, { useState } from "react";
import { Transaction } from "@/lib/types";
import { MOCK_TRANSACTIONS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

// Helper to format money nicely (e.g., $1,200.00)
const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

export function TransactionTable() {
  // 1. Initialize state with mock data
  const [transactions, setTransactions] =
    useState<Transaction[]>(MOCK_TRANSACTIONS);
  const [isCategorizing, setIsCategorizing] = useState(false);

  // 2. Check if we have any work for the "AI" to do
  const hasUncategorized = transactions.some((t) => !t.category);

  // 3. The "AI" Logic
  const handleCategorize = async () => {
    setIsCategorizing(true);

    // Simulate a network request delay (1.5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // "AI" logic: map over transactions and fill in missing categories
    const updatedTransactions = transactions.map((t) => {
      if (t.category) return t; // If already categorized, leave it alone

      // Mock AI decision making based on description keywords
      let newCategory = "General Expense";
      const desc = t.description.toLowerCase();

      if (desc.includes("aws") || desc.includes("droplet"))
        newCategory = "Infrastructure";
      if (desc.includes("ups") || desc.includes("shipping"))
        newCategory = "Shipping & Delivery";
      if (desc.includes("dinner") || desc.includes("cafe"))
        newCategory = "Meals & Entertainment";

      return { ...t, category: newCategory };
    });

    setTransactions(updatedTransactions);
    setIsCategorizing(false);
  };

  return (
    <Card className="w-full max-w-5xl mx-auto">
      <CardHeader>
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            Review and categorize your latest financial activity.
          </CardDescription>
        </div>

        {/* 4. Conditional Button: Only shows if there is work to do */}
        {hasUncategorized && (
          <Button
            onClick={handleCategorize}
            isLoading={isCategorizing}
            className="ml-auto"
          >
            ✨ AI-Auto Categorize
          </Button>
        )}
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-500 whitespace-nowrap font-mono text-xs">
                    {txn.date}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {txn.description}
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      variant={
                        txn.status === "Cleared"
                          ? "success"
                          : txn.status === "Pending"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {txn.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    {txn.category ? (
                      <Badge variant="default">{txn.category}</Badge>
                    ) : (
                      <span className="text-gray-400 italic text-xs">
                        Uncategorized
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-gray-700">
                    {formatCurrency(txn.amount, txn.currency)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
