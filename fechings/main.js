console.log("OK");

// Use CORS proxy - correct syntax
const endpoint =
  "https://api.allorigins.win/get?url=https://reqres.in/api/users/3";

async function hitApi() {
  try {
    const api = await fetch(endpoint);
    if (!api.ok) throw new Error(`HTTP ${api.status}`);
    const response = await api.json();
    // allorigins wraps the response in a 'contents' property
    const data = JSON.parse(response.contents);
    console.log("User data:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

hitApi();
