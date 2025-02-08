export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          Welcome to Tailwind CSS with Next.js!
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          This is a simple Next.js app with Tailwind CSS styling. You can start
          adding your own components here.
        </p>

        <div className="space-y-4">
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Get Started
          </button>

          <button className="w-full bg-gray-300 text-gray-800 p-3 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Learn More
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Powered by Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
