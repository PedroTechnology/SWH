import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "Empresa — SWH Tecnologia Computacional" },
      {
        name: "description",
        content:
          "Conheça a SWH: fabricante brasileira de hardware industrial desde 1999, especializada em appliances de firewall, PABX-IP e computação industrial.",
      },
      { property: "og:title", content: "Empresa — SWH" },
      {
        property: "og:description",
        content: "Quem somos, missão, visão, valores e diferenciais da SWH Tecnologia Computacional.",
      },
    ],
  }),
  component: EmpresaPage,
});

function EmpresaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a SWH"
        title="Engenharia computacional brasileira desde 1999"
        description="Fabricamos plataformas computacionais robustas para os ambientes mais exigentes do mercado: ISPs, telecom, indústria, integradores e governo."
      />

      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-soft/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-[10px] font-mono font-bold uppercase tracking-widest rounded-full mb-6">
              Quem Somos
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-[1.1] text-balance">
              Hardware projetado para durar
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mb-8" />
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg text-muted-foreground text-pretty leading-relaxed">
            <p className="text-xl lg:text-2xl font-medium text-foreground leading-snug">
              A SWH Tecnologia Computacional é uma empresa brasileira fundada em 1999, especializada
              no desenvolvimento e fabricação de plataformas computacionais industriais. Atuamos em
              segmentos de missão crítica onde tempo de operação, robustez e suporte local são
              decisivos.
            </p>
            <p>
              Nossa linha de produtos cobre appliances de firewall homologados para pfSense e
              OPNsense, plataformas PABX-IP de alta disponibilidade e computadores industriais
              fanless para Edge Computing — tudo com engenharia local e estoque no Brasil.
            </p>
            <p>
              Atendemos ISPs, operadoras de telecom, integradores, indústrias e órgãos governamentais
              que demandam soberania tecnológica e zero dependência de licenciamento de software.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft border-y border-border overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="p-6 sm:p-10 lg:p-20 flex flex-col justify-center">
            <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-4">
              Nossa Trajetória
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Inovação e Polo Tecnológico</h2>
            <div className="space-y-6 text-muted-foreground text-pretty leading-relaxed">
              <p>
                Em 2007, ampliamos nosso portfólio e passamos a oferecer soluções completas em
                automação para indústrias, comércios e prestadores de serviços de diversos setores.
                Com foco em inovação e alto desempenho, nos destacamos por entregar soluções
                tecnológicas eficientes, confiáveis e sob medida.
              </p>
              <p>
                Com sede em São José dos Campos — um dos principais polos tecnológicos do Brasil — a
                SWH importa, fabrica e distribui Plataformas Computacionais Industriais de alta
                performance e durabilidade (MTBF elevado), agregando valor real aos negócios de
                nossos clientes e parceiros.
              </p>
            </div>
          </div>
          <div className="relative min-h-[260px] sm:min-h-[360px] lg:min-h-full order-first lg:order-last">
            <img 
              src="/sede-swh.png" 
              alt="Sede da SWH em São José dos Campos" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-soft border-y border-border py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-px bg-border ring-1 ring-border">
          {[
            {
              icon: Target,
              label: "Missão",
              text: "Desenvolver e fabricar plataformas computacionais robustas para ambientes corporativos e industriais críticos, com tecnologia nacional e suporte local.",
            },
            {
              icon: Eye,
              label: "Visão",
              text: "Ser referência brasileira em hardware computacional industrial, reconhecida pela engenharia, durabilidade e relacionamento técnico de longo prazo.",
            },
            {
              icon: Heart,
              label: "Valores",
              text: "Engenharia rigorosa, transparência técnica, suporte humano, compromisso com prazos e investimento contínuo em qualidade.",
            },
          ].map(({ icon: Icon, label, text }) => (
            <div key={label} className="bg-background p-6 sm:p-10">
              <Icon className="size-8 text-primary mb-6" />
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-2">
                {label}
              </div>
              <p className="text-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <h2 className="text-3xl font-bold mb-10">Nossos Diferenciais</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border ring-1 ring-border">
          {[
            ["1999", "Mais de 25 anos de mercado"],
            ["Fabricação", "Engenharia e produção 100% nacional"],
            ["Sem licenças", "Open-source enterprise sem custos recorrentes"],
            ["Suporte local", "Equipe técnica brasileira em horário comercial"],
            ["Estoque", "Disponibilidade imediata para entrega no Brasil"],
            ["OEM", "Projetos sob medida para integradores e marcas"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-6 sm:p-8 hover:bg-surface-soft transition-colors">
              <Award className="size-5 text-primary mb-4" />
              <div className="font-bold text-lg mb-2">{k}</div>
              <div className="text-sm text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </section>


    </>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  image = "/hero-tech.png",
  bgColor = "bg-navy",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  bgColor?: string;
}) {
  return (
    <section className={`${bgColor} text-white py-12 sm:py-16 lg:py-28 relative overflow-hidden`}>
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
      </div>
      <div className="absolute inset-0 grid-dots opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-4">
          {eyebrow}
        </div>
        <h1 className="text-[clamp(2rem,9vw,4rem)] lg:text-6xl font-extrabold leading-[1.05] mb-6 max-w-3xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="text-white/70 text-lg max-w-2xl text-pretty">{description}</p>
        )}
      </div>
    </section>
  );
}

