"use client";

import Link from "next/link";

export default function ProfilesPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      {/* Título centralizado */}
      <h1 className="text-2xl font-bold text-center mb-8">
        Quem está assistindo?
      </h1>

      {/* Perfis */}
      <div className="flex gap-6">
        {/* Perfil existente */}
        <div className="flex flex-col items-center bg-neutral-900 rounded-xl p-6 shadow-md w-40">
          <div className="text-5xl mb-2">😊</div>
          <span className="mb-4">Novo perfil</span>

          {/* Botões alinhados */}
          <Link href="/catalog" className="btn w-full mb-2">
            Entrar
          </Link>
          <button className="btn btn-neutral w-full mb-2">Editar</button>
          <button className="btn btn-error w-full">Excluir</button>
        </div>

        {/* Adicionar perfil */}
        <div className="flex flex-col items-center justify-center bg-neutral-900 rounded-xl p-6 shadow-md w-40 cursor-pointer">
          <div className="text-5xl mb-2">＋</div>
          <span>Adicionar perfil</span>
        </div>
      </div>

      {/* CTA para vitrine sem perfil */}
      <div className="mx-auto max-w-xs mt-8">
        <Link href="/catalog" className="btn btn-warning w-full">
          Ir para a vitrine (sem perfil)
        </Link>
      </div>
    </main>
  );
}
