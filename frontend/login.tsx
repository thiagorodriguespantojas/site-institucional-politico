import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.access_token);
      router.push("/admin");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="max-w-sm w-full bg-white shadow p-6 rounded">
        <h1 className="text-xl font-semibold mb-4 text-center">Login Admin</h1>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Usuário"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Senha"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
// Compare this snippet from frontend/hooks/useAuth.tsx:
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
//
// export const useAuth = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();
//
//   useEffect(() => {
