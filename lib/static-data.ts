// lib\static-data.ts

export type TransactionType = 'income' | 'expense';

export interface FinancialTransaction {
    id: string;
    date: string; // YYYY-MM-DD format for easy sorting and display
    description: string;
    amount: number;
    type: TransactionType;
    category: string;
}

export const staticTransactions: FinancialTransaction[] = [
    {
        id: '1',
        date: '2025-05-20',
        description: 'Monthly Senior Citizen Pension',
        amount: 30000.00,
        type: 'income',
        category: 'Pension',
    },
    {
        id: '2',
        date: '2025-05-21',
        description: 'Office Supplies Purchase',
        amount: 2500.50,
        type: 'expense',
        category: 'Office Supplies',
    },
    {
        id: '3',
        date: '2025-05-21',
        description: 'Benefit Distribution - April',
        amount: 150000.00,
        type: 'expense',
        category: 'Benefits',
    },
    {
        id: '4',
        date: '2025-05-22',
        description: 'Donation from LGU',
        amount: 50000.00,
        type: 'income',
        category: 'Donation',
    },
    {
        id: '5',
        date: '2025-05-22',
        description: 'Transportation for Outreach Program',
        amount: 1200.00,
        type: 'expense',
        category: 'Transportation',
    },
    {
        id: '6',
        date: '2025-05-18',
        description: 'Utility Bill - Electricity',
        amount: 3500.00,
        type: 'expense',
        category: 'Utilities',
    },
    {
        id: '7',
        date: '2025-05-15',
        description: 'Training Workshop Grant',
        amount: 10000.00,
        type: 'income',
        category: 'Grants',
    },
    {
        id: '8',
        date: '2025-05-10',
        description: 'Maintenance of Office Equipment',
        amount: 800.00,
        type: 'expense',
        category: 'Maintenance',
    },
];

// Helper function to calculate current balance from static data
export const calculateBalance = (transactions: FinancialTransaction[]): number => {
    let balance = 0;
    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            balance += transaction.amount;
        } else {
            balance -= transaction.amount;
        }
    });
    return balance;
};

// Helper function to calculate total income
export const calculateTotalIncome = (transactions: FinancialTransaction[]): number => {
    return transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
};

// Helper function to calculate total expenses
export const calculateTotalExpenses = (transactions: FinancialTransaction[]): number => {
    return transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
};