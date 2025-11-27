import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

// Axios Instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic Request Helper
async function request(path, options = {}) {
  try {
    const { method = "GET", data, headers = {}, params } = options;

    const response = await apiClient.request({
      url: path,
      method,
      data,
      params,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("API error:", error);

    const message =
      error.response?.data?.error ||
      error.message ||
      `Request failed: ${error.response?.status}`;
    throw new Error(message);
  }
}

// ✅ Create Retell Web Call (with updated field company_email)
export async function createRetellWebCall(formData) {
  return request("/api/retell/create-web-call/", {
    method: "POST",
    data: {
      name: formData.name,
      company_email: formData.company_email, 
      phone: formData.phone,
      industry: formData.industry,
    },
  });
}

// End Call Session
export async function endCallSession(callId) {
  return request(`/api/retell/end-call/${callId}`, { method: "POST" });
}

export default {
  createRetellWebCall,
  endCallSession,
};
