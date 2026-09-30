import {
  FileText,
  Download,
  ShieldAlert,
  Wallet,
  Activity,
} from "lucide-react";

function Reports() {
  return (
    <main className="flex-1 p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Reports
          </h1>

          <p className="text-slate-400 mt-2">
            Generate and review Bitcoin transaction analysis reports
          </p>
        </div>

        <button className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          <Download size={18} />
          Generate Report
        </button>

      </div>


      {/* Report Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">

          <div className="flex items-center gap-3">

            <FileText className="text-blue-400" size={24} />

            <p className="text-slate-400">
              Reports Generated
            </p>

          </div>

          <p className="text-3xl font-bold text-white mt-3">
            128
          </p>

        </div>


        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">

          <div className="flex items-center gap-3">

            <ShieldAlert className="text-red-400" size={24} />

            <p className="text-slate-400">
              Suspicious Cases
            </p>

          </div>

          <p className="text-3xl font-bold text-red-400 mt-3">
            37
          </p>

        </div>


        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">

          <div className="flex items-center gap-3">

            <Wallet className="text-green-400" size={24} />

            <p className="text-slate-400">
              Wallets Analyzed
            </p>

          </div>

          <p className="text-3xl font-bold text-white mt-3">
            4,286
          </p>

        </div>

      </div>


      {/* Current Analysis */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">

        <div className="flex items-center gap-3 mb-5">

          <Activity
            size={24}
            className="text-blue-400"
          />

          <div>
            <h2 className="text-xl font-semibold text-white">
              Current Analysis Summary
            </h2>

            <p className="text-sm text-slate-400">
              AI-powered transaction monitoring results
            </p>
          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <p className="text-slate-400 text-sm">
              Transactions Analyzed
            </p>

            <p className="text-2xl font-bold text-white mt-1">
              248,731
            </p>

          </div>


          <div>

            <p className="text-slate-400 text-sm">
              Suspicious Transactions
            </p>

            <p className="text-2xl font-bold text-red-400 mt-1">
              1,842
            </p>

          </div>


          <div>

            <p className="text-slate-400 text-sm">
              Average Risk Score
            </p>

            <p className="text-2xl font-bold text-yellow-400 mt-1">
              46/100
            </p>

          </div>


          <div>

            <p className="text-slate-400 text-sm">
              High Risk Wallets
            </p>

            <p className="text-2xl font-bold text-red-400 mt-1">
              317
            </p>

          </div>

        </div>

      </div>


      {/* Recent Reports */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">

        <div className="p-5 border-b border-slate-700">

          <h2 className="text-xl font-semibold text-white">
            Recent Reports
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Previously generated investigation reports
          </p>

        </div>


        <div className="divide-y divide-slate-700">

          {[
            {
              name: "Wallet Risk Analysis",
              date: "22 Sep 2026",
              type: "Wallet",
            },
            {
              name: "Suspicious Transaction Report",
              date: "21 Sep 2026",
              type: "Transaction",
            },
            {
              name: "Network Investigation Report",
              date: "20 Sep 2026",
              type: "Network",
            },
          ].map((report) => (

            <div
              key={report.name}
              className="flex items-center justify-between p-5 hover:bg-slate-700/30"
            >

              <div className="flex items-center gap-4">

                <div className="p-3 bg-blue-500/10 rounded-lg">

                  <FileText
                    size={22}
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <p className="text-white font-medium">
                    {report.name}
                  </p>

                  <p className="text-sm text-slate-500">
                    {report.type} • {report.date}
                  </p>

                </div>

              </div>


              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300">

                <Download size={18} />

                Download

              </button>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}

export default Reports;