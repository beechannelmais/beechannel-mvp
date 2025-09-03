'use client';
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProfilesPage() {
  const router = useRouter();
  const goCatalog = () => router.push('/catalog');

  return (
    <main className="container py-8">
      <h1 className="text-2xl font-extrabold mb-8">Quem está assistindo?</h1>

      {/* GRID DOS CARDS */}
      <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* CARD: PERFIL EXISTENTE */}
        <div className="card p-6 rounded-2xl">
          <div className="flex flex-col items-center text-center">
            {/* ícone menor e centralizado */}
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-surface-300/60 grid place-items-center border border-white/10 shadow-soft">
              <span className="text-3xl sm:text-4xl">😊</span>
            </div>
            <div className="mt-3 text-sm font-semibold">Novo perfil</div>
          </div>

          {/* BOTÕES organizados, sem sobrepor o card */}
          <div className="mt-5 space-y-3">
            <button onClick={goCatalog} className="btn w-full">
              Entrar
            </button>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/profiles/manage" className="btn-outline text-center">
                Editar
              </Link>
              <button className="btn-outline">Excluir</button>
            </div>
          </div>
        </div>

        {/* CARD: ADICIONAR PERFIL */}
        <Link
          href="/profiles/new" /* ajuste se sua rota de criação for outra */
          className="card p-6 rounded-2xl hover:border-brand-500 transition"
        >
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-surface-300/40 border border-white/10 grid place-items-center shadow-soft">
              {/* ícone + discreto */}
              <svg
                width="28"
                height="28"
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
            <div className="mt-3 text-sm font-semibold text-white/80">
              Adicionar perfil
            </div>
          </div>
        </Link>
      </div>

      {/* CTA para ir à vitrine sem perfil */}
      <div className="mx-auto max-w-3xl mt-8">
        <Link href="/catalog" className="btn w-full">
          Ir para a vitrine (sem perfil)
        </Link>
      </div>
    </main>
  );
}
