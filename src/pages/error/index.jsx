/* eslint-disable react/prop-types */
const ErrorPage = ({ errorCode = '404', errorMessage = 'Page Not Found', onRetry }) => {
  return (
    <div className="flex items-center justify-center w-full bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">{errorCode}</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">{errorMessage}</p>
        <p className="text-gray-500 mt-2">Sorry, something went wrong.</p>
        <div className="mt-6">
          <button
            onClick={onRetry}
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300"
          >
            Retry
          </button>
        </div>
        <div className="mt-4">
          <a href="/" className="text-blue-500 hover:underline">
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
