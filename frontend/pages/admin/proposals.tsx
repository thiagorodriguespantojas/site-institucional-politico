import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

export default function Proposals() {
  const [proposals, setProposals] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';

  const fetchProposals = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/proposals`);
    const data = await res.json();
    setProposals(data);
  };

  const createProposal = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/proposals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ title, description }),
    });
    setTitle('');
    setDesc('');
    fetchProposals();
  };

  useAuth(); // redirect if not authenticated

  useEffect(() => {
    fetchProposals();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Propostas</h2>
      <div className="mb-4">
        <input className="border p-2 mr-2" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="border p-2 mr-2" placeholder="Descrição" value={description} onChange={e => setDesc(e.target.value)} />
        <button onClick={createProposal} className="bg-green-600 text-white px-4 py-2 rounded">Adicionar</button>
      </div>
      <ul>
        {proposals.map((p: any) => (
          <li key={p.id} className="border p-2 mb-2">
            <strong>{p.title}</strong>: {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
