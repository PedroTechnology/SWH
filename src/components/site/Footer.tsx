import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, MapPin, Phone, Mail, Rss } from "lucide-react";

const WHATSAPP_NUMBER = "5512991142389";
const WHATSAPP_MESSAGE =
  "Ol%C3%A1!%20Seja%20bem-vindo(a)!%20%0AAgradecemos%20seu%20contato!%20Ser%C3%A1%20um%20prazer%20atend%C3%AA-lo(a).%0AComo%20podemos%20ajudar%20voc%C3%AA%20hoje%3F";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer w-full mt-16">
      {/* Top Section - Blue CTA */}
      <div className="bg-[#0066cc] py-12 sm:py-16 px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Precisa de um projeto personalizado?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Nossa equipe de engenharia está pronta para desenvolver plataformas computacionais OEM sob medida para sua operação.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contato"
            className="bg-white text-[#0066cc] px-8 py-3.5 text-sm font-bold tracking-wider hover:bg-gray-100 transition-colors uppercase"
          >
            Falar com um especialista
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-8 py-3.5 text-sm font-bold tracking-wider hover:bg-white/10 transition-colors uppercase"
          >
            Whatsapp comercial
          </a>
        </div>
      </div>

      {/* Bottom Section - Dark Footer */}
      <div className="bg-[#0f172a] pt-12 sm:pt-16 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* Column 1: Brand & Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo-rodape.png" alt="SWH Logo" style={{ height: "calc(var(--spacing) * 8)" }} className="w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Soluções computacionais robustas para segurança, comunicação e infraestruturas industriais. Tecnologia nacional com padrão internacional desde 1999.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://br.linkedin.com/company/swh-tecnologia-computacional" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center rounded transition-colors text-slate-300 hover:text-white" aria-label="LinkedIn da SWH">
                <Linkedin className="size-4" />
              </a>
              <a href="https://www.instagram.com/swhtecnologia/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center rounded transition-colors text-slate-300 hover:text-white" aria-label="Instagram da SWH">
                <Instagram className="size-4" />
              </a>
              <a href="https://www.facebook.com/swhsolutions/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center rounded transition-colors text-slate-300 hover:text-white" aria-label="Facebook da SWH">
                <Facebook className="size-4" />
              </a>
              <a href="https://blog.swhsolutions.com.br/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center rounded transition-colors text-slate-300 hover:text-white" aria-label="Blog da SWH">
                <Rss className="size-4" />
              </a>
              <a href="https://x.com/Swh_Inf" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center rounded transition-colors text-slate-300 hover:text-white" aria-label="SWH no X">
                <XIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Soluções */}
          <div>
            <h3 className="text-xs font-bold text-[#3b82f6] tracking-widest uppercase mb-6">
              Soluções
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/produtos" search={{ category: "firewall" }} className="hover:text-white transition-colors">Appliances Firewall</Link></li>
              <li><Link to="/produtos" search={{ category: "pabx" }} className="hover:text-white transition-colors">Appliances PABX-IP</Link></li>
              <li><Link to="/produtos" search={{ category: "pc-industrial" }} className="hover:text-white transition-colors">Computadores Industriais</Link></li>
              <li><Link to="/solucoes" className="hover:text-white transition-colors">Plataformas OEM</Link></li>
              <li><Link to="/produtos" className="hover:text-white transition-colors">Catálogo Completo</Link></li>
            </ul>
          </div>

          {/* Column 3: Suporte */}
          <div>
            <h3 className="text-xs font-bold text-[#3b82f6] tracking-widest uppercase mb-6">
              Suporte
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/suporte" className="hover:text-white transition-colors">Garantia & RMA</Link></li>
              <li><Link to="/suporte" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link to="/suporte" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/empresa" className="hover:text-white transition-colors">Sobre a Empresa</Link></li>
              <li><Link to="/segmentos" className="hover:text-white transition-colors">Segmentos Atendidos</Link></li>
            </ul>
          </div>

          {/* Column 4: Contato */}
          <div>
            <h3 className="text-xs font-bold text-[#3b82f6] tracking-widest uppercase mb-6">
              Contato
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3 items-start">
                <MapPin className="size-4 text-[#3b82f6] mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  Rua Itajaí, 80 — Sala 807<br />
                  Centro Empresarial Taquari<br />
                  São José dos Campos — SP
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="size-4 text-[#3b82f6] shrink-0" />
                <a href="tel:+5512991142389" className="hover:text-white transition-colors">
                  (12) 99114-2389
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="size-4 text-[#3b82f6] shrink-0" />
                <a href="mailto:comercial@swh.net.br" className="hover:text-white transition-colors">
                  comercial@swh.net.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium text-slate-500 uppercase tracking-widest">
          <p>© 1999-{new Date().getFullYear()} SWH TECNOLOGIA COMPUTACIONAL. TODOS OS DIREITOS RESERVADOS.</p>
          <p>DESENVOLVIDO POR PEDRO FALCÃO</p>
        </div>
      </div>
    </footer>
  );
}
