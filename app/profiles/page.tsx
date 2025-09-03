'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Profile = {
  id: string;
  name: string;
  avatar?: string; // caminho em /public (ex.: "/avatars/marcia.jpg")
};

export default function ProfilesPage() {
  const router = useRouter();

  // 👉 Se você já tem a fonte de perfis (localStorage/API), pode trocar este mock
  // por um hook/fetch. Aqui deixo 1 exemplo para manter a página funcional.
  const profiles: Profile[] = [
    { id: '1', name: 'marcia1812', avatar: '/avatar-default.jpg' },
  ];

  const handleSelect = (p: Profile) => {
    // navega para a vitrine com o perfil escolhido
    router.push('/catalog'); // ajuste a rota se necessário
  };

  return (
    <main className="container min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-12">
      <h1 className="text-2xl font-bold mb-10">Quem está assistindo?</h1>

      {/* Grid de cards */}
      <div className="grid grid-cols-2 gap-6 max-w-md w-full justify-items-center">
        {/* Perfis existentes */}
        {profiles.map((p) => (
          <button
            key={p.id}
            onClick={() => handleSelect(p)}
            className="group w-36 focus:outline-none"
            aria-label={`Entrar com ${p.name}`}
          >
            <div className="mx-auto h-24 w-24 rounded-full overflow-hidden ring-1 ring-white/10 shadow-soft group-hover:ring-brand-500 transition">
              {/* avatar */}
              {/* Se tiver imagem real em /public, troque o src abaixo */}
              <img
                src={p.avatar || '/avatar-default.jpg'}
                alt={p.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-3 text-center text-sm font-medium">{p.name}</div>
          </button>
        ))}

        {/* Card "Criar perfil" */}
        <Link
          href="#"
          className="w-36 focus:outline-none"
          onClick={(e) => e.preventDefault()}
          aria-label="Criar perfil"
        >
          <div className="mx-auto h-24 w-24 rounded-full bg-surface-200/60 border border-white/10 grid place-items-center shadow-soft">
            {/* ícone + simples, menor e elegante */}
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
        <Link href="/profiles/manage" className="btn w-full bg-brand-500 hover:bg-brand-400 text-black">
          Gerenciar Perfil
        </Link>
        <Link href="/catalog" className="btn-outline w-full text-center">
          Ir para a vitrine
        </Link>
      </div>
    </main>
  );
}
