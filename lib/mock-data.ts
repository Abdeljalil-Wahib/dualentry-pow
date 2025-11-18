// lib/mock-data.ts
import { Transaction } from './types';

/**
 * Generates mock transaction data for demonstration purposes.
 * Note: Some categories are intentionally left undefined for the 'AI' to categorize.
 */
export const MOCK_TRANSACTIONS: Transaction[] = [
    {
        id: 'txn_001',
        date: '2025-11-17',
        description: 'Vercel Pro Plan Annual',
        amount: 540.00,
        currency: 'USD',
        status: 'Cleared',
        category: 'Software Subscription'
    },
    {
        id: 'txn_002',
        date: '2025-11-16',
        description: 'OpenAI API Credits',
        amount: 85.35,
        currency: 'USD',
        status: 'Pending',
        category: 'AI/Cloud Services'
    },
    {
        id: 'txn_003',
        date: '2025-11-15',
        description: 'Delta Airlines Flight DXB-JFK',
        amount: 1120.00,
        currency: 'USD',
        status: 'Cleared',
        category: 'Travel'
    },
    {
        id: 'txn_004',
        date: '2025-11-15',
        description: 'Lunch at Local Cafe',
        amount: 15.50,
        currency: 'USD',
        status: 'Cleared',
        category: 'Meals & Entertainment'
    },
    {
        id: 'txn_005',
        date: '2025-11-14',
        description: 'AWS Lambda Usage',
        amount: 4.88,
        currency: 'USD',
        status: 'Pending',
        category: undefined // AI needs to categorize this
    },
    {
        id: 'txn_006',
        date: '2025-11-14',
        description: 'Figma Professional License',
        amount: 12.00,
        currency: 'USD',
        status: 'Failed',
        category: 'Software Subscription'
    },
    {
        id: 'txn_007',
        date: '2025-11-13',
        description: 'DigitalOcean Droplet Fee',
        amount: 6.00,
        currency: 'USD',
        status: 'Cleared',
        category: undefined // AI needs to categorize this
    },
    {
        id: 'txn_008',
        date: '2025-11-13',
        description: 'Online Team Dinner Reimbursement',
        amount: 80.00,
        currency: 'USD',
        status: 'Pending',
        category: 'Employee Benefits'
    },
    {
        id: 'txn_009',
        date: '2025-11-12',
        description: 'Google Ads Campaign',
        amount: 250.00,
        currency: 'USD',
        status: 'Cleared',
        category: 'Marketing'
    },
    {
        id: 'txn_010',
        date: '2025-11-12',
        description: 'Monthly UPS Shipping Fee',
        amount: 34.99,
        currency: 'USD',
        status: 'Cleared',
        category: undefined // AI needs to categorize this
    },
];