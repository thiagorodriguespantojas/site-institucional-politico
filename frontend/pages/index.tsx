// src/pages/index.tsx
export default function Home() {
  return (
    <div>
      <h1>Site Político - Funcionando ✅</h1>
      <p>Primeira rota carregada com sucesso.</p>
    </div>
  );
}
// src/pages/index.tsx
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import useAuth from '../hooks/useAuth';
//
// export default function Home() {
//   const router = useRouter();
//   const isAuth = useAuth();
//
//   useEffect(() => {
//     if (!isAuth) router.push('/login');
//   }, [isAuth]);
//
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Site Político - Funcionando ✅</h1>
//       <p>Primeira rota carregada com sucesso.</p>
//     </div>
//   );
// }
// src/hooks/useAuth.tsx
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
//
// export default function useAuth() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();
//
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsAuthenticated(!!token);
//   }, []);
//
//   return isAuthenticated;
// }
// src/pages/login.tsx
// import { useState } from 'react';
// import { useRouter } from 'next/router';
//
// export default function Login() {
//   const [username, setUser] = useState('');
//   const [password, setPass] = useState('');
//   const router = useRouter();
//
//   const handleLogin = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });
//
//     if (res.ok) {
//       const data = await res.json();
//       localStorage.setItem('token', data.access_token);
//       router.push('/admin');
//     } else {
//       alert('Credenciais inválidas');
//     }
//   };
//
//   return (
//     <div className="flex items-center justify-center min-h-screen p-6">
//       <div className="max-w-sm w-full bg-white shadow p-6 rounded">
//         <h1 className="text-xl font-semibold mb-4 text-center">Login Admin</h1>
//         <input
//           className="border p-2 mb-2 w-full"
//           placeholder="Usuário"
//           onChange={(e) => setUser(e.target.value)}
//         />
//         <input
//           className="border p-2 mb-2 w-full"
//           placeholder="Senha"
//           type="password"
//           onChange={(e) => setPass(e.target.value)}
//         />
//         <button
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           onClick={handleLogin}
//         >
//           Entrar
//         </button>
//       </div>
//     </div>
//   );
//   );
// }
// src/pages/admin/index.tsx
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import useAuth from '../../hooks/useAuth';
//
// export default function AdminDashboard() {
//   const router = useRouter();
//   const isAuth = useAuth();
//
//   useEffect(() => {
//     if (!isAuth) router.push('/login');
//   }, [isAuth]);
//
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
//       <a href="/admin/proposals" className="text-blue-600 underline">Gerenciar Propostas</a>
//     </div>
//   );
// }
// src/pages/admin/proposals.tsx
// import { useEffect, useState } from 'react';
// import useAuth from '../../hooks/useAuth';
// import { useRouter } from 'next/router';
//
// export default function Proposals() {
//   const [proposals, setProposals] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDesc] = useState('');
//   const router = useRouter();
//
//   const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
//
//   const fetchProposals = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/proposals`);
//     const data = await res.json();
//     setProposals(data);
//   };
//
//   const createProposal = async () => {
//     await fetch(`${process.env.NEXT_PUBLIC_API_URL}/proposals`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
//       body: JSON.stringify({ title, description }),
//     });
//     setTitle('');
//     setDesc('');
//     fetchProposals();
//   };
//
//   useAuth(); // redirect if not authenticated
//
//   useEffect(() => {
//     fetchProposals();
//   }, []);
//
//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Propostas</h2>
//       <div className="mb-4">
//         <input className="border p-2 mr-2" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
//         <input className="border p-2 mr-2" placeholder="Descrição" value={description} onChange={e => setDesc(e.target.value)} />
//         <button onClick={createProposal} className="bg-green-600 text-white px-4 py-2 rounded">Adicionar</button>
//       </div>
//       <ul>
//         {proposals.map((p: any) => (
//           <li key={p.id} className="border p-2 mb-2">
//             <strong>{p.title}</strong>: {p.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// src/hooks/useAuth.tsx
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
//
// export default function useAuth() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();
//
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsAuthenticated(!!token);
//   }, []);
//
//   return isAuthenticated;
// }
// src/pages/login.tsx
// import { useState } from 'react';
// import { useRouter } from 'next/router';
//
// export default function Login() {
//   const [username, setUser] = useState('');
//   const [password, setPass] = useState('');
//   const router = useRouter();
//
//   const handleLogin = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });
//
//     if (res.ok) {
//       const data = await res.json();
//       localStorage.setItem('token', data.access_token);
//       router.push('/admin');
//     } else {
//       alert('Credenciais inválidas');
//     }
//   };
//
//   return (
//     <div className="flex items-center justify-center min-h-screen p-6">
//       <div className="max-w-sm w-full bg-white shadow p-6 rounded">
//         <h1 className="text-xl font-semibold mb-4 text-center">Login Admin</h1>
//         <input
//           className="border p-2 mb-2 w-full"
//           placeholder="Usuário"
//           onChange={(e) => setUser(e.target.value)}
//         />
//         <input
//           className="border p-2 mb-2 w-full"
//           placeholder="Senha"
//           type="password"
//           onChange={(e) => setPass(e.target.value)}
//         />
//         <button
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           onClick={handleLogin}
//         >
//           Entrar
//         </button>
//       </div>
//     </div>
//   );
// }
