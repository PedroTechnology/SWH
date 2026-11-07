import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, PhoneCall, Cpu, Layers, CheckCircle2 } from "lucide-react";
import heroAppliance from "@/assets/hero-appliance.jpg";
import catFirewall from "@/assets/cat-firewall.jpg";
import catPabx from "@/assets/cat-pabx.jpg";
import catIndustrial from "@/assets/cat-industrial.jpg";
import catOem from "@/assets/cat-oem.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SWH - Tecnologia Computacional" },
      {
        name: "description",
        content:
          "Fabricamos appliances de firewall (pfSense/OPNsense), PABX-IP e computadores industriais. Hardware brasileiro desde 1999. Sem licenciamento.",
      },
      { property: "og:title", content: "SWH Tecnologia Computacional" },
      {
        property: "og:description",
        content:
          "Hardware industrial brasileiro para firewall, telefonia IP e computação de borda em ambientes críticos.",
      },
    ],
  }),
  component: HomePage,
});

const solutions = [
  {
    icon: Shield,
    title: "Appliances Firewall",
    image: catFirewall,
    description:
      "Hardware otimizado para pfSense e OPNsense — multi-WAN, VPN e IDS/IPS em chassis industrial.",
    bullets: ["Intel Celeron a Xeon", "Portas 2.5GbE / 10GbE", "AES-NI nativo"],
  },
  {
    icon: PhoneCall,
    title: "Appliances PABX-IP",
    image: catPabx,
    description:
      "Comunicação unificada para call centers e operadoras com FXO, FXS e E1 sob PCIe.",
    bullets: ["Slots de Expansão PCIe", "Redundância RAID", "Alta Disponibilidade"],
  },
  {
    icon: Cpu,
    title: "Computadores Industriais",
    image: catIndustrial,
    description:
      "Sistemas fanless e embedded para operação 24/7 em ambientes severos e Edge Computing.",
    bullets: ["Operação Fanless", "Range de Temperatura Estendido", "IoT & Automação"],
  },
  {
    icon: Layers,
    title: "Plataformas OEM",
    image: catOem,
    description:
      "Engenharia de hardware sob medida — plataformas whitelabel desenvolvidas para o seu produto.",
    bullets: ["Whitelabel & Branding", "Engenharia local", "Projetos especiais"],
  },
];

const differentials = [
  "Desde 1999 fabricando no Brasil",
  "Sem custos de licenciamento",
  "Hardware industrial",
  "Suporte nacional especializado",
  "Estoque local imediato",
  "Especialistas pfSense / OPNsense",
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0f172a]">
        {/* Vídeo de fundo do data center */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
          poster="/video-datacenter-swh.mp4"
        >
          <source src="/video-datacenter-swh.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.75) 100%)",
          }}
        />
        <div className="absolute inset-0 grid-dots opacity-40 pointer-events-none z-30" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-40">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                Hardware de Missão Crítica
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-8 text-balance">
              Soluções <span className="text-primary">Industriais</span> para Ambientes Críticos
            </h1>
            <p className="text-white/70 text-lg mb-10 max-w-lg text-pretty">
              Desenvolvemos e fabricamos plataformas computacionais robustas para segurança,
              comunicação e operação de infraestruturas corporativas e industriais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/produtos"
                className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase text-sm tracking-widest hover:brightness-110 transition-all shadow-xl shadow-primary/20 inline-flex items-center gap-2"
              >
                Conhecer Appliances <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/solucoes"
                className="border border-white/20 text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-navy transition-all"
              >
                Projetos OEM
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-slate-900">
              <img
                src={heroAppliance}
                alt="Appliance SWH 1U rackmount com múltiplas portas Ethernet e SFP"
                width={1280}
                height={960}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-primary p-4 shadow-2xl hidden md:block">
              <div className="font-mono text-white text-center">
                <div className="text-[10px] uppercase mb-1 tracking-widest text-white/80">Desde</div>
                <div className="text-2xl font-bold">1999</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-surface-soft border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            ["25+", "Anos de Mercado"],
            ["100%", "Fabricação Nacional"],
            ["ZERO", "Licenciamento"],
            ["LOCAL", "Estoque Imediato"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl lg:text-4xl font-black text-navy mb-1">{n}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3">
              Categorias de Hardware
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Plataformas projetadas para performance e durabilidade
            </h2>
            <p className="text-muted-foreground text-pretty">
              Equipamentos dimensionados para pfSense, OPNsense, Asterisk e aplicações de alta
              densidade — sem custos de licenciamento.
            </p>
          </div>
          <Link
            to="/produtos"
            className="text-primary font-bold uppercase text-xs tracking-widest border-b-2 border-primary pb-1 inline-flex items-center gap-2"
          >
            Catálogo completo <ArrowRight className="size-3" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="group bg-surface-soft border border-border hover:border-primary/40 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-white border-b border-border">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <s.icon className="size-5 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{s.description}</p>
                <ul className="space-y-1.5 text-[11px] font-medium text-foreground/70 uppercase tracking-tight mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="size-1 bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/solucoes"
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary"
                >
                  Ver Linha <ArrowRight className="size-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* Differentials */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3">
              Diferenciais SWH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Por que empresas críticas escolhem nossa engenharia
            </h2>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {differentials.map((d) => (
              <div key={d} className="flex items-start gap-3 border-l-2 border-primary pl-4 py-2">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="font-semibold text-sm">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
