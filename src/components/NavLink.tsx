'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Props {
  children: string;
  href: string;
}

export default function NavLink({ children, href }: Props) {
  const pathName = usePathname();
  const isActive = pathName.includes(href);

  return (
    <Link
      href={href}
      className={`px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors ${
        isActive ? 'border-l-2 border-l-green-700' : ''
      }`}
    >
      {children}
    </Link>
  );
}
