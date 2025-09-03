'use client';
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProfilesPage() {
  const router = useRouter();

  const handleEnter = () => router.push('/catalog');
  const handleEdit = () => router.push('/profiles/manage'); // ajuste se tiver outra rota
  const handleDelete = () => alert('Exemplo: aqui irá a ação de excluir perfil');

  return (
    <main className="container py-10">
      <h1 className="text-2xl font-bold mb-8">Quem está assistindo?</h1>

      {/* GRID DOS CARDS */}
      <div className="grid grid-cols-2 gap-6 max-w-[700px]">
        {/* CARD: PERFIL EXISTENTE */}
        <div className="card p-6 rounded-2xl">
          <div className="flex flex-col items-center">
            {/* avatar/emoji menor e centralizado */}
            <div className="h-20 w-20 rounded-full bg-surface-300/60 grid place-items-center border border-white/10 shadow-soft">
              <span className="text-4xl">😊</span>
            </div>
            <div className="mt-3 text-center text-sm font-medium">Novo perfil</div>
          </div>

          {/* BOTÕES – organizados embaixo, sem sobrepor o card */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleEnter}
              className="px-4 py-2 rounded-xl bg-brand-500 text-black font-medium hover:bg-brand-400 transition"
            >
              Entrar
            </button>
            <button
              onClick={handleEdit}
              className="px-4 py-2 rounded-xl border border-white/20 text-white/90 hover:border-brand-500 hover:text-brand-500 transition"
            >
              Editar
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 rounded-xl border border-white/20 text-white/90 hover:border-brand-500 hover:text-brand-500 transition"
            >
              Excluir
            </button>
          </div>
        </div>

        {/* CARD: ADICIONAR PERFIL */}
        <Link
          href="/profiles/new" // ajuste se sua rota de criação for outra
          className="card p-6 rounded-2xl hover:border-brand-500 transition"
        >
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 rounded-full bg-surface-300/40 border border-white/10 grid place-items-center shadow-soft">
              {/* ícone + discreto */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                className="opacity-80"
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="mt-3 text-center text-sm font-medium text-white/80">
              Adicionar perfil
            </div>
          </div>
        </Link>
      </div>

      {/* CTA para ir à vitrine sem perfil */}
      <div className="max-w-[700px] mt-8">
        <Link
          href="/catalog"
          className="inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 bg-brand-500 text-black font-medium hover:bg-brand-400 transition"
        >
          Ir para a vitrine (sem perfil)
        </Link>
      </div>
    </main>
  );
}
