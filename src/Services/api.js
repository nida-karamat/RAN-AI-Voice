const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL; // change in .env file

// Generic helper for requests
async function request(path, options = {}) {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: { "Content-Type": "application/json", ...(options.headers || {}) },
      ...options,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Request failed: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}

// Create a Retell Web Call
export async function createRetellWebCall() {
  return request("/api/retell/create-web-call/", { method: "POST" });
}

// (Optional) You could add more routes later:
export async function endCallSession(callId) {
  return request(`/api/retell/end-call/${callId}`, { method: "POST" });
}

export default {
  createRetellWebCall,
  endCallSession,
};