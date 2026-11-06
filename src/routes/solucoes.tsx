import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Server, Lock, Activity, Eye, Network, Shield } from "lucide-react";
import { PageHeader } from "./empresa";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Appliance Firewall — Defesa e Segurança Cibernética | SWH" },
      {
        name: "description",
        content:
          "O Appliance de Firewall destaca-se como uma das principais linhas de defesa, atuando como um guardião vigilante contra acessos não autorizados e ataques cibernéticos.",
      },
      { property: "og:title", content: "Appliance Firewall SWH" },
      {
        property: "og:description",
        content: "Segurança de rede inteligente e confiável para sua empresa.",
      },
    ],
  }),
  component: SolucoesPage,
});

const features = [
  "Firewall - Proteção contra ataques e fácil gerenciamento de regras via browser",
  "IDS/IPS - Detecção e prevenção de intruso na rede",
  "Monitoramento Web Filter Controle de navegação web de forma autenticada ou transparente",
  "Controle do consumo de banda e priorização de serviços essenciais da rede",
  "Conectividade – DNS, DHCP, roteamento",
  "Monitoramento de tráfego na rede",
  "Controle de banda",
  "Regras de acessos por horário",
  "Proteção para colaboradores externos (home-office)",
  "VPN – Virtual Private Network - IPsec, OpenVPN, L2TP",
  "Multi-link",
  "Loadbalance, FailOver - Balanceamento dos links de Internet no mesmo servidor",
  "QOS - Serviço que permite limitar a banda de internet de toda a rede ou por IP",
  "DNS Dinamico",
  "Captive Portal - Login seguro para acesso a rede Wifi de dispositivos móveis e usuários visitantes",
  "Servidor DNS",
  "Integração LDAP, Active Directory",
  "TCP, UDP, TCP/UDP, ICMP, ESP, AH, GRE, IGMP, entre outros",
  "HA - Alta disponibilidade em caso de falha de hardware",
  "Relatórios detalhados de tráfego e tentativas de ataque",
];

function SolucoesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Segurança Cibernética"
        title="A Defesa Definitiva para sua Rede"
        description="Proteja dados críticos com appliances de firewall construídos para performance, estabilidade e segurança intransigente."
        image="/hero-firewall.png"
        bgColor="bg-[#020408]"
      />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Appliance Firewall
            </h2>
            <p>
              No cenário cada vez mais desafiador da segurança da informação, onde as ameaças digitais
              evoluem em ritmo acelerado, contar com defesas robustas deixou de ser uma opção —
              tornou-se uma obrigação estratégica para qualquer organização.
            </p>
            <p>
              Entre os recursos mais eficazes nessa batalha constante, o Appliance de Firewall destaca-se
              como uma das principais linhas de defesa, atuando como um guardião vigilante contra acessos
              não autorizados e protegendo dados críticos contra ataques cibernéticos.
            </p>

            <h3 className="text-2xl font-bold text-foreground pt-8 pb-4">
              O que é um Appliance de Firewall?
            </h3>
            <p>
              Muito mais do que um simples dispositivo, o appliance de firewall é uma solução de
              segurança completa e integrada, projetada para inspecionar e filtrar o tráfego de rede em
              tempo real. Ele identifica e bloqueia ameaças maliciosas, ao mesmo tempo em que garante a
              comunicação segura entre usuários e sistemas autorizados.
            </p>
            <p>
              Trata-se de um dispositivo físico dedicado, normalmente instalado entre a internet e a rede
              interna da organização, funcionando como uma barreira de proteção inteligente. Cada pacote
              de dados que entra ou sai da rede é examinado cuidadosamente, com base em um conjunto
              rigoroso de regras de segurança definidas pela equipe de TI. O firewall, então, decide se o
              tráfego deve ser autorizado ou bloqueado — evitando intrusões, vazamentos de dados e outros riscos.
            </p>
          </div>

          <div className="bg-surface-soft p-10 lg:p-14 border border-border rounded-xl shadow-sm sticky top-32">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Por Que Escolher um Appliance Dedicado?
            </h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Ao contrário das soluções puramente baseadas em software, o appliance de firewall é
                construído com hardware otimizado para desempenho e segurança. Isso significa maior
                capacidade de processamento, menor latência e maior throughput, assegurando que a
                segurança não comprometa o desempenho da rede.
              </p>
              <p>
                Essa arquitetura dedicada permite que as empresas lidem com altos volumes de tráfego e
                mantenham o funcionamento contínuo de aplicações críticas — mesmo sob ataque.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-border">
              <h4 className="font-bold text-foreground mb-4 uppercase text-xs tracking-widest font-mono">
                Escolhendo a Solução Certa
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                A escolha do appliance ideal deve considerar fatores como:
              </p>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  "Tamanho e complexidade da rede",
                  "Volume de tráfego diário",
                  "Exigências regulatórias ou de compliance",
                  "Requisitos específicos de segurança da organização"
                ].map(item => (
                  <li key={item} className="flex gap-3 items-center text-foreground">
                    <ShieldCheck className="size-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                O mercado oferece desde soluções acessíveis e eficazes para pequenas empresas até modelos
                corporativos de alta performance, capazes de proteger ambientes de missão crítica com
                múltiplas unidades e usuários remotos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Funcionalidades Avançadas para um Cenário Complexo</h2>
            <p className="text-white/70 text-lg text-pretty">
              Os appliances de firewall modernos vão além das funções básicas de filtragem. Eles contam
              com recursos avançados de segurança e gestão corporativa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-4 items-start pb-4 border-b border-white/5 last:border-0 md:last:border-b-0">
                <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/80 leading-relaxed font-medium text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-white/70 leading-relaxed text-pretty">
              Essas capacidades adicionais permitem que o dispositivo identifique e neutralize ameaças
              complexas antes que elas causem danos, oferecendo uma abordagem proativa à segurança cibernética.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-8">
          <Lock className="size-8 text-primary" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-balance">
          Segurança de Rede Inteligente e Confiável
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
          <p>
            Em resumo, os appliances de firewall são pilares fundamentais da segurança moderna. Eles não
            apenas bloqueiam ameaças externas, mas também oferecem visibilidade e controle sobre o
            tráfego da rede, ajudando as equipes de TI a tomar decisões estratégicas com base em dados.
          </p>
          <p>
            Ao atuarem como a espinha dorsal da infraestrutura de segurança, garantem proteção contínua,
            integridade dos dados e operações empresariais sem interrupções — requisitos indispensáveis
            para empresas que levam a segurança da informação a sério.
          </p>
        </div>
        <div className="mt-12">
          <Link
            to="/contato"
            className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all inline-flex items-center gap-2"
          >
            Proteger Minha Rede <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
