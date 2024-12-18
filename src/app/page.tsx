export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e101c] flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-light text-white text-center mb-4 border-b border-gray-600 pb-2">
          React Hook Form
        </h1>
        <form className="bg-[#0e101c] p-6 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-light mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded border border-white bg-[#0e101c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white font-light mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded border border-white bg-[#0e101c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 active:transform active:translate-y-1 transition-all text-white uppercase py-3 mt-6 font-light tracking-wide rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
