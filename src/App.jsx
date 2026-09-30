import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import RiskChart from "./components/RiskChart";
import RiskDistribution from "./components/RiskDistribution";
import RecentAlerts from "./components/RecentAlerts";
import RecentTransactions from "./components/RecentTransactions";

import Transactions from "./components/Transactions";
import WalletAnalysis from "./components/WalletAnalysis";
import NetworkGraph from "./components/NetworkGraph";
import Alerts from "./components/Alerts";
import Reports from "./components/Reports";
import Settings from "./components/Settings";


function Dashboard() {

  return (
    <main className="flex-1 p-8">

      <h1 className="text-3xl font-bold text-white">
        Dashboard
      </h1>

      <p className="text-slate-400 mt-2 mb-8">
        AI-Powered Bitcoin Transaction Analysis
      </p>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Total Transactions"
          value="248,731"
          description="Transactions monitored"
        />

        <StatCard
          title="Unique Wallets"
          value="42,386"
          description="Wallets analyzed"
        />

        <StatCard
          title="Suspicious Transactions"
          value="1,842"
          description="Require investigation"
        />

        <StatCard
          title="High Risk Wallets"
          value="317"
          description="Currently monitored"
        />

      </div>


      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

        <div className="xl:col-span-2">
          <RiskChart />
        </div>

        <RiskDistribution />

      </div>


      {/* Alerts */}

      <div className="mt-6">
        <RecentAlerts />
      </div>


      {/* Transactions */}

      <RecentTransactions />

    </main>
  );
}


function App() {

  return (
    <BrowserRouter>

      <div className="min-h-screen bg-slate-900 flex">

        <Sidebar />

        <Routes>

          {/* Dashboard */}

          <Route
            path="/"
            element={<Dashboard />}
          />


          {/* Transactions */}

          <Route
            path="/transactions"
            element={<Transactions />}
          />


          {/* Wallet Analysis */}

          <Route
            path="/wallet-analysis"
            element={<WalletAnalysis />}
          />


          {/* Network Graph */}

          <Route
            path="/network-graph"
            element={<NetworkGraph />}
          />


          {/* Alerts */}

          <Route
            path="/alerts"
            element={<Alerts />}
          />


          {/* Reports */}

          <Route
            path="/reports"
            element={<Reports />}
          />


          {/* Settings */}

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;