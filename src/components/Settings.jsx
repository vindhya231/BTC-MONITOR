import {
  Settings as SettingsIcon,
  Shield,
  Bell,
  Database,
} from "lucide-react";

function Settings() {
  return (
    <main className="flex-1 p-8">

      {/* Page Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Settings
        </h1>

        <p className="text-slate-400 mt-2">
          Manage platform settings and monitoring preferences
        </p>

      </div>

      {/* Settings Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Security */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Shield
                size={24}
                className="text-blue-400"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">
                Security
              </h2>

              <p className="text-sm text-slate-400">
                Manage platform security
              </p>
            </div>

          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-white">
                  JWT Authentication
                </p>

                <p className="text-sm text-slate-500">
                  Secure user authentication
                </p>
              </div>

              <span className="text-green-400 text-sm">
                Enabled
              </span>

            </div>

            <div className="flex items-center justify-between">

              <div>
                <p className="text-white">
                  Role Based Access
                </p>

                <p className="text-sm text-slate-500">
                  Control user permissions
                </p>
              </div>

              <span className="text-green-400 text-sm">
                Enabled
              </span>

            </div>

          </div>

        </div>

        {/* Notifications */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="p-3 bg-yellow-500/10 rounded-lg">
              <Bell
                size={24}
                className="text-yellow-400"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">
                Notifications
              </h2>

              <p className="text-sm text-slate-400">
                Manage alert notifications
              </p>
            </div>

          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-white">
                  High Risk Alerts
                </p>

                <p className="text-sm text-slate-500">
                  Receive alerts for high risk activity
                </p>
              </div>

              <span className="text-green-400 text-sm">
                Enabled
              </span>

            </div>

            <div className="flex items-center justify-between">

              <div>
                <p className="text-white">
                  Suspicious Transactions
                </p>

                <p className="text-sm text-slate-500">
                  Notify when suspicious activity is detected
                </p>
              </div>

              <span className="text-green-400 text-sm">
                Enabled
              </span>

            </div>

          </div>

        </div>

        {/* Database */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="p-3 bg-purple-500/10 rounded-lg">
              <Database
                size={24}
                className="text-purple-400"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">
                Data & Monitoring
              </h2>

              <p className="text-sm text-slate-400">
                Manage transaction monitoring
              </p>
            </div>

          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-white">
                  Real-time Monitoring
                </p>

                <p className="text-sm text-slate-500">
                  Monitor Bitcoin transactions continuously
                </p>
              </div>

              <span className="text-green-400 text-sm">
                Active
              </span>

            </div>

            <div className="flex items-center justify-between">

              <div>
                <p className="text-white">
                  AI Risk Analysis
                </p>

                <p className="text-sm text-slate-500">
                  Analyze transactions using AI/ML
                </p>
              </div>

              <span className="text-green-400 text-sm">
                Active
              </span>

            </div>

          </div>

        </div>

        {/* Platform */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="p-3 bg-green-500/10 rounded-lg">
              <SettingsIcon
                size={24}
                className="text-green-400"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">
                Platform
              </h2>

              <p className="text-sm text-slate-400">
                Platform configuration
              </p>
            </div>

          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-white">
                  Monitoring Status
                </p>

                <p className="text-sm text-slate-500">
                  Current monitoring service
                </p>
              </div>

              <span className="text-green-400 text-sm">
                Online
              </span>

            </div>

            <div className="flex items-center justify-between">

              <div>
                <p className="text-white">
                  System Version
                </p>

                <p className="text-sm text-slate-500">
                  Current platform version
                </p>
              </div>

              <span className="text-slate-300 text-sm">
                v1.0
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Settings;