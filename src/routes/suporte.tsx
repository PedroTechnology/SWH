import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, FileDown, HelpCircle, Wrench } from "lucide-react";
import { PageHeader } from "./empresa";

export const Route = createFileRoute("/suporte")({
  head: () => ({
    meta: [
      { title: "Suporte — Garantia, RMA, Downloads e FAQ | SWH" },
      {
        name: "description",
        content:
          "Central de suporte SWH: política de garantia, processo de RMA, downloads de datasheets e perguntas frequentes.",
      },
      { property: "og:title", content: "Suporte — SWH" },
      { property: "og:description", content: "Garantia, RMA, downloads e FAQ dos produtos SWH." },
    ],
  }),
  component: SuportePage,
});

const cards = [
  {
    icon: ShieldCheck,
    title: "Garantia",
    text: "Todos os appliances SWH possuem garantia contra defeitos de fabricação. Consulte o prazo específico no datasheet do seu modelo.",
  },
  {
    icon: Wrench,
    title: "RMA",
    text: "Processo de RMA simples: abra um chamado, envie o equipamento para nossa unidade em São José dos Campos e acompanhe o reparo.",
  },
  {
    icon: FileDown,
    title: "Downloads",
    text: "Datasheets, manuais, drivers, firmware e fotos institucionais disponíveis sob demanda — solicite pelo formulário comercial.",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    text: "Dúvidas técnicas frequentes sobre compatibilidade com pfSense, OPNsense, Asterisk e instalação em rack.",
  },
];

const faqs = [
  {
    q: "Os appliances são compatíveis com pfSense e OPNsense?",
    a: "Sim. Toda a linha de firewall é homologada e validada com pfSense Community/Plus e OPNsense, com suporte a AES-NI por hardware.",
  },
  {
    q: "Existe custo de licenciamento?",
    a: "Não. Trabalhamos com plataformas open-source enterprise. Você paga apenas pelo hardware e suporte opcional.",
  },
  {
    q: "Vocês fornecem nota fiscal e entregam para todo o Brasil?",
    a: "Sim. Fabricamos no Brasil, emitimos NF-e e enviamos para todas as regiões com transportadoras parceiras.",
  },
  {
    q: "Vocês desenvolvem hardware customizado?",
    a: "Sim. Nossa equipe de engenharia desenvolve plataformas OEM whitelabel com BOM dedicada e controle de obsolescência.",
  },
  {
    q: "Como funciona o suporte técnico?",
    a: "Suporte nacional em horário comercial via e-mail e telefone. Planos estendidos sob contrato para clientes corporativos.",
  },
];

function SuportePage() {
  return (
    <>
      <PageHeader
        eyebrow="Suporte"
        title="Central técnica e pós-venda"
        description="Tudo o que você precisa para manter sua operação rodando: garantia, RMA, downloads e respostas rápidas."
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border ring-1 ring-border mb-16">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-8 hover:bg-surface-soft transition-colors">
              <Icon className="size-7 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="w-full">
          <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3">
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl font-bold mb-10">FAQ Técnico</h2>
          <div className="space-y-px bg-border ring-1 ring-border">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-background open:bg-surface-soft">
                <summary className="cursor-pointer list-none p-6 flex justify-between items-center gap-6 font-semibold">
                  <span>{f.q}</span>
                  <span className="text-primary text-xl font-light shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
