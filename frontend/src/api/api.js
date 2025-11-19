import axios from "axios";

// Use env variable in production, localhost in dev
const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000";

// Function to make the API call
export const scanWebsite = async (url) => {
  try {
    const response = await axios.post(`${API_URL}/scan`, { url });
    return response.data; // Returning the report
  } catch (error) {
    console.error("Error scanning website:", error);
    throw error;
  }
};
