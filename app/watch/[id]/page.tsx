'use client';
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function WatchContent() {
  const params = useParams<{ id?: string | string[] }>();
  const raw = params?.id;
  const id =
    typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] : '';

  const search = useSearchParams();
  const title = search.get('title') ?? 'Assistir';

  return (
    <main className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link className="btn-outline" href="/catalog">
          ← Voltar para a vitrine
        </Link>
      </div>

      <div className="card p-6">
        <p className="text-white/70 mb-4">
          Reproduzindo conteúdo ID:{' '}
          <span className="font-mono">{id}</span>
        </p>

        {/* Vídeo de teste — troque depois pelo real */}
        <video
          controls
          className="w-full rounded-xl"
          src=""
        >
          Seu navegador não suporta vídeo.
        </video>
      </div>
    </main>
  );
}

export default function WatchPage() {
  return (
    <Suspense fallback={<div className="container py-8">Carregando…</div>}>
      <WatchContent />
    </Suspense>
  );
}
