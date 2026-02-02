const API_URL = import.meta.env.LOCALHOST_URL;

export async function login(email, password) {
  const res = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Credenciales inválidas");

  const data = await res.json();
  localStorage.setItem("token", data.access_token);
  console.log("EL TOKEN SE HA ALMACENADO COMPA !!");
  return data;
}
