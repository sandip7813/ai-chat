function App() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-72 border-r border-gray-200 bg-white p-4">
        <button className="mb-4 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
          + New chat
        </button>

        <ul className="space-y-1">
          <li className="cursor-pointer rounded-lg bg-gray-100 px-3 py-2 text-sm">
            Learning React
          </li>
          <li className="cursor-pointer rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
            Laravel tips
          </li>
          <li className="cursor-pointer rounded-lg px-3 py-2 text-sm hover:bg-gray-100">
            MongoDB basics
          </li>
        </ul>
      </aside>

      {/* Chat area */}
      <main className="flex flex-1 flex-col">
        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto p-6">
          <div className="flex justify-end">
            <p className="max-w-xl rounded-2xl bg-green-600 px-4 py-2 text-white">
              What is React?
            </p>
          </div>

          <div className="flex justify-start">
            <p className="max-w-xl rounded-2xl bg-white px-4 py-2 shadow-sm">
              React is a JavaScript library for building user interfaces.
            </p>
          </div>

          <div className="flex justify-end">
            <p className="max-w-xl rounded-2xl bg-green-600 px-4 py-2 text-white">
              Is it hard to learn?
            </p>
          </div>
        </div>

        {/* Input box */}
        <form className="flex gap-2 border-t border-gray-200 bg-white p-4">
          <input
            type="text"
            placeholder="Type a message…"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  )
}

export default App
