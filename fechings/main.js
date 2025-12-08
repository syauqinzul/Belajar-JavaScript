console.log("OK");

// Option 1: Use a working CORS proxy (api.allorigins.win)
const endpoint =
  "https://reqres.in/api/users/3";

// Option 2: Direct reqres endpoint (this one actually has CORS enabled)
// const endpoint = "https://reqres.in/api/users/3";

// fetch(endpoint)
//   .then((data) => {
//     if (!data.ok) throw new Error(`HTTP ${data.status}`);
//     return data.json();
//   })
//   .then((result) => console.log("User data:", result.data))
//   .catch((error) => console.error("Fetch error:", error));

async function hitApi() {
  const api = await fetch(endpoint);
  const data = await api.json();
  console.log(api);
}