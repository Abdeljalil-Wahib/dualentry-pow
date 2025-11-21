import { TransactionTable } from "../components/TransactionTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8 md:p-24 flex flex-col items-center">
      <div className="w-full max-w-5xl mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Financial Overview
          </h1>
          <p className="text-muted mt-2">
            Manage your company's real-time cash flow.
          </p>
        </div>
        <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
          <img
            src="/dualentry-logo.png"
            alt="DualEntry Logo"
            className="h-8 w-8 object-contain"
          />
        </div>
      </div>

      <TransactionTable />

      <div className="mt-12 text-center text-sm text-muted">
        <p>DualEntry Proof of Work • Built with Next.js & Tailwind</p>
      </div>
    </main>
  );
}
