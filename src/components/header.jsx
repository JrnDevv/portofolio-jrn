export default function Header() {
  return (
    <header className="w-full bg-[#0f172a] text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">GabDev</h1>
      <nav className="flex gap-6 text-lg">
        <a href="/" className="hover:text-blue-400 transition">Home</a>
        <a href="/sobre" className="hover:text-blue-400 transition">Sobre</a>
        <a href="/projetos" className="hover:text-blue-400 transition">Projetos</a>
        <a href="/contato" className="hover:text-blue-400 transition">Contato</a>
      </nav>
    </header>
  );
}