import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, FileDown, HelpCircle, Wrench } from "lucide-react";
import { PageHeader } from "./empresa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const faqCategories = [
  {
    id: "compatibilidade-tecnologia",
    title: "Compatibilidade e Tecnologia",
    faqs: [
      {
        q: "Os appliances são compatíveis com pfSense e OPNsense?",
        a: "Sim. Nossos appliances são compatíveis com pfSense e OPNsense, além de suportarem diversos outros sistemas operacionais baseados em Linux e FreeBSD. Essa versatilidade permite utilizar o hardware em diferentes aplicações de firewall, segurança de redes, roteamento e infraestrutura de TI, conforme os requisitos de cada sistema operacional.",
      },
      {
        q: "Existe custo de licenciamento?",
        a: "Não. Os sistemas operacionais utilizados em nossos appliances, como pfSense Community Edition e OPNsense, são plataformas de código aberto (open source) e não exigem pagamento de licença para sua utilização. Assim, o cliente paga pelo equipamento, sem custos de licenciamento do sistema operacional.",
      },
      {
        q: "Os appliances permitem configurar VPN?",
        a: "A possibilidade de utilizar VPN depende da plataforma, da versão instalada e dos recursos/configurações do projeto. Informe à equipe da SWH o tipo de VPN e a quantidade estimada de conexões para validar o modelo indicado.",
      },
      {
        q: "É possível utilizar VLANs?",
        a: "A configuração de VLANs depende da plataforma e da arquitetura da rede. Consulte a equipe da SWH para confirmar os recursos e a configuração recomendada para seu cenário.",
      },
      {
        q: "Os equipamentos permitem utilizar mais de uma conexão de internet (WAN)?",
        a: "A utilização de múltiplas conexões WAN depende do modelo, da quantidade de interfaces disponíveis e da configuração do firewall. Informe os requisitos do projeto para receber uma indicação adequada.",
      },
      {
        q: "Os appliances oferecem aceleração criptográfica por hardware?",
        a: "A disponibilidade e o tipo de aceleração dependem do processador e da configuração do modelo. Consulte a ficha técnica do equipamento escolhido para confirmar esse recurso.",
      },
    ],
  },
  {
    id: "hardware-desempenho",
    title: "Hardware e Desempenho",
    faqs: [
      {
        q: "Quais configurações de hardware estão disponíveis?",
        a: "As configurações variam conforme o modelo. Consulte a página de produtos ou solicite à SWH a ficha técnica atualizada para comparar processador, memória, armazenamento e interfaces de rede.",
      },
      {
        q: "Quantas portas de rede os appliances possuem?",
        a: "A quantidade e o tipo de interfaces variam conforme o modelo. Consulte as especificações técnicas de cada appliance ou solicite orientação comercial.",
      },
      {
        q: "Há opções com portas de 1 GbE, 2.5 GbE ou 10 GbE?",
        a: "A disponibilidade depende dos modelos e das configurações oferecidas. Informe a velocidade e a quantidade de portas necessárias para que a equipe confirme as opções.",
      },
      {
        q: "Os appliances podem operar continuamente?",
        a: "Os requisitos de operação contínua devem ser avaliados conforme as especificações do modelo e as condições de instalação, ventilação e alimentação elétrica. Consulte a ficha técnica do equipamento.",
      },
    ],
  },
  {
    id: "instalacao-configuracao",
    title: "Instalação e Configuração",
    faqs: [
      {
        q: "O equipamento é entregue com o sistema instalado?",
        a: "Sim! Nossos appliances são fornecidos com o sistema operacional pré-instalado, prontos para que o cliente realize as configurações necessárias de acordo com suas necessidades e seu ambiente de rede.",
      },
      {
        q: "É possível migrar as configurações de outro firewall?",
        a: "A possibilidade de migração depende do equipamento de origem, da plataforma utilizada e dos recursos configurados. Como não prestamos diretamente serviços de migração, podemos indicar empresas parceiras que avaliam e executam esse tipo de serviço.",
      },
      {
        q: "Posso instalar outro sistema operacional?",
        a: "A compatibilidade depende do hardware, dos drivers e dos requisitos do sistema operacional pretendido. Consulte a SWH antes de realizar a instalação.",
      },
    ],
  },
  {
    id: "garantia-suporte",
    title: "Garantia e Suporte",
    faqs: [
      {
        q: "Como funciona o suporte técnico?",
        a: "A SWH Tecnologia atua na fabricação e no fornecimento de appliances e não presta diretamente serviços de suporte técnico, instalação ou configuração. Entretanto, contamos com empresas parceiras especializadas, que podemos indicar para clientes que necessitem desses serviços.",
      },
    ],
  },
  {
    id: "comercial",
    title: "Comercial",
    faqs: [
      {
        q: "Vocês fornecem nota fiscal e entregam para todo o Brasil?",
        a: "Sim! Todos os nossos fornecimentos são acompanhados da emissão de Nota Fiscal Eletrônica (NF-e). Realizamos entregas para todo o território nacional, atendendo clientes em todas as regiões do Brasil.",
      },
      {
        q: "Como solicitar um orçamento?",
        a: "Entre em contato com a equipe comercial da SWH e informe o modelo desejado, a quantidade e os requisitos do projeto. Nossa equipe poderá orientar sobre a solução e preparar uma proposta.",
      },
      {
        q: "A SWH atende empresas e integradores?",
        a: "Entre em contato com nossa equipe comercial para conhecer as condições de atendimento a empresas, revendedores e integradores.",
      },
      {
        q: "É possível desenvolver um projeto personalizado?",
        a: "A SWH pode avaliar solicitações específicas conforme os requisitos técnicos e a viabilidade do projeto. Envie sua necessidade para análise.",
      },
    ],
  },
];

function SuportePage() {
  return (
    <>
      <PageHeader
        eyebrow="Suporte"
        title="FAQ Técnico"
        description="Central de informações sobre compatibilidade, hardware, instalação, suporte e condições comerciais."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border ring-1 ring-border mb-16">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-6 sm:p-8 hover:bg-surface-soft transition-colors">
              <Icon className="size-7 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="w-full">
          <nav aria-label="Categorias da FAQ" className="flex flex-wrap gap-2 mb-10">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="border border-border px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {category.title}
              </a>
            ))}
          </nav>

          <div className="space-y-12">
            {faqCategories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold mb-5">{category.title}</h2>
                <Accordion type="single" collapsible className="border-y border-border">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.q}
                      value={`${category.id}-${index}`}
                      className="border-border px-4 sm:px-6"
                    >
                      <AccordionTrigger className="py-5 text-base sm:text-lg font-semibold hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 pr-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>

          <section className="mt-16 bg-navy text-white p-8 sm:p-10 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Não encontrou sua resposta?</h2>
            <p className="text-white/75 max-w-2xl mx-auto mb-8 leading-relaxed">
              Nossa equipe está pronta para ajudar. Fale com a equipe comercial da SWH Tecnologia para esclarecer dúvidas sobre nossos appliances e encontrar o equipamento adequado ao seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contato"
                className="bg-primary text-primary-foreground px-7 py-3.5 text-sm font-bold tracking-wider hover:brightness-110 transition-all uppercase"
              >
                Falar com um especialista
              </Link>
              <Link
                to="/contato"
                className="border border-white/40 text-white px-7 py-3.5 text-sm font-bold tracking-wider hover:bg-white/10 transition-colors uppercase"
              >
                Solicitar orçamento
              </Link>
            </div>
          </section>
        </div>
      </section>


    </>
  );
}
