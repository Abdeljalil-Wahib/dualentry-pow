
export type Transaction = {
    id: string;
    // Standardized date format (e.g., ISO string)
    date: string;
    description: string;
    amount: number;
    currency: string;
    // Using string literals for finite statuses
    status: 'Pending' | 'Cleared' | 'Failed';
    // STRATEGIC: Optional property used to trigger the 'AI' categorization feature
    category?: string;
};