function StatCard({ title, value, description }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-white mt-2">
        {value}
      </h2>

      <p className="text-slate-500 text-sm mt-2">
        {description}
      </p>
    </div>
  );
}

export default StatCard;