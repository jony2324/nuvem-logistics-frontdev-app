const API_URL = import.meta.env.VITE_LOCALHOST_URL;

export async function login(email, password) {
  const body = new URLSearchParams();
  body.append("grant_type", "password");
  body.append("username", email);
  body.append("password", password);

  const res = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(err);
    throw new Error("Credenciales inválidas");
  }

  const data = await res.json();
  localStorage.setItem("token", data.access_token);
  return data;
}
