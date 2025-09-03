'use client';

import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

export default function WatchPage() {
  // Lê o :id da URL com segurança
  const params = useParams<{ id?: string | string[] }>();
  const raw = params?.id;
  const id =
    typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] : '';

  // Parâmetros opcionais (ex.: ?title=Algum+filme)
  const search = useSearchParams();
  const title = search.get('title') ?? 'Assistir';

  return (
    <main className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>

        {/* Link estático para evitar erro de typed routes */}
        <Link className="btn-outline" href="/catalog">
          ← Voltar para a vitrine
        </Link>
      </div>

      {/* Placeholder simples para o player (evita imports que possam quebrar no build) */}
      <div className="card p-6">
        <p className="text-white/70 mb-4">
          Reproduzindo conteúdo ID: <span className="font-mono">{id}</span>
        </p>

        {/* Se quiser um vídeo real, troque o src abaixo por um arquivo seu em /public/videos */}
        <video
          controls
          className="w-full rounded-xl"
          // Exemplo: coloque um arquivo em public/videos/demo.mp4 e mude o src para "/videos/demo.mp4"
          src=""
        >
          Seu navegador não suporta vídeo.
        </video>
      </div>
    </main>
  );
}
