'use client';
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function CatalogContent() {
  const search = useSearchParams();
  const q = search.get('q') ?? '';

  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold text-white mb-4">
        Catálogo de Filmes
      </h1>
      <p className="text-gray-400 mb-6">
        Resultados para: <span className="font-semibold">{q}</span>
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-xl p-4">Filme 1</div>
        <div className="bg-gray-800 rounded-xl p-4">Filme 2</div>
        <div className="bg-gray-800 rounded-xl p-4">Filme 3</div>
        <div className="bg-gray-800 rounded-xl p-4">Filme 4</div>
      </div>
    </main>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="container py-8">Carregando…</div>}>
      <CatalogContent />
    </Suspense>
  );
}
