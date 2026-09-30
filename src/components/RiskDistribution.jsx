import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Low Risk",
    value: 55,
  },
  {
    name: "Medium Risk",
    value: 30,
  },
  {
    name: "High Risk",
    value: 15,
  },
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

function RiskDistribution() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">

      <h2 className="text-xl font-semibold text-white">
        Risk Distribution
      </h2>

      <p className="text-sm text-slate-400 mt-1">
        Distribution of analyzed transactions
      </p>

      <div className="h-80 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default RiskDistribution;