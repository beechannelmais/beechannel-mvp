import './globals.css'; import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'BeeChannel+ MVP', description: 'Streaming MVP demo (local only)' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang="pt-br"><body>{children}</body></html>); }
