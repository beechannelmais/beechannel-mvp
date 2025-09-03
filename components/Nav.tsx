'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from '@/lib/auth';

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-white/10 sticky top-0 backdrop-blur z-40">
      <div className="container flex items-center justify-between py-3">
        <Link href="/catalog" className="font-bold text-xl">
          BeeChannel<span className="text-yellow-400">+</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            className={`btn-outline ${pathname?.startsWith('/catalog') ? 'bg-white/10' : ''}`}
            href="/catalog"
          >
            Vitrine
          </Link>
          <Link
            className={`btn-outline ${pathname?.startsWith('/profiles') ? 'bg-white/10' : ''}`}
            href="/profiles"
          >
            Perfis
          </Link>
          <button className="btn-outline" onClick={() => { logout(); location.href='/login'; }}>
            Sair
          </button>
        </div>
      </div>
    </nav>
  );
}
