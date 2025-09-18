const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-16">
    <h1 className="text-6xl font-bold mb-4 font-jetbrains group-hover:underline group-hover:decoration-wavy group-hover:decoration-blue-400 group">404</h1>
    <p className="text-xl mb-8">Page Not Found</p>
    <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold">Go Home</a>
  </div>
);

export default NotFound;
