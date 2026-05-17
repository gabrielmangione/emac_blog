import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Evil Man & Company
        </Link>

        <div className="flex gap-6 text-zinc-400">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}