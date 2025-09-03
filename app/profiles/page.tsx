'use client';
export const dynamic = 'force-dynamic';

import Link from 'next/link';

export default function ProfilesPage() {
  return (
    <main className="container min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-12">
      <h1 className="text-2xl font-bold mb-10">Quem está assistindo?</h1>

      {/* Só a opção de criar perfil */}
      <div className="grid justify-items-center">
        <Link
          href="/profiles/new" // ajuste esta rota se a sua página de criação for outra
          className="w-36 focus:outline-none"
          aria-label="Criar Perfil"
        >
          <div className="mx-auto h-24 w-24 rounded-full bg-surface-200/60 border border-white/10 grid place-items-center shadow-soft">
            {/* ícone + discreto, menor e elegante */}
            <svg
              width="34"
              height="34"
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
            Criar Perfil
          </div>
        </Link>
      </div>

      {/* Ações abaixo */}
      <div className="mt-10 w-full max-w-sm grid gap-3">
        <Link href="/catalog" className="btn w-full bg-brand-500 hover:bg-brand-400 text-black">
          Ir para a vitrine
        </Link>
      </div>
    </main>
  );
}
