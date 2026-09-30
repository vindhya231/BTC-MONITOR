import { Search, Filter } from "lucide-react";

function Transactions() {

  const transactions = [
    {
      id: "8f32...a21c",
      from: "bc1q...92kf",
      to: "3J98...7x2p",
      amount: "2.41 BTC",
      risk: 87,
      status: "Suspicious",
    },
    {
      id: "71ac...42de",
      from: "1A2b...8kLm",
      to: "bc1x...91pq",
      amount: "0.82 BTC",
      risk: 24,
      status: "Normal",
    },
    {
      id: "92de...71af",
      from: "3F9k...22ab",
      to: "1Qaz...72lm",
      amount: "5.10 BTC",
      risk: 76,
      status: "Suspicious",
    },
    {
      id: "45bc...18ef",
      from: "bc1p...44kd",
      to: "3Lmn...82qp",
      amount: "1.36 BTC",
      risk: 42,
      status: "Normal",
    },
    {
      id: "63ef...91ab",
      from: "1Klm...82cd",
      to: "bc1z...31pq",
      amount: "8.27 BTC",
      risk: 93,
      status: "Suspicious",
    },
  ];

  return (
    <main className="flex-1 p-8">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Transactions
        </h1>

        <p className="text-slate-400 mt-2">
          Monitor and investigate Bitcoin transactions
        </p>

      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <div className="relative flex-1">

          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search transaction or wallet..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white outline-none focus:border-blue-500"
          />

        </div>

        <button className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-700">

          <Filter size={18} />

          Filter

        </button>

      </div>

      {/* Transaction Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">

        <div className="p-5 border-b border-slate-700">

          <h2 className="text-xl font-semibold text-white">
            Bitcoin Transactions
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Recently monitored transactions
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>

              <tr className="border-b border-slate-700 text-slate-400 text-sm">

                <th className="py-4 px-5">
                  Transaction
                </th>

                <th className="py-4 px-5">
                  From
                </th>

                <th className="py-4 px-5">
                  To
                </th>

                <th className="py-4 px-5">
                  Amount
                </th>

                <th className="py-4 px-5">
                  Risk Score
                </th>

                <th className="py-4 px-5">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {transactions.map((tx) => (

                <tr
                  key={tx.id}
                  className="border-b border-slate-700 hover:bg-slate-700/40"
                >

                  <td className="py-4 px-5 text-blue-400 font-medium">
                    {tx.id}
                  </td>

                  <td className="py-4 px-5 text-slate-300">
                    {tx.from}
                  </td>

                  <td className="py-4 px-5 text-slate-300">
                    {tx.to}
                  </td>

                  <td className="py-4 px-5 text-white">
                    {tx.amount}
                  </td>

                  <td className="py-4 px-5">

                    <span
                      className={
                        tx.risk >= 70
                          ? "text-red-400 font-bold"
                          : tx.risk >= 40
                          ? "text-yellow-400 font-bold"
                          : "text-green-400 font-bold"
                      }
                    >
                      {tx.risk}/100
                    </span>

                  </td>

                  <td className="py-4 px-5">

                    <span
                      className={
                        tx.status === "Suspicious"
                          ? "px-3 py-1 rounded-full text-xs bg-red-500/20 text-red-400"
                          : "px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400"
                      }
                    >
                      {tx.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}

export default Transactions;