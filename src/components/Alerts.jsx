import {
  AlertTriangle,
  Wallet,
  ArrowLeftRight,
  Search,
} from "lucide-react";

function Alerts() {

  const alerts = [
    {
      id: "ALT-001",
      type: "High Risk Wallet",
      description: "Wallet shows unusual transaction behavior",
      wallet: "bc1q...92kf",
      score: 94,
      severity: "Critical",
      icon: Wallet,
    },
    {
      id: "ALT-002",
      type: "Suspicious Transaction",
      description: "Large transaction detected between connected wallets",
      wallet: "3J98...7x2p",
      score: 87,
      severity: "High",
      icon: ArrowLeftRight,
    },
    {
      id: "ALT-003",
      type: "Unusual Activity",
      description: "Transaction pattern differs from normal behavior",
      wallet: "1A2b...8kLm",
      score: 72,
      severity: "Medium",
      icon: AlertTriangle,
    },
    {
      id: "ALT-004",
      type: "High Risk Wallet",
      description: "Wallet connected to multiple suspicious addresses",
      wallet: "3F9k...22ab",
      score: 91,
      severity: "Critical",
      icon: Wallet,
    },
  ];

  return (
    <main className="flex-1 p-8">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Alerts
        </h1>

        <p className="text-slate-400 mt-2">
          Review suspicious Bitcoin activity detected by the platform
        </p>

      </div>


      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">

          <p className="text-slate-400 text-sm">
            Total Alerts
          </p>

          <p className="text-3xl font-bold text-white mt-2">
            1,842
          </p>

        </div>


        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">

          <p className="text-slate-400 text-sm">
            Critical Alerts
          </p>

          <p className="text-3xl font-bold text-red-400 mt-2">
            317
          </p>

        </div>


        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">

          <p className="text-slate-400 text-sm">
            Under Investigation
          </p>

          <p className="text-3xl font-bold text-yellow-400 mt-2">
            84
          </p>

        </div>

      </div>


      {/* Search */}
      <div className="flex gap-3 mb-6">

        <div className="relative flex-1">

          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search alerts or wallet..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white outline-none focus:border-blue-500"
          />

        </div>

      </div>


      {/* Alerts */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">

        <div className="p-5 border-b border-slate-700">

          <h2 className="text-xl font-semibold text-white">
            Recent Alerts
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Latest suspicious activities
          </p>

        </div>


        <div className="divide-y divide-slate-700">

          {alerts.map((alert) => {

            const Icon = alert.icon;

            return (

              <div
                key={alert.id}
                className="p-5 hover:bg-slate-700/30"
              >

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

                  {/* Alert Information */}
                  <div className="flex items-center gap-4">

                    <div className="p-3 rounded-lg bg-red-500/10">

                      <Icon
                        size={24}
                        className="text-red-400"
                      />

                    </div>

                    <div>

                      <div className="flex items-center gap-3">

                        <h3 className="text-white font-semibold">
                          {alert.type}
                        </h3>

                        <span
                          className={
                            alert.severity === "Critical"
                              ? "px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-400"
                              : alert.severity === "High"
                              ? "px-2 py-1 rounded-full text-xs bg-orange-500/20 text-orange-400"
                              : "px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400"
                          }
                        >
                          {alert.severity}
                        </span>

                      </div>

                      <p className="text-sm text-slate-400 mt-1">
                        {alert.description}
                      </p>

                      <p className="text-xs text-slate-500 mt-2">
                        Wallet: {alert.wallet}
                      </p>

                    </div>

                  </div>


                  {/* Risk Score */}
                  <div className="text-right">

                    <p className="text-xs text-slate-500">
                      Risk Score
                    </p>

                    <p className="text-2xl font-bold text-red-400">
                      {alert.score}
                    </p>

                    <p className="text-xs text-slate-500">
                      Alert ID: {alert.id}
                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </main>
  );
}

export default Alerts;