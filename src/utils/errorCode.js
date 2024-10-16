const getErrorMessage = (status) => {
    switch (status) {
      case 429:
        return "Too Many Requests - You've exceeded the allowed number of requests. Please try again later.";
      case 404:
        return "Not Found - The requested resource could not be found.";
      case 500:
        return "Internal Server Error - Something went wrong on our end. Please try again later.";
      default:
        return "An unexpected error occurred. Please try again later.";
    }
  };

  export default getErrorMessage