export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Data Shape Shifter
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A sophisticated Python library for dynamic data transformation and manipulation, 
            featuring intelligent shape shifting capabilities for various data structures and formats.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Dynamic data structure transformation</li>
                <li>• Intelligent shape detection and conversion</li>
                <li>• Support for multiple data formats</li>
                <li>• Optimized performance algorithms</li>
                <li>• Easy-to-use API interface</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
