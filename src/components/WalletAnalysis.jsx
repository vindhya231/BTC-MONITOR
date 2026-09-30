import { Search, Wallet, AlertTriangle, Activity } from "lucide-react";

function WalletAnalysis() {

  const wallet = {
    address: "bc1qexample92kf7x2p",
    riskScore: 87,
    transactions: 1248,
    suspicious: 37,
    balance: "12.48 BTC",
  };

  return (
    <main className="flex-1 p-8">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Wallet Analysis
        </h1>

        <p className="text-slate-400 mt-2">
          Analyze Bitcoin wallet behavior and risk
        </p>

      </div>


      {/* Search Wallet */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-6">

        <h2 className="text-xl font-semibold text-white mb-4">
          Search Wallet
        </h2>

        <div className="flex gap-3">

          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Enter Bitcoin wallet address..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white outline-none focus:border-blue-500"
            />

          </div>

          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
            Analyze
          </button>

        </div>

      </div>


      {/* Wallet Information */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">

        <div className="flex items-center gap-3 mb-6">

          <div className="p-3 bg-blue-500/10 rounded-lg">
            <Wallet className="text-blue-400" size={26} />
          </div>

          <div>

            <h2 className="text-xl font-semibold text-white">
              Wallet Information
            </h2>

            <p className="text-sm text-slate-400">
              {wallet.address}
            </p>

          </div>

        </div>


        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          {/* Risk Score */}
          <div className="bg-slate-900 rounded-lg p-5">

            <p className="text-slate-400 text-sm">
              Risk Score
            </p>

            <p className="text-3xl font-bold text-red-400 mt-2">
              {wallet.riskScore}/100
            </p>

            <p className="text-sm text-red-400 mt-1">
              High Risk
            </p>

          </div>


          {/* Transactions */}
          <div className="bg-slate-900 rounded-lg p-5">

            <p className="text-slate-400 text-sm">
              Total Transactions
            </p>

            <p className="text-3xl font-bold text-white mt-2">
              {wallet.transactions}
            </p>

            <p className="text-sm text-slate-500 mt-1">
              Transactions analyzed
            </p>

          </div>


          {/* Suspicious */}
          <div className="bg-slate-900 rounded-lg p-5">

            <p className="text-slate-400 text-sm">
              Suspicious Activity
            </p>

            <p className="text-3xl font-bold text-orange-400 mt-2">
              {wallet.suspicious}
            </p>

            <p className="text-sm text-slate-500 mt-1">
              Transactions flagged
            </p>

          </div>


          {/* Balance */}
          <div className="bg-slate-900 rounded-lg p-5">

            <p className="text-slate-400 text-sm">
              Current Balance
            </p>

            <p className="text-3xl font-bold text-white mt-2">
              {wallet.balance}
            </p>

            <p className="text-sm text-slate-500 mt-1">
              Estimated balance
            </p>

          </div>

        </div>

      </div>


      {/* Analysis */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">


        {/* Risk Assessment */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

          <div className="flex items-center gap-3">

            <AlertTriangle
              className="text-red-400"
              size={24}
            />

            <h2 className="text-xl font-semibold text-white">
              Risk Assessment
            </h2>

          </div>

          <p className="text-slate-400 mt-4">
            AI analysis indicates potentially suspicious
            activity associated with this wallet.
          </p>

          <div className="mt-6">

            <div className="flex justify-between text-sm mb-2">

              <span className="text-slate-400">
                Risk Level
              </span>

              <span className="text-red-400 font-semibold">
                87%
              </span>

            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">

              <div
                className="bg-red-500 h-3 rounded-full"
                style={{ width: "87%" }}
              ></div>

            </div>

          </div>

        </div>


        {/* Activity */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

          <div className="flex items-center gap-3">

            <Activity
              className="text-blue-400"
              size={24}
            />

            <h2 className="text-xl font-semibold text-white">
              Wallet Activity
            </h2>

          </div>

          <div className="mt-5 space-y-4">

            <div className="flex justify-between">

              <span className="text-slate-400">
                Incoming Transactions
              </span>

              <span className="text-white font-medium">
                742
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-400">
                Outgoing Transactions
              </span>

              <span className="text-white font-medium">
                506
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-400">
                Suspicious Transactions
              </span>

              <span className="text-red-400 font-medium">
                37
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default WalletAnalysis;