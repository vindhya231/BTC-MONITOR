import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", transactions: 3200, risk: 42 },
  { day: "Tue", transactions: 4100, risk: 55 },
  { day: "Wed", transactions: 3800, risk: 48 },
  { day: "Thu", transactions: 5200, risk: 68 },
  { day: "Fri", transactions: 4700, risk: 61 },
  { day: "Sat", transactions: 6100, risk: 76 },
  { day: "Sun", transactions: 5800, risk: 71 },
];

function RiskChart() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
      
      <h2 className="text-xl font-semibold text-white">
        Transaction Volume & Risk Trend
      </h2>

      <p className="text-sm text-slate-400 mt-1 mb-5">
        Transaction activity and average risk score
      </p>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="day"
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="transactions"
              stroke="#38bdf8"
              strokeWidth={3}
              name="Transactions"
            />

            <Line
              type="monotone"
              dataKey="risk"
              stroke="#f87171"
              strokeWidth={3}
              name="Risk Score"
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default RiskChart;