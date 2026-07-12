function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-medium text-slate-500">Enterprise ESG Workspace</p>
          <h1 className="text-lg font-semibold text-slate-950">EcoSphere AI</h1>
        </div>
        <div className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600">
          Hackathon 2026
        </div>
      </div>
    </header>
  );
}

export default Navbar;
