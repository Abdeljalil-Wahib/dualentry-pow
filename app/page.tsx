import { TransactionTable } from '../components/TransactionTable';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/50 p-8 md:p-24 flex flex-col items-center">
      <div className="w-full max-w-5xl mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Financial Overview</h1>
          <p className="text-gray-500 mt-2">Manage your company's real-time cash flow.</p>
        </div>
        {/* Optional: You could add a user avatar or company logo here */}
        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            DE
        </div>
      </div>

      <TransactionTable />
      
      <div className="mt-12 text-center text-sm text-gray-400">
        <p>DualEntry Proof of Work • Built with Next.js & Tailwind</p>
      </div>
    </main>
  );
}