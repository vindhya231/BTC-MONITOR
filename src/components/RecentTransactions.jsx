function RecentTransactions() {
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
  ];

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 mt-6">

      <h2 className="text-xl font-semibold text-white">
        Recent Transactions
      </h2>

      <p className="text-sm text-slate-400 mt-1 mb-5">
        Latest monitored Bitcoin transactions
      </p>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-slate-700 text-slate-400 text-sm">
              <th className="py-3 px-3">Transaction</th>
              <th className="py-3 px-3">From</th>
              <th className="py-3 px-3">To</th>
              <th className="py-3 px-3">Amount</th>
              <th className="py-3 px-3">Risk</th>
              <th className="py-3 px-3">Status</th>
            </tr>
          </thead>

          <tbody>

            {transactions.map((tx) => (

              <tr
                key={tx.id}
                className="border-b border-slate-700 hover:bg-slate-700/40"
              >

                <td className="py-4 px-3 text-blue-400 font-medium">
                  {tx.id}
                </td>

                <td className="py-4 px-3 text-slate-300">
                  {tx.from}
                </td>

                <td className="py-4 px-3 text-slate-300">
                  {tx.to}
                </td>

                <td className="py-4 px-3 text-white font-medium">
                  {tx.amount}
                </td>

                <td className="py-4 px-3">

                  <span
                    className={
                      tx.risk >= 70
                        ? "text-red-400 font-bold"
                        : "text-green-400 font-bold"
                    }
                  >
                    {tx.risk}
                  </span>

                </td>

                <td className="py-4 px-3">

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
  );
}

export default RecentTransactions;