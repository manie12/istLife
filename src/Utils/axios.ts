import axios from "axios";
// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "X-Frame-Options": "deny",
    "Content-Security-Policy": "frame-ancestors 'none';",
  },
  timeout: 50000,
  timeoutErrorMessage: "Request timed out",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // console.log("error", error);
    if (error.code === "ECONNABORTED") {
      console.log("Caught Error", error.message);
      // Handle timeout error
    //   SnackbarUtils.error(error.message);
    } else if (error.response) {
      // Error response from server
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //   SnackbarUtils.error("An error occurred while sending your request");
    } else {
      // Display error message
    //   SnackbarUtils.error("An error occurred while sending your request");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
