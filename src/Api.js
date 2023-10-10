// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your backend API URL

export const calculate = async (expression) => {
  try {
    const response = await axios.post(`${API_URL}/api/calculate`, {expression});
    return response.data.result;
  } catch (error) {
    console.log("ERROR", error.response.data)
    throw error.response.data.error;
  }
};

export const getCalculationHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/history`);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
