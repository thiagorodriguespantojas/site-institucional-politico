import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Campanha Ana Rocha</h1>
      <p className="text-lg mb-8">Por uma Nova Esperança mais justa e próspera.</p>
      <Link href="/login">
        <span className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">Acessar Painel</span>
      </Link>
    </div>
  );
}
