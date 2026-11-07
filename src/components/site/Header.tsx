import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/empresa", label: "Empresa" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/produtos", label: "Produtos" },
  { to: "/segmentos", label: "Segmentos" },
  { to: "/suporte", label: "Suporte" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className="site-utility bg-navy text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap justify-between items-center gap-2 text-[10px] uppercase tracking-widest">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>Desde 1999</span>
            <span className="hidden sm:inline">Fabricação Nacional</span>
            <span className="text-[color:var(--accent-orange)]">Suporte Técnico Especializado</span>
          </div>
          <div className="hidden md:flex gap-4">
            <a href="mailto:comercial@swh.net.br" className="hover:text-[color:var(--accent-orange)] transition-colors">
              comercial@swh.net.br
            </a>
            <span className="text-white/40">|</span>
            <a href="tel:+5512991142389" className="hover:text-[color:var(--accent-orange)] transition-colors">
              (12) 99114-2389
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="site-nav sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/logo.png" alt="SWH Logo" className="site-logo w-auto max-w-[145px] sm:max-w-none object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-semibold uppercase tracking-tight">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-foreground/70 hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contato"
              className="bg-navy text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all"
            >
              Solicitar Cotação
            </Link>
          </div>

          <button
            className="lg:hidden size-11 -mr-2 inline-flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <div id="mobile-navigation" className="site-mobile-menu lg:hidden border-t border-border bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-semibold uppercase tracking-tight text-foreground/80 hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="mt-3 bg-navy text-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-center"
              >
                Solicitar Cotação
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
