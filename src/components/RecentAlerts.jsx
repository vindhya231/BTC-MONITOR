import { AlertTriangle, Wallet, ArrowLeftRight } from "lucide-react";

const alerts = [
  {
    type: "High Risk Wallet",
    description: "Wallet bc1q...92kf detected",
    score: 94,
    icon: Wallet,
    iconColor: "text-red-400",
  },
  {
    type: "Suspicious Transaction",
    description: "Transaction #8f32...a21c flagged",
    score: 81,
    icon: ArrowLeftRight,
    iconColor: "text-orange-400",
  },
  {
    type: "Unusual Activity",
    description: "Wallet 3J98...7x2p detected",
    score: 72,
    icon: AlertTriangle,
    iconColor: "text-yellow-400",
  },
];

function RecentAlerts() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">

      <h2 className="text-xl font-semibold text-white">
        Recent Alerts
      </h2>

      <p className="text-sm text-slate-400 mt-1 mb-5">
        Latest suspicious activities
      </p>

      <div className="space-y-4">

        {alerts.map((alert, index) => {
          const Icon = alert.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-slate-900"
            >

              <div className="flex items-center gap-3">

                <Icon
                  size={22}
                  className={alert.iconColor}
                />

                <div>
                  <p className="text-white font-medium">
                    {alert.type}
                  </p>

                  <p className="text-sm text-slate-400">
                    {alert.description}
                  </p>
                </div>

              </div>

              <div className="text-right">
                <p className="text-red-400 font-bold">
                  {alert.score}
                </p>

                <p className="text-xs text-slate-500">
                  Risk
                </p>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default RecentAlerts;