import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Your backend server URL

// Function to make the API call
export const scanWebsite = async (url) => {
    try {
        const response = await axios.post(`${API_URL}/scan`, { url });
        return response.data;  // Returning the report
    } catch (error) {
        console.error("Error scanning website:", error);
        throw error;
    }
};
