import { Network, Search } from "lucide-react";

function NetworkGraph() {
  return (
    <main className="flex-1 p-8">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Network Graph
        </h1>

        <p className="text-slate-400 mt-2">
          Visualize relationships between Bitcoin wallets
        </p>

      </div>


      {/* Search */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-6">

        <div className="flex flex-col md:flex-row gap-3">

          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Enter wallet address..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white outline-none focus:border-blue-500"
            />

          </div>

          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
            Analyze Network
          </button>

        </div>

      </div>


      {/* Graph Area */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

        <div className="flex items-center justify-between mb-6">

          <div className="flex items-center gap-3">

            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Network
                size={25}
                className="text-blue-400"
              />
            </div>

            <div>

              <h2 className="text-xl font-semibold text-white">
                Wallet Relationship Graph
              </h2>

              <p className="text-sm text-slate-400">
                Connected wallets and transaction relationships
              </p>

            </div>

          </div>

        </div>


        {/* Graph Visualization */}
        <div className="relative h-[500px] bg-slate-950 rounded-xl overflow-hidden">

          {/* Connection Lines */}

          <div className="absolute w-40 h-px bg-blue-500/40 left-[28%] top-[48%] rotate-[-20deg]"></div>

          <div className="absolute w-40 h-px bg-red-500/40 left-[48%] top-[48%] rotate-[25deg]"></div>

          <div className="absolute w-32 h-px bg-blue-500/40 left-[48%] top-[52%] rotate-[-35deg]"></div>


          {/* Central Wallet */}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <div className="w-24 h-24 rounded-full bg-red-500/20 border-2 border-red-400 flex items-center justify-center">

              <div className="text-center">

                <p className="text-red-400 font-bold">
                  87
                </p>

                <p className="text-xs text-slate-400">
                  Risk
                </p>

              </div>

            </div>

          </div>


          {/* Wallet 1 */}

          <div className="absolute left-[20%] top-[30%]">

            <div className="w-20 h-20 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center">

              <span className="text-blue-400 text-xs">
                Wallet A
              </span>

            </div>

          </div>


          {/* Wallet 2 */}

          <div className="absolute right-[20%] top-[30%]">

            <div className="w-20 h-20 rounded-full bg-orange-500/20 border-2 border-orange-400 flex items-center justify-center">

              <span className="text-orange-400 text-xs">
                Wallet B
              </span>

            </div>

          </div>


          {/* Wallet 3 */}

          <div className="absolute left-[22%] bottom-[20%]">

            <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center">

              <span className="text-green-400 text-xs">
                Wallet C
              </span>

            </div>

          </div>


          {/* Wallet 4 */}

          <div className="absolute right-[22%] bottom-[20%]">

            <div className="w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-400 flex items-center justify-center">

              <span className="text-red-400 text-xs">
                Wallet D
              </span>

            </div>

          </div>

        </div>


        {/* Graph Information */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="bg-slate-900 rounded-lg p-4">

            <p className="text-slate-400 text-sm">
              Connected Wallets
            </p>

            <p className="text-2xl font-bold text-white mt-1">
              24
            </p>

          </div>


          <div className="bg-slate-900 rounded-lg p-4">

            <p className="text-slate-400 text-sm">
              Transactions
            </p>

            <p className="text-2xl font-bold text-white mt-1">
              186
            </p>

          </div>


          <div className="bg-slate-900 rounded-lg p-4">

            <p className="text-slate-400 text-sm">
              High Risk Connections
            </p>

            <p className="text-2xl font-bold text-red-400 mt-1">
              7
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

export default NetworkGraph;