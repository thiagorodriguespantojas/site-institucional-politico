import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";

export default function AdminDashboard() {
  const router = useRouter();
  const isAuth = useAuth();

  useEffect(() => {
    if (!isAuth) router.push("/login");
  }, [isAuth]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
      <a href="/admin/proposals" className="text-blue-600 underline">
        Gerenciar Propostas
      </a>
    </div>
  );
}
