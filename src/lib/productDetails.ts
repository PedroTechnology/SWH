import { Cpu, Network, Key, HardDrive, Server, Layers, Shield, Zap, Radio } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProductHighlight = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export type ProductBadge = {
  label: string;
  color: string;
  textColor: string;
};

export type TechSpec = {
  label: string;
  value: string;
};

export type DownloadItem = {
  name: string;
  url: string;
  icon: string;
};

export type ProductDetail = {
  sku: string;
  name: string;
  category: "Firewall" | "PABX-IP" | "PC Industrial";
  categoryLabel: string;
  tier: string;
  format: string;
  shortDescription: string;
  fullDescription: string;
  highlights: ProductHighlight[];
  badges: ProductBadge[];
  techSpecs: TechSpec[];
  differentials: string[];
  downloads: DownloadItem[];
  officialUrl?: string;
};

export const productDetails: Record<string, ProductDetail> = {
  // ─── FIREWALL 1: WEA-EPJ414L ─────────────────────────────────────────────
  "WEA-EPJ414L": {
    sku: "WEA-EPJ414L",
    name: "Appliance Firewall pfSense WEA-EPJ414L",
    category: "Firewall",
    categoryLabel: "Firewall · Desktop Compacto",
    tier: "Entry Level",
    format: "Desktop Compacto",
    shortDescription:
      "Appliance para Firewall, Processador Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz com Suporte AES-NI, 4 x Intel® I225 2.5 Gigabit Ethernet, Saída de Vídeo VGA, Gabinete Mini ITX para bandeja super compacto produzido em poliestireno de alto impacto (PSAI). Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de pequeno e médio porte.",
    fullDescription: `Appliance para Firewall, Processador Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz com Suporte AES-NI, 4 x Intel® I225 2.5 Gigabit Ethernet, Saída de Vídeo VGA, Gabinete Mini ITX para bandeja super compacto produzido em poliestireno de alto impacto (PSAI).

Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de pequeno e médio porte.

O Appliance para Firewall pfSense é a escolha ideal para quem busca uma solução de segurança de rede poderosa, acessível e sem complicações. Ele pode ser facilmente configurado como firewall, roteador LAN/WAN, appliance VPN, servidor DHCP, servidor DNS e sistema IDS/IPS — tudo isso com suporte a pacotes adicionais que ampliam ainda mais suas funcionalidades. Com o software pfSense já pré-instalado, você conta com uma solução completa, livre de contratos anuais, taxas de licenciamento ou limitações de uso. É alto desempenho, flexibilidade e segurança em um único equipamento, pronto para atender às demandas da sua rede com eficiência e confiabilidade. Compacto, de baixo consumo energético e desenvolvido para oferecer longa vida útil, este appliance combina inovação e economia, sendo ideal para empresas que querem elevar a proteção de seus dados sem comprometer o orçamento.

Firewall - Proteção contra ataques e fácil gerenciamento de regras via browser; IDS/IPS - Detecção e prevenção de intruso na rede; Monitoramento Web Filter Controle de navegação web de forma autenticada ou transparente; Controle do consumo de banda e priorização de serviços essenciais da rede; Conectividade – DNS, DHCP, roteamento; Monitoramento de tráfego na rede; Controle de banda; Regras de acessos por horário; Proteção para colaboradores externos (home-office); VPN – Virtual Private Network - IPsec, OpenVPN, L2TP; Multi-link; Loadbalance, FailOver - Balanceamento dos links de Internet no mesmo servidor; QOS - Serviço que permite limitar a banda de internet de toda a rede ou por IP; DNS Dinâmico; Captive Portal - Login seguro para acesso a rede Wifi de dispositivos móveis e usuários visitantes; Servidor DNS; Integração LDAP, Active Directory; TCP, UDP, TCP/UDP, ICMP, ESP, AH, GRE, IGMP, entre outros; HA - Alta disponibilidade em caso de falha de hardware; Envio de notificações por E-mail.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz" },
      { icon: Network, label: "Interfaces", value: "4 x Intel® I225 2.5 Gigabit Ethernet" },
      { icon: Key, label: "Segurança", value: "Suporte AES-NI" },
    ],
    badges: [
      { label: "pfSense Plus", color: "bg-blue-600", textColor: "text-white" },
      { label: "OPNsense Ready", color: "bg-orange-500", textColor: "text-white" },
      { label: "Fanless", color: "bg-emerald-600", textColor: "text-white" },
      { label: "Silent 0dB", color: "bg-emerald-600", textColor: "text-white" },
      { label: "AES-NI", color: "bg-violet-600", textColor: "text-white" },
      { label: "2.5GbE", color: "bg-cyan-600", textColor: "text-white" },
      { label: "Fabricação Nacional", color: "bg-amber-600", textColor: "text-white" },
      { label: "Homologado Anatel", color: "bg-red-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz" },
      { label: "Saída de Vídeo", value: "VGA" },
      { label: "Memória", value: "1 x SODIMM DDR4 2400 MHz, max 8 GB" },
      {
        label: "Interfaces/comunicação",
        value: "4 x Intel I225 2.5 Gigabit Ethernet; 1 x Porta COM",
      },
      { label: "Armazenamento", value: "1 x MSATA" },
      { label: "Slot de Expansão", value: "1 x Mini PCIe para Wifi" },
      { label: "USB", value: "2 USB 2.0" },
      { label: "Fonte de alimentação", value: "Externo" },
      { label: "Consumo de energia", value: "Ocioso 5,16~5,52 e Pico máximo 8,40 Watts" },
      { label: "Dimensões (A x L x P)", value: "50 x 190 x 175 mm" },
      { label: "Peso", value: "1,2 Kg" },
    ],
    differentials: [
      "Fabricação própria e empresa pioneira no segmento.",
      "Nossos Appliances são fabricados com placa industrial para a utilização específica de Firewall com capacitores de qualidade superior, sem conexão de placas por PCI e risco zero de mau contato nas interfaces.",
      "Trabalhamos com prazo de entrega imediato e mantemos em estoque peças de reposição.",
      "Baixo custo de aquisição.",
      "Fácil gerenciamento via browser.",
      "Solução completa de firewall sem necessidade de licenciamento.",
      "Entregamos para todo o país e trabalhamos somente com transportadoras credenciadas tornando o processo de transporte muito mais seguro e ágil.",
    ],
    downloads: [
      { name: "Datasheet WEA-EPJ414L (PT-BR)", url: "#", icon: "📄" },
      { name: "Datasheet WEA-EPJ414L (EN)", url: "#", icon: "📄" },
      { name: "Manual de Instalação Rápida", url: "#", icon: "📋" },
      { name: "Guia pfSense Plus - Primeiros Passos", url: "#", icon: "🛡️" },
      { name: "Guia OPNsense - Configuração Inicial", url: "#", icon: "🛡️" },
      { name: "Certificado CE / FCC / RoHS", url: "#", icon: "📜" },
      { name: "Homologação Anatel", url: "#", icon: "📜" },
      { name: "Arquivo STEP/IGES (3D)", url: "#", icon: "📐" },
    ],
    officialUrl: "https://www.swh.net.br/firewall/appliance-firewall-pfsense-WEA-EPJ414L.shtm",
  },

  // ─── FIREWALL 2: WEA-SW1P4L ──────────────────────────────────────────────
  "WEA-SW1P4L": {
    sku: "WEA-SW1P4L",
    name: "Firewall Mini-ITX Industrial",
    category: "Firewall",
    categoryLabel: "Firewall · Mini-ITX Industrial",
    tier: "PMEs",
    format: "Mini-ITX Industrial",
    shortDescription:
      "Appliance para Firewall, Processador Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz com Suporte AES-NI, 4 x Intel® I226 2.5 Gigabit Ethernet, Saída de Vídeo VGA, Gabinete Mini ITX para bandeja super compacto produzido em poliestireno de alto impacto (PSAI). Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.",
    fullDescription: `Appliance para Firewall, Processador Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz com Suporte AES-NI, 4 x Intel® I226 2.5 Gigabit Ethernet, Saída de Vídeo VGA, Gabinete Mini ITX para bandeja super compacto produzido em poliestireno de alto impacto (PSAI).

Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.

O Appliance para Firewall pfSense é a escolha ideal para quem busca uma solução de segurança de rede poderosa, acessível e sem complicações. Ele pode ser facilmente configurado como firewall, roteador LAN/WAN, appliance VPN, servidor DHCP, servidor DNS e sistema IDS/IPS — tudo isso com suporte a pacotes adicionais que ampliam ainda mais suas funcionalidades. Com o software pfSense já pré-instalado, você conta com uma solução completa, livre de contratos anuais, taxas de licenciamento ou limitações de uso. É alto desempenho, flexibilidade e segurança em um único equipamento, pronto para atender às demandas da sua rede com eficiência e confiabilidade. Compacto, de baixo consumo energético e desenvolvido para oferecer longa vida útil, este appliance combina inovação e economia, sendo ideal para empresas que querem elevar a proteção de seus dados sem comprometer o orçamento.

Firewall - Proteção contra ataques e fácil gerenciamento de regras via browser; IDS/IPS - Detecção e prevenção de intruso na rede; Monitoramento Web Filter Controle de navegação web de forma autenticada ou transparente; Controle do consumo de banda e priorização de serviços essenciais da rede; Conectividade – DNS, DHCP, roteamento; Monitoramento de tráfego na rede; Controle de banda; Regras de acessos por horário; Proteção para colaboradores externos (home-office); VPN – Virtual Private Network - IPsec, OpenVPN, L2TP; Multi-link; Loadbalance, FailOver - Balanceamento dos links de Internet no mesmo servidor; QOS - Serviço que permite limitar a banda de internet de toda a rede ou por IP; DNS Dinâmico; Captive Portal - Login seguro para acesso a rede Wifi de dispositivos móveis e usuários visitantes; Servidor DNS; Integração LDAP, Active Directory; TCP, UDP, TCP/UDP, ICMP, ESP, AH, GRE, IGMP, entre outros; HA - Alta disponibilidade em caso de falha de hardware; Envio de notificações por E-mail.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz" },
      { icon: Network, label: "Interfaces", value: "4 x Intel® I226 2.5 Gigabit Ethernet" },
      { icon: Key, label: "Segurança", value: "Suporte AES-NI" },
    ],
    badges: [
      { label: "pfSense Plus", color: "bg-blue-600", textColor: "text-white" },
      { label: "OPNsense Ready", color: "bg-orange-500", textColor: "text-white" },
      { label: "Mini-ITX", color: "bg-slate-700", textColor: "text-white" },
      { label: "AES-NI", color: "bg-violet-600", textColor: "text-white" },
      { label: "2.5GbE", color: "bg-cyan-600", textColor: "text-white" },
      { label: "Industrial Grade", color: "bg-amber-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz" },
      { label: "Saída de Vídeo", value: "VGA" },
      { label: "Memória", value: "1 x SODIMM DDR4 2400 MHz, max 8 Gb" },
      {
        label: "Interfaces/comunicação",
        value: "4 x Intel I226 2.5 Gigabit Ethernet; 1 x Porta COM",
      },
      { label: "Armazenamento", value: "1 x MSATA" },
      { label: "Slot de Expansão", value: "1 x Mini PCIe para Wifi" },
      { label: "USB", value: "2 USB 2.0" },
      { label: "Fonte de alimentação", value: "Externo" },
      { label: "Consumo de energia", value: "Ocioso 5,16~5,52 e Pico máximo 8,40 Watts" },
      { label: "Dimensões (A x L x P)", value: "44 x 200 x 180 mm" },
      { label: "Peso", value: "1,2 Kg" },
    ],
    differentials: [
      "Fabricação própria e empresa pioneira no segmento.",
      "Nossos Appliances são fabricados com placa industrial para a utilização específica de Firewall com capacitores de qualidade superior, sem conexão de placas por PCI e risco zero de mau contato nas interfaces.",
      "Trabalhamos com prazo de entrega imediato e mantemos em estoque peças de reposição.",
      "Baixo custo de aquisição.",
      "Fácil gerenciamento via browser.",
      "Solução completa de firewall sem necessidade de licenciamento.",
      "Entregamos para todo o país e trabalhamos somente com transportadoras credenciadas tornando o processo de transporte muito mais seguro e ágil.",
    ],
    downloads: [
      { name: "Datasheet WEA-SW1P4L (PT-BR)", url: "#", icon: "📄" },
      { name: "Manual de Instalação", url: "#", icon: "📋" },
      { name: "Guia pfSense Plus", url: "#", icon: "🛡️" },
      { name: "Guia OPNsense", url: "#", icon: "🛡️" },
      { name: "Certificações CE / FCC / RoHS", url: "#", icon: "📜" },
    ],
  },

  // ─── FIREWALL 3: WEA-ROJ414L ─────────────────────────────────────────────
  "WEA-ROJ414L": {
    sku: "WEA-ROJ414L",
    name: "Firewall Rackmount 4 Portas",
    category: "Firewall",
    categoryLabel: "Firewall · Rack 1U",
    tier: "Médio Porte",
    format: "Rack 1U",
    shortDescription:
      "Appliance para Firewall, Processador Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz com Suporte AES-NI, 4 x Intel® I225 2.5 Gigabit Ethernet, Gabinete Rackmount de 1U, Saída de Vídeo VGA. Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.",
    fullDescription: `Appliance para Firewall, Processador Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz com Suporte AES-NI, 4 x Intel® I225 2.5 Gigabit Ethernet, Gabinete Rackmount de 1U, Saída de Vídeo VGA.

Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.

O Appliance para Firewall pfSense é a escolha ideal para quem busca uma solução de segurança de rede poderosa, acessível e sem complicações. Ele pode ser facilmente configurado como firewall, roteador LAN/WAN, appliance VPN, servidor DHCP, servidor DNS e sistema IDS/IPS — tudo isso com suporte a pacotes adicionais que ampliam ainda mais suas funcionalidades. Com o software pfSense já pré-instalado, você conta com uma solução completa, livre de contratos anuais, taxas de licenciamento ou limitações de uso. É alto desempenho, flexibilidade e segurança em um único equipamento, pronto para atender às demandas da sua rede com eficiência e confiabilidade. Compacto, de baixo consumo energético e desenvolvido para oferecer longa vida útil, este appliance combina inovação e economia, sendo ideal para empresas que querem elevar a proteção de seus dados sem comprometer o orçamento.

Firewall - Proteção contra ataques e fácil gerenciamento de regras via browser; IDS/IPS - Detecção e prevenção de intruso na rede; Monitoramento Web Filter Controle de navegação web de forma autenticada ou transparente; Controle do consumo de banda e priorização de serviços essenciais da rede; Conectividade – DNS, DHCP, roteamento; Monitoramento de tráfego na rede; Controle de banda; Regras de acessos por horário; Proteção para colaboradores externos (home-office); VPN – Virtual Private Network - IPsec, OpenVPN, L2TP; Multi-link; Loadbalance, FailOver - Balanceamento dos links de Internet no mesmo servidor; QOS - Serviço que permite limitar a banda de internet de toda a rede ou por IP; DNS Dinâmico; Captive Portal - Login seguro para acesso a rede Wifi de dispositivos móveis e usuários visitantes; Servidor DNS; Integração LDAP, Active Directory; TCP, UDP, TCP/UDP, ICMP, ESP, AH, GRE, IGMP, entre outros; HA - Alta disponibilidade em caso de falha de hardware; Envio de notificações por E-mail.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz" },
      { icon: Network, label: "Interfaces", value: "4 x Intel® I225 2.5 Gigabit Ethernet" },
      { icon: Key, label: "Segurança", value: "Suporte AES-NI" },
    ],
    badges: [
      { label: "pfSense Plus", color: "bg-blue-600", textColor: "text-white" },
      { label: "OPNsense Ready", color: "bg-orange-500", textColor: "text-white" },
      { label: "Rack 1U", color: "bg-slate-700", textColor: "text-white" },
      { label: "24/7 Operation", color: "bg-emerald-600", textColor: "text-white" },
      { label: "Industrial Grade", color: "bg-amber-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz" },
      { label: "Saída de Vídeo", value: "VGA" },
      { label: "Memória", value: "1 x SODIMM DDR4 2400 MHz, max 8 GB" },
      {
        label: "Interfaces/comunicação",
        value: "4 x Intel I225 2.5 Gigabit Ethernet; 1 x Porta COM",
      },
      { label: "Armazenamento", value: "1 x SATA III, 1 x MSATA" },
      { label: "Slot de Expansão", value: "1 x Mini PCIe para Wifi" },
      { label: "USB", value: "2 USB 2.0" },
      { label: "Fonte de alimentação", value: "Interno (Externo como opcional)" },
      { label: "Consumo de energia", value: "Ocioso 5,16~5,52 e Pico máximo 8,40 Watts" },
      { label: "Dimensões (A x L x P)", value: "44 x 430 x 250 mm" },
      { label: "Peso", value: "3,7 Kg" },
    ],
    differentials: [
      "Fabricação própria e empresa pioneira no segmento.",
      "Nossos Appliances são fabricados com placa industrial para a utilização específica de Firewall com capacitores de qualidade superior, sem conexão de placas por PCI e risco zero de mau contato nas interfaces.",
      "Trabalhamos com prazo de entrega imediato e mantemos em estoque peças de reposição.",
      "Baixo custo de aquisição.",
      "Fácil gerenciamento via browser.",
      "Solução completa de firewall sem necessidade de licenciamento.",
      "Entregamos para todo o país e trabalhamos somente com transportadoras credenciadas tornando o processo de transporte muito mais seguro e ágil.",
    ],
    downloads: [
      { name: "Datasheet WEA-ROJ414L (PT-BR)", url: "#", icon: "📄" },
      { name: "Manual de Instalação Rack", url: "#", icon: "📋" },
      { name: "Guia de Configuração pfSense", url: "#", icon: "🛡️" },
      { name: "Certificações CE / FCC / RoHS", url: "#", icon: "📜" },
    ],
  },

  // ─── FIREWALL 4: WEA-ROJ416L ─────────────────────────────────────────────
  "WEA-ROJ416L": {
    sku: "WEA-ROJ416L",
    name: "Firewall Rackmount 6 Portas",
    category: "Firewall",
    categoryLabel: "Firewall · Rack 1U",
    tier: "Médio Porte",
    format: "Rack 1U",
    shortDescription:
      "Appliance para Firewall, Processador Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz com Suporte AES-NI, 6 x Intel® I225 2.5 Gigabit Ethernet, Gabinete Rackmount de 1U, Saída de Vídeo VGA. Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.",
    fullDescription: `Appliance para Firewall, Processador Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz com Suporte AES-NI, 6 x Intel® I225 2.5 Gigabit Ethernet, Gabinete Rackmount de 1U, Saída de Vídeo VGA.

Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.

O Appliance para Firewall pfSense é a escolha ideal para quem busca uma solução de segurança de rede poderosa, acessível e sem complicações. Ele pode ser facilmente configurado como firewall, roteador LAN/WAN, appliance VPN, servidor DHCP, servidor DNS e sistema IDS/IPS — tudo isso com suporte a pacotes adicionais que ampliam ainda mais suas funcionalidades. Com o software pfSense já pré-instalado, você conta com uma solução completa, livre de contratos anuais, taxas de licenciamento ou limitações de uso. É alto desempenho, flexibilidade e segurança em um único equipamento, pronto para atender às demandas da sua rede com eficiência e confiabilidade. Compacto, de baixo consumo energético e desenvolvido para oferecer longa vida útil, este appliance combina inovação e economia, sendo ideal para empresas que querem elevar a proteção de seus dados sem comprometer o orçamento.

Firewall - Proteção contra ataques e fácil gerenciamento de regras via browser; IDS/IPS - Detecção e prevenção de intruso na rede; Monitoramento Web Filter Controle de navegação web de forma autenticada ou transparente; Controle do consumo de banda e priorização de serviços essenciais da rede; Conectividade – DNS, DHCP, roteamento; Monitoramento de tráfego na rede; Controle de banda; Regras de acessos por horário; Proteção para colaboradores externos (home-office); VPN – Virtual Private Network - IPsec, OpenVPN, L2TP; Multi-link; Loadbalance, FailOver - Balanceamento dos links de Internet no mesmo servidor; QOS - Serviço que permite limitar a banda de internet de toda a rede ou por IP; DNS Dinâmico; Captive Portal - Login seguro para acesso a rede Wifi de dispositivos móveis e usuários visitantes; Servidor DNS; Integração LDAP, Active Directory; TCP, UDP, TCP/UDP, ICMP, ESP, AH, GRE, IGMP, entre outros; HA - Alta disponibilidade em caso de falha de hardware; Envio de notificações por E-mail.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz" },
      { icon: Network, label: "Interfaces", value: "6 x Intel® I225 2.5 Gigabit Ethernet" },
      { icon: Key, label: "Segurança", value: "Suporte AES-NI" },
    ],
    badges: [
      { label: "pfSense Plus", color: "bg-blue-600", textColor: "text-white" },
      { label: "OPNsense Ready", color: "bg-orange-500", textColor: "text-white" },
      { label: "Rack 1U", color: "bg-slate-700", textColor: "text-white" },
      { label: "6 Interfaces", color: "bg-cyan-600", textColor: "text-white" },
      { label: "Multi-WAN", color: "bg-emerald-600", textColor: "text-white" },
      { label: "Industrial Grade", color: "bg-amber-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz" },
      { label: "Saída de Vídeo", value: "VGA" },
      { label: "Memória", value: "1 x SODIMM DDR4 2400 MHz, max 16GB" },
      { label: "Interfaces", value: "6 x Intel I225 2.5 Gigabit Ethernet; 1 x Porta COM" },
      { label: "Armazenamento", value: "1 x SATA III, 1 x MSATA" },
      { label: "Slot de Expansão", value: "1 x Mini PCIe para Wifi" },
      { label: "USB", value: "2 x USB 2.0" },
      { label: "Porta COM", value: "1 x COM RJ45" },
      { label: "Fonte de alimentação", value: "Interno" },
      { label: "Consumo de energia", value: "Ocioso 5,16~5,52 e Pico máximo 8,40 Watts" },
      { label: "Dimensões (A x L x P)", value: "44 x 430 x 250 mm" },
      { label: "Peso", value: "3,7 Kg" },
    ],
    differentials: [
      "Fabricação própria e empresa pioneira no segmento.",
      "Nossos Appliances são fabricados com placa industrial para a utilização específica de Firewall com capacitores de qualidade superior, sem conexão de placas por PCI e risco zero de mau contato nas interfaces.",
      "Trabalhamos com prazo de entrega imediato e mantemos em estoque peças de reposição.",
      "Baixo custo de aquisição.",
      "Fácil gerenciamento via browser.",
      "Solução completa de firewall sem necessidade de licenciamento.",
      "Entregamos para todo o país e trabalhamos somente com transportadoras credenciadas tornando o processo de transporte muito mais seguro e ágil.",
    ],
    downloads: [
      { name: "Datasheet WEA-ROJ416L (PT-BR)", url: "#", icon: "📄" },
      { name: "Manual de Instalação Rack", url: "#", icon: "📋" },
      { name: "Guia Multi-WAN pfSense", url: "#", icon: "🛡️" },
      { name: "Certificações CE / FCC / RoHS", url: "#", icon: "📜" },
    ],
  },

  // ─── FIREWALL 5: WEA-B75A6L ──────────────────────────────────────────────
  "WEA-B75A6L": {
    sku: "WEA-B75A6L",
    name: "Firewall Enterprise SFP",
    category: "Firewall",
    categoryLabel: "Firewall · Rack 1U",
    tier: "Enterprise",
    format: "Rack 1U",
    shortDescription:
      "Appliance para Firewall, Processador Intel® Core I5, Suporte a AES-NI, com 6 x Intel® 82583V Gigabit Ethernet, Gabinete Rackmount de 1U, Saída de Vídeo VGA. Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.",
    fullDescription: `Appliance para Firewall, Processador Intel® Core I5, Suporte a AES-NI, com 6 x Intel® 82583V Gigabit Ethernet, Gabinete Rackmount de 1U, Saída de Vídeo VGA.

Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.

O Appliance para Firewall pfSense é a escolha ideal para quem busca uma solução de segurança de rede poderosa, acessível e sem complicações. Ele pode ser facilmente configurado como firewall, roteador LAN/WAN, appliance VPN, servidor DHCP, servidor DNS e sistema IDS/IPS — tudo isso com suporte a pacotes adicionais que ampliam ainda mais suas funcionalidades. Com o software pfSense já pré-instalado, você conta com uma solução completa, livre de contratos anuais, taxas de licenciamento ou limitações de uso. É alto desempenho, flexibilidade e segurança em um único equipamento, pronto para atender às demandas da sua rede com eficiência e confiabilidade. Compacto, de baixo consumo energético e desenvolvido para oferecer longa vida útil, este appliance combina inovação e economia, sendo ideal para empresas que querem elevar a proteção de seus dados sem comprometer o orçamento.

Firewall - Proteção contra ataques e fácil gerenciamento de regras via browser; IDS/IPS - Detecção e prevenção de intruso na rede; Monitoramento Web Filter Controle de navegação web de forma autenticada ou transparente; Controle do consumo de banda e priorização de serviços essenciais da rede; Conectividade – DNS, DHCP, roteamento; Monitoramento de tráfego na rede; Controle de banda; Regras de acessos por horário; Proteção para colaboradores externos (home-office); VPN – Virtual Private Network - IPsec, OpenVPN, L2TP; Multi-link; Loadbalance, FailOver - Balanceamento dos links de Internet no mesmo servidor; QOS - Serviço que permite limitar a banda de internet de toda a rede ou por IP; DNS Dinâmico; Captive Portal - Login seguro para acesso a rede Wifi de dispositivos móveis e usuários visitantes; Servidor DNS; Integração LDAP, Active Directory; TCP, UDP, TCP/UDP, ICMP, ESP, AH, GRE, IGMP, entre outros; HA - Alta disponibilidade em caso de falha de hardware; Envio de notificações por E-mail.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Intel® Core I5" },
      { icon: Network, label: "Interfaces", value: "6 x Intel® 82583V Gigabit Ethernet" },
      { icon: Key, label: "Segurança", value: "Suporte a AES-NI" },
    ],
    badges: [
      { label: "pfSense Plus", color: "bg-blue-600", textColor: "text-white" },
      { label: "OPNsense Ready", color: "bg-orange-500", textColor: "text-white" },
      { label: "SFP Fiber", color: "bg-cyan-600", textColor: "text-white" },
      { label: "AES-NI", color: "bg-violet-600", textColor: "text-white" },
      { label: "Enterprise", color: "bg-slate-700", textColor: "text-white" },
      { label: "ISP Grade", color: "bg-emerald-600", textColor: "text-white" },
      { label: "Industrial Grade", color: "bg-amber-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Support Intel Sandybridge/IvyBridge 32nm/22nm LGA1155" },
      { label: "Saída de Vídeo", value: "VGA" },
      { label: "Memória", value: "2 x SODIMM DDR3 1600 MHz, max 16 GB" },
      { label: "Interfaces", value: "6 x Intel 82583V Gigabit Ethernet" },
      { label: "Armazenamento", value: '2 x HD/SSD SATA 2,5"' },
      {
        label: "Slot de Expansão",
        value: "1 x Mini PCIe para M-sata e 1 x Mini PCIe para Wifi, 1 x CF Card",
      },
      { label: "USB", value: "1 x USB 3.0, 1 x USB 2.0" },
      { label: "Porta COM", value: "1 x COM RJ45" },
      { label: "Fonte de alimentação", value: "Interno" },
      { label: "Consumo de energia", value: "Ocioso 5,16~5,52 e Pico máximo 8,40 Watts" },
      { label: "Dimensões (A x L x P)", value: "44 x 430 x 280 mm" },
      { label: "Peso", value: "4,5 Kg" },
    ],
    differentials: [
      "Fabricação própria e empresa pioneira no segmento.",
      "Nossos Appliances são fabricados com placa industrial para a utilização específica de Firewall com capacitores de qualidade superior, sem conexão de placas por PCI e risco zero de mau contato nas interfaces.",
      "Trabalhamos com prazo de entrega imediato e mantemos em estoque peças de reposição.",
      "Baixo custo de aquisição.",
      "Fácil gerenciamento via browser.",
      "Solução completa de firewall sem necessidade de licenciamento.",
      "Entregamos para todo o país e trabalhamos somente com transportadoras credenciadas tornando o processo de transporte muito mais seguro e ágil.",
    ],
    downloads: [
      { name: "Datasheet WEA-B75A6L (PT-BR)", url: "#", icon: "📄" },
      { name: "Manual de Instalação", url: "#", icon: "📋" },
      { name: "Guia de Configuração SFP", url: "#", icon: "🛡️" },
      { name: "Guia BGP pfSense", url: "#", icon: "🛡️" },
      { name: "Certificações CE / FCC / RoHS", url: "#", icon: "📜" },
    ],
  },

  // ─── FIREWALL 6: WEA-AT1581N ─────────────────────────────────────────────
  "WEA-AT1581N": {
    sku: "WEA-AT1581N",
    name: "Firewall High-Density 8 Portas",
    category: "Firewall",
    categoryLabel: "Firewall · Rack 1U",
    tier: "Enterprise",
    format: "Rack 1U",
    shortDescription:
      "Appliance para Firewall, Processador Intel® Core Celeron/Pentium/I3/I5/I7, Suporte a AES-NI, com 8 x Intel® I226 Gigabit Ethernet, Gabinete Rackmount de 1U, Saída de Vídeo VGA. Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.",
    fullDescription: `Appliance para Firewall, Processador Intel® Core Celeron/Pentium/I3/I5/I7, Suporte a AES-NI, com 8 x Intel® I226 Gigabit Ethernet, Gabinete Rackmount de 1U, Saída de Vídeo VGA.

Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.

O Appliance para Firewall pfSense é a escolha ideal para quem busca uma solução de segurança de rede poderosa, acessível e sem complicações. Ele pode ser facilmente configurado como firewall, roteador LAN/WAN, appliance VPN, servidor DHCP, servidor DNS e sistema IDS/IPS — tudo isso com suporte a pacotes adicionais que ampliam ainda mais suas funcionalidades. Com o software pfSense já pré-instalado, você conta com uma solução completa, livre de contratos anuais, taxas de licenciamento ou limitações de uso. É alto desempenho, flexibilidade e segurança em um único equipamento, pronto para atender às demandas da sua rede com eficiência e confiabilidade. Compacto, de baixo consumo energético e desenvolvido para oferecer longa vida útil, este appliance combina inovação e economia, sendo ideal para empresas que querem elevar a proteção de seus dados sem comprometer o orçamento.

Firewall - Proteção contra ataques e fácil gerenciamento de regras via browser; IDS/IPS - Detecção e prevenção de intruso na rede; Monitoramento Web Filter Controle de navegação web de forma autenticada ou transparente; Controle do consumo de banda e priorização de serviços essenciais da rede; Conectividade – DNS, DHCP, roteamento; Monitoramento de tráfego na rede; Controle de banda; Regras de acessos por horário; Proteção para colaboradores externos (home-office); VPN – Virtual Private Network - IPsec, OpenVPN, L2TP; Multi-link; Loadbalance, FailOver - Balanceamento dos links de Internet no mesmo servidor; QOS - Serviço que permite limitar a banda de internet de toda a rede ou por IP; DNS Dinâmico; Captive Portal - Login seguro para acesso a rede Wifi de dispositivos móveis e usuários visitantes; Servidor DNS; Integração LDAP, Active Directory; TCP, UDP, TCP/UDP, ICMP, ESP, AH, GRE, IGMP, entre outros; HA - Alta disponibilidade em caso de falha de hardware; Envio de notificações por E-mail.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Intel® Core Celeron/Pentium/I3/I5/I7" },
      { icon: Network, label: "Interfaces", value: "8 x Intel® I226 Gigabit Ethernet" },
      { icon: Key, label: "Segurança", value: "Suporte a AES-NI" },
    ],
    badges: [
      { label: "pfSense Plus", color: "bg-blue-600", textColor: "text-white" },
      { label: "OPNsense Ready", color: "bg-orange-500", textColor: "text-white" },
      { label: "High Density", color: "bg-cyan-600", textColor: "text-white" },
      { label: "SFP+ Ready", color: "bg-violet-600", textColor: "text-white" },
      { label: "Enterprise", color: "bg-slate-700", textColor: "text-white" },
      { label: "HA Ready", color: "bg-emerald-600", textColor: "text-white" },
      { label: "Industrial Grade", color: "bg-amber-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Intel® Core i7 / i5 / i3 / Pentium Processor LGA 1151" },
      { label: "Saída de Vídeo", value: "VGA" },
      { label: "Memória", value: "2 x SODIMM DDR4 2400/2133 MHz, max 32 GB" },
      { label: "Interfaces", value: "8 x Intel® I226 Gigabit Ethernet" },
      { label: "Expansão", value: "2 x 10GbE SPF; 4 x GbE RJ45; 4 x GbE SPF; 4 x 10 GbE SPF+" },
      { label: "Armazenamento", value: '2 x 2.5" SATA III' },
      { label: "Slot de Expansão", value: "1 x Mini PCIe para M-sata" },
      { label: "USB", value: "2 x USB 3.0" },
      { label: "Porta COM", value: "1 x COM RJ45" },
      { label: "Fonte de alimentação", value: "220W" },
      { label: "Dimensões (L x A x P)", value: "428x44x321mm" },
      { label: "Peso", value: "4,5 Kg" },
    ],
    differentials: [
      "Fabricação própria e empresa pioneira no segmento.",
      "Nossos Appliances são fabricados com placa industrial para a utilização específica de Firewall com capacitores de qualidade superior, sem conexão de placas por PCI e risco zero de mau contato nas interfaces.",
      "Trabalhamos com prazo de entrega imediato e mantemos em estoque peças de reposição.",
      "Baixo custo de aquisição.",
      "Fácil gerenciamento via browser.",
      "Solução completa de firewall sem necessidade de licenciamento.",
      "Entregamos para todo o país e trabalhamos somente com transportadoras credenciadas tornando o processo de transporte muito mais seguro e ágil.",
    ],
    downloads: [
      { name: "Datasheet WEA-AT1581N (PT-BR)", url: "#", icon: "📄" },
      { name: "Manual de Instalação", url: "#", icon: "📋" },
      { name: "Guia de Alta Disponibilidade CARP", url: "#", icon: "🛡️" },
      { name: "Guia SFP+ Uplinks", url: "#", icon: "🛡️" },
      { name: "Certificações CE / FCC / RoHS", url: "#", icon: "📜" },
    ],
  },

  // ─── FIREWALL 7: WEA-F592JE ──────────────────────────────────────────────
  "WEA-F592JE": {
    sku: "WEA-F592JE",
    name: "Plataforma Enterprise Plus",
    category: "Firewall",
    categoryLabel: "Firewall · Rack 1U",
    tier: "Enterprise Plus",
    format: "Rack 1U",
    shortDescription:
      "Appliance para Firewall, Processador Intel® Core Celeron/Pentium/I3/I5/I7, Suporte a AES-NI, com 8 x Gigabit Ethernet Intel® I211-AT, expansível até 12, Gabinete Rackmount de 1U, Saída de Vídeo HDMI. Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.",
    fullDescription: `Appliance para Firewall, Processador Intel® Core Celeron/Pentium/I3/I5/I7, Suporte a AES-NI, com 8 x Gigabit Ethernet Intel® I211-AT, expansível até 12, Gabinete Rackmount de 1U, Saída de Vídeo HDMI.

Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.

O Appliance para Firewall pfSense é a escolha ideal para quem busca uma solução de segurança de rede poderosa, acessível e sem complicações. Ele pode ser facilmente configurado como firewall, roteador LAN/WAN, appliance VPN, servidor DHCP, servidor DNS e sistema IDS/IPS — tudo isso com suporte a pacotes adicionais que ampliam ainda mais suas funcionalidades. Com o software pfSense já pré-instalado, você conta com uma solução completa, livre de contratos anuais, taxas de licenciamento ou limitações de uso. É alto desempenho, flexibilidade e segurança em um único equipamento, pronto para atender às demandas da sua rede com eficiência e confiabilidade. Compacto, de baixo consumo energético e desenvolvido para oferecer longa vida útil, este appliance combina inovação e economia, sendo ideal para empresas que querem elevar a proteção de seus dados sem comprometer o orçamento.

Firewall - Proteção contra ataques e fácil gerenciamento de regras via browser; IDS/IPS - Detecção e prevenção de intruso na rede; Monitoramento Web Filter Controle de navegação web de forma autenticada ou transparente; Controle do consumo de banda e priorização de serviços essenciais da rede; Conectividade – DNS, DHCP, roteamento; Monitoramento de tráfego na rede; Controle de banda; Regras de acessos por horário; Proteção para colaboradores externos (home-office); VPN – Virtual Private Network - IPsec, OpenVPN, L2TP; Multi-link; Loadbalance, FailOver - Balanceamento dos links de Internet no mesmo servidor; QOS - Serviço que permite limitar a banda de internet de toda a rede ou por IP; DNS Dinâmico; Captive Portal - Login seguro para acesso a rede Wifi de dispositivos móveis e usuários visitantes; Servidor DNS; Integração LDAP, Active Directory; TCP, UDP, TCP/UDP, ICMP, ESP, AH, GRE, IGMP, entre outros; HA - Alta disponibilidade em caso de falha de hardware; Envio de notificações por E-mail.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Intel® Core Celeron/Pentium/I3/I5/I7" },
      {
        icon: Network,
        label: "Interfaces",
        value: "8 x Gigabit Ethernet Intel® I211-AT, expansível até 12",
      },
      { icon: Key, label: "Segurança", value: "Suporte a AES-NI" },
    ],
    badges: [
      { label: "pfSense Plus", color: "bg-blue-600", textColor: "text-white" },
      { label: "OPNsense Ready", color: "bg-orange-500", textColor: "text-white" },
      { label: "Enterprise Plus", color: "bg-violet-600", textColor: "text-white" },
      { label: "PCIe Expansion", color: "bg-cyan-600", textColor: "text-white" },
      { label: "Rack 1U", color: "bg-slate-700", textColor: "text-white" },
      { label: "Industrial Grade", color: "bg-amber-600", textColor: "text-white" },
    ],
    techSpecs: [
      {
        label: "CPU",
        value:
          "6º / 7º Geração Intel® Core i7 / i5 / i3 / Pentium Processor LGA 1151 (Formerly Skylake and Kaby Lake)",
      },
      { label: "Saída de Vídeo", value: "HDMI" },
      { label: "Memória", value: "2 x SODIMM DDR3L 1600 MHz, max 16 GB" },
      { label: "Interfaces", value: "8 x Intel® I211-AT Gigabit Ethernet, expansível até 12" },
      { label: "Armazenamento", value: '2 x 2.5" SATA III 6Gb/s with RAID 1' },
      { label: "Slot de Expansão", value: "1 x Mini PCIe para M-sata" },
      { label: "USB", value: "2 x USB 3.0" },
      { label: "Porta COM", value: "1 x COM RJ45" },
      { label: "Fonte de alimentação", value: "Interno" },
      { label: "Dimensões (A x L x P)", value: "44 x 430 x 250 mm" },
      { label: "Peso", value: "4,5 Kg" },
    ],
    differentials: [
      "Fabricação própria e empresa pioneira no segmento.",
      "Nossos Appliances são fabricados com placa industrial para a utilização específica de Firewall com capacitores de qualidade superior, sem conexão de placas por PCI e risco zero de mau contato nas interfaces.",
      "Trabalhamos com prazo de entrega imediato e mantemos em estoque peças de reposição.",
      "Baixo custo de aquisição.",
      "Fácil gerenciamento via browser.",
      "Solução completa de firewall sem necessidade de licenciamento.",
      "Entregamos para todo o país e trabalhamos somente com transportadoras credenciadas tornando o processo de transporte muito mais seguro e ágil.",
    ],
    downloads: [
      { name: "Datasheet WEA-F592JE (PT-BR)", url: "#", icon: "📄" },
      { name: "Manual de Instalação e Expansão PCIe", url: "#", icon: "📋" },
      { name: "Guia Enterprise pfSense Plus", url: "#", icon: "🛡️" },
      { name: "Certificações CE / FCC / RoHS", url: "#", icon: "📜" },
    ],
  },

  // ─── FIREWALL 8: WEA-AT1781 ──────────────────────────────────────────────
  "WEA-AT1781": {
    sku: "WEA-AT1781",
    name: "Firewall Alta Performance",
    category: "Firewall",
    categoryLabel: "Firewall · Rack 1U",
    tier: "Alta Performance",
    format: "Rack 1U",
    shortDescription:
      "Appliance para Firewall, Processador Intel® Core Celeron/Pentium/I3/I5/I7, Suporte a AES-NI, com 8 x GbE LAN com opção de adição 4 x GbE SPF ou 4 x 10Gbe SPF+, Gabinete Rackmount de 1U, Saída de Vídeo VGA. Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.",
    fullDescription: `Appliance para Firewall, Processador Intel® Core Celeron/Pentium/I3/I5/I7, Suporte a AES-NI, com 8 x GbE LAN com opção de adição 4 x GbE SPF ou 4 x 10Gbe SPF+, Gabinete Rackmount de 1U, Saída de Vídeo VGA.

Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.

O Appliance para Firewall pfSense é a escolha ideal para quem busca uma solução de segurança de rede poderosa, acessível e sem complicações. Ele pode ser facilmente configurado como firewall, roteador LAN/WAN, appliance VPN, servidor DHCP, servidor DNS e sistema IDS/IPS — tudo isso com suporte a pacotes adicionais que ampliam ainda mais suas funcionalidades. Com o software pfSense já pré-instalado, você conta com uma solução completa, livre de contratos anuais, taxas de licenciamento ou limitações de uso. É alto desempenho, flexibilidade e segurança em um único equipamento, pronto para atender às demandas da sua rede com eficiência e confiabilidade. Compacto, de baixo consumo energético e desenvolvido para oferecer longa vida útil, este appliance combina inovação e economia, sendo ideal para empresas que querem elevar a proteção de seus dados sem comprometer o orçamento.

Firewall - Proteção contra ataques e fácil gerenciamento de regras via browser; IDS/IPS - Detecção e prevenção de intruso na rede; Monitoramento Web Filter Controle de navegação web de forma autenticada ou transparente; Controle do consumo de banda e priorização de serviços essenciais da rede; Conectividade – DNS, DHCP, roteamento; Monitoramento de tráfego na rede; Controle de banda; Regras de acessos por horário; Proteção para colaboradores externos (home-office); VPN – Virtual Private Network - IPsec, OpenVPN, L2TP; Multi-link; Loadbalance, FailOver - Balanceamento dos links de Internet no mesmo servidor; QOS - Serviço que permite limitar a banda de internet de toda a rede ou por IP; DNS Dinâmico; Captive Portal - Login seguro para acesso a rede Wifi de dispositivos móveis e usuários visitantes; Servidor DNS; Integração LDAP, Active Directory; TCP, UDP, TCP/UDP, ICMP, ESP, AH, GRE, IGMP, entre outros; HA - Alta disponibilidade em caso de falha de hardware; Envio de notificações por E-mail.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Intel® Core Celeron/Pentium/I3/I5/I7" },
      {
        icon: Network,
        label: "Interfaces",
        value: "8 x GbE LAN com opção de adição 4 x GbE SPF ou 4 x 10Gbe SPF+",
      },
      { icon: Key, label: "Segurança", value: "Suporte a AES-NI" },
    ],
    badges: [
      { label: "pfSense Plus", color: "bg-blue-600", textColor: "text-white" },
      { label: "OPNsense Ready", color: "bg-orange-500", textColor: "text-white" },
      { label: "Alta Performance", color: "bg-rose-600", textColor: "text-white" },
      { label: "Backbone", color: "bg-violet-600", textColor: "text-white" },
      { label: "ISP Grade", color: "bg-cyan-600", textColor: "text-white" },
      { label: "Rack 1U", color: "bg-slate-700", textColor: "text-white" },
      { label: "Industrial Grade", color: "bg-amber-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Intel® Core i7 / i5 / i3 / Pentium Processor LGA 1151" },
      { label: "Saída de Vídeo", value: "VGA" },
      { label: "Memória", value: "2 x SODIMM DDR4 2400/2133 MHz, max 32 GB" },
      { label: "Interfaces", value: "8 x GbE LAN" },
      { label: "Expansão", value: "4 x GbE SPF; 4 x 10 GbE SPF+" },
      { label: "Armazenamento", value: '1 x 2.5" SATA III' },
      { label: "Slot de Expansão", value: "1 x Mini PCIe para M-sata" },
      { label: "USB", value: "2 x USB 3.0" },
      { label: "Porta COM", value: "1 x COM RJ45" },
      { label: "Fonte de alimentação", value: "220W" },
      { label: "Dimensões (L x A x P)", value: "428x44x321mm" },
      { label: "Peso", value: "4,5 Kg" },
    ],
    differentials: [
      "Fabricação própria e empresa pioneira no segmento.",
      "Nossos Appliances são fabricados com placa industrial para a utilização específica de Firewall com capacitores de qualidade superior, sem conexão de placas por PCI e risco zero de mau contato nas interfaces.",
      "Trabalhamos com prazo de entrega imediato e mantemos em estoque peças de reposição.",
      "Baixo custo de aquisição.",
      "Fácil gerenciamento via browser.",
      "Solução completa de firewall sem necessidade de licenciamento.",
      "Entregamos para todo o país e trabalhamos somente com transportadoras credenciadas tornando o processo de transporte muito mais seguro e ágil.",
    ],
    downloads: [
      { name: "Datasheet WEA-AT1781 (PT-BR)", url: "#", icon: "📄" },
      { name: "Manual de Instalação", url: "#", icon: "📋" },
      { name: "Guia BGP e Roteamento Avançado", url: "#", icon: "🛡️" },
      { name: "Guia IDS/IPS Suricata", url: "#", icon: "🛡️" },
      { name: "Certificações CE / FCC / RoHS", url: "#", icon: "📜" },
    ],
  },

  // ─── FIREWALL 9: WEA-ATC236 ──────────────────────────────────────────────
  "WEA-ATC236": {
    sku: "WEA-ATC236",
    name: "Firewall Missão Crítica Xeon",
    category: "Firewall",
    categoryLabel: "Firewall · Rack 1U",
    tier: "Missão Crítica",
    format: "Rack 1U",
    shortDescription:
      "Appliance para Firewall, Processador Intel® Core i7/i5/i3, Pentium, Celeron, Xeon E3 1200 v5/v6, Suporte a AES-NI, com 2 x GbE LAN com opção de adição modulos, Gabinete Rackmount de 1U, Saída de Vídeo VGA. Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.",
    fullDescription: `Appliance para Firewall, Processador Intel® Core i7/i5/i3, Pentium, Celeron, Xeon E3 1200 v5/v6, Suporte a AES-NI, com 2 x GbE LAN com opção de adição modulos, Gabinete Rackmount de 1U, Saída de Vídeo VGA.

Compatível com distribuições gratuitas de Firewall baseado em FreeBSD, Pfsense, Opnsense, CentOS, entre outras distribuições em Linux, sendo muitas destas com nível de segurança superior as soluções pagas, é a solução ideal para empresas de médio porte.

O Appliance para Firewall pfSense é a escolha ideal para quem busca uma solução de segurança de rede poderosa, acessível e sem complicações. Ele pode ser facilmente configurado como firewall, roteador LAN/WAN, appliance VPN, servidor DHCP, servidor DNS e sistema IDS/IPS — tudo isso com suporte a pacotes adicionais que ampliam ainda mais suas funcionalidades. Com o software pfSense já pré-instalado, você conta com uma solução completa, livre de contratos anuais, taxas de licenciamento ou limitações de uso. É alto desempenho, flexibilidade e segurança em um único equipamento, pronto para atender às demandas da sua rede com eficiência e confiabilidade. Compacto, de baixo consumo energético e desenvolvido para oferecer longa vida útil, este appliance combina inovação e economia, sendo ideal para empresas que querem elevar a proteção de seus dados sem comprometer o orçamento.

Firewall - Proteção contra ataques e fácil gerenciamento de regras via browser; IDS/IPS - Detecção e prevenção de intruso na rede; Monitoramento Web Filter Controle de navegação web de forma autenticada ou transparente; Controle do consumo de banda e priorização de serviços essenciais da rede; Conectividade – DNS, DHCP, roteamento; Monitoramento de tráfego na rede; Controle de banda; Regras de acessos por horário; Proteção para colaboradores externos (home-office); VPN – Virtual Private Network - IPsec, OpenVPN, L2TP; Multi-link; Loadbalance, FailOver - Balanceamento dos links de Internet no mesmo servidor; QOS - Serviço que permite limitar a banda de internet de toda a rede ou por IP; DNS Dinâmico; Captive Portal - Login seguro para acesso a rede Wifi de dispositivos móveis e usuários visitantes; Servidor DNS; Integração LDAP, Active Directory; TCP, UDP, TCP/UDP, ICMP, ESP, AH, GRE, IGMP, entre outros; HA - Alta disponibilidade em caso de falha de hardware; Envio de notificações por E-mail.`,
    highlights: [
      {
        icon: Cpu,
        label: "Processador",
        value: "Intel Core i7/i5/i3, Pentium, Celeron, Xeon E3 1200 v5/v6",
      },
      {
        icon: Network,
        label: "Interfaces",
        value: "2 x Intel® I211AT Gigabit Ethernet, com opção de até 32 adicionais",
      },
      { icon: Key, label: "Segurança", value: "Suporte a AES-NI" },
    ],
    badges: [
      { label: "pfSense Plus", color: "bg-blue-600", textColor: "text-white" },
      { label: "OPNsense Ready", color: "bg-orange-500", textColor: "text-white" },
      { label: "Intel Xeon", color: "bg-rose-700", textColor: "text-white" },
      { label: "ECC Memory", color: "bg-violet-600", textColor: "text-white" },
      { label: "10GbE", color: "bg-cyan-600", textColor: "text-white" },
      { label: "Missão Crítica", color: "bg-red-600", textColor: "text-white" },
      { label: "Industrial Grade", color: "bg-amber-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Intel Core i7/i5/i3, Pentium, Celeron, Xeon E3 1200 v5/v6" },
      { label: "Saída de Vídeo", value: "VGA" },
      { label: "Memória", value: "4 x SODIMM DDR4 2400/2133 MHz, max 64 GB" },
      { label: "Interfaces", value: "2 x GbE LAN" },
      {
        label: "Expansão",
        value:
          "2 x GbE RJ45; 4 x GbE RJ45; 8 x GbE RJ45; 2 x GbE SPF; 4 x GbE SPF; 8 x GbE SPF; 2 x 10 GbE SPF+; 4 x 10 GbE SPF+; 8 x 10 GbE SPF+",
      },
      { label: "Armazenamento", value: '3 x 2.5" SATA III' },
      { label: "Slot de Expansão", value: "1 x Mini PCIe para M-sata" },
      { label: "USB", value: "2 x USB 3.0" },
      { label: "Porta COM", value: "1 x COM RJ45" },
      { label: "Fonte de alimentação", value: "220W" },
      { label: "Dimensões (L x A x P)", value: "438x44x550mm" },
      { label: "Peso", value: "5,8 Kg" },
    ],
    differentials: [
      "Fabricação própria e empresa pioneira no segmento.",
      "Nossos Appliances são fabricados com placa industrial para a utilização específica de Firewall com capacitores de qualidade superior, sem conexão de placas por PCI e risco zero de mau contato nas interfaces.",
      "Trabalhamos com prazo de entrega imediato e mantemos em estoque peças de reposição.",
      "Baixo custo de aquisição.",
      "Fácil gerenciamento via browser.",
      "Solução completa de firewall sem necessidade de licenciamento.",
      "Entregamos para todo o país e trabalhamos somente com transportadoras credenciadas tornando o processo de transporte muito mais seguro e ágil.",
    ],
    downloads: [
      { name: "Datasheet WEA-ATC236 (PT-BR)", url: "#", icon: "📄" },
      { name: "Manual de Instalação", url: "#", icon: "📋" },
      { name: "Guia Xeon para Firewall Enterprise", url: "#", icon: "🛡️" },
      { name: "Guia Alta Disponibilidade CARP", url: "#", icon: "🛡️" },
      { name: "Guia BGP Operadora", url: "#", icon: "🛡️" },
      { name: "Certificações CE / FCC / RoHS", url: "#", icon: "📜" },
    ],
  },

  // ─── PC INDUSTRIAL 1: WEC-BLJ41MS2 ─────────────────────────────────────────
  "WEC-BLJ41MS2": {
    sku: "WEC-BLJ41MS2",
    name: "PC Industrial Fanless WEC-BLJ41MS2",
    category: "PC Industrial",
    categoryLabel: "PC Industrial · Desktop Industrial",
    tier: "Entry Level",
    format: "Desktop Industrial",
    shortDescription:
      "Mini PC Industrial Fanless WEC-BLJ41MS2, gabinete com dimensões reduzidas, indicado para aplicações em chão de fábrica com incidência de poeira. Possui gabinete fanless em alumínio, totalmente fechado e sem partes móveis.",
    fullDescription: `Mini PC Industrial Fanless WEC-BLJ41MS2, gabinete com dimensões reduzidas, indicado para aplicações em chão de fábrica com incidência de poeira.

Possui gabinete fanless em alumínio, totalmente fechado e sem partes móveis.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz" },
      { icon: Network, label: "Interfaces", value: "2 X Lan Gigabit Ethernet" },
      { icon: HardDrive, label: "Saída de Vídeo", value: "1 x VGA, 1 x HDMI" },
    ],
    badges: [
      { label: "Fanless", color: "bg-emerald-600", textColor: "text-white" },
      { label: "Industrial", color: "bg-amber-600", textColor: "text-white" },
      { label: "VESA", color: "bg-blue-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Intel® Celeron J4125 2.0 Ghz up to 2.7 Ghz" },
      { label: "Saída de Vídeo", value: "1 x VGA, 1 x HDMI" },
      { label: "Memória", value: "1 x SODIMM DDR4 2133 MHz, max 8GB" },
      { label: "Interfaces", value: "2 X RTL8111E Gigabit Ethernet" },
      { label: "Armazenamento", value: "1 x SATA III, 1 x M.2 2280" },
      { label: "USB", value: "2 x USB 3.0, 2 x USB 2.0" },
      { label: "Fonte de alimentação", value: "Externo" },
      { label: "Dimensões (A x L x P)", value: "40 x 130 x 140 mm" },
      { label: "Temperatura de Operação", value: "0 ~ 50°C" },
      { label: "Temperatura de Armazenagem", value: "-20°C~70°C" },
      { label: "Certificado", value: "CE, FCC For Barebone" },
    ],
    differentials: [],
    downloads: [],
  },

  // ─── PC INDUSTRIAL 2: WEC-BLCI3400SU ───────────────────────────────────────
  "WEC-BLCI3400SU": {
    sku: "WEC-BLCI3400SU",
    name: "PC Industrial Fanless WEC-BLCI3400SU",
    category: "PC Industrial",
    categoryLabel: "PC Industrial · Desktop Industrial",
    tier: "PMEs",
    format: "Desktop Industrial",
    shortDescription:
      "Mini PC Industrial Fanless WEC-BLCI34005U, gabinete com dimensões reduzidas, indicado para aplicações em chão de fábrica com incidência de poeira. Possui gabinete fanless em alumínio totalmente fechado e sem partes móveis.",
    fullDescription: `Mini PC Industrial Fanless WEC-BLCI34005U, gabinete com dimensões reduzidas, indicado para aplicações em chão de fábrica com incidência de poeira.

Possui gabinete fanless em alumínio totalmente fechado e sem partes móveis.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Com Processador Intel® Core i3-4005U" },
      { icon: Network, label: "Interfaces", value: "2 X Lan Gigabit Ethernet (Wifi Opcional)" },
      { icon: HardDrive, label: "Saída de Vídeo", value: "2 HDMI" },
      { icon: Server, label: "Suporte", value: "Suporte VESA" },
      { icon: Radio, label: "Conectividade", value: "Wifi (Opcional)" },
    ],
    badges: [
      { label: "Fanless", color: "bg-emerald-600", textColor: "text-white" },
      { label: "Industrial", color: "bg-amber-600", textColor: "text-white" },
      { label: "VESA", color: "bg-blue-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Intel® Core i3-4005U (cache de 3M, 1,70 GHz)" },
      { label: "Saída de Vídeo", value: "2 x HDMI" },
      { label: "Memória", value: "1 x SODIMM DDR3L 1600 MHz, max 8GB" },
      { label: "Interfaces", value: "2 X RTL8111E Gigabit Ethernet (Wifi Opcional)" },
      { label: "Armazenamento", value: "1 x SATA III, 1 x MSATA" },
      { label: "USB", value: "4 x USB 3.0, 2 x USB 2.0" },
      { label: "Fonte de alimentação", value: "Externo" },
      { label: "Dimensões (L x P x A)", value: "177 x 123 x 55 mm" },
      { label: "Temperatura de Operação", value: "0 ~ 50°C" },
      { label: "Temperatura de Armazenagem", value: "-20°C~70°C" },
      { label: "Certificado", value: "CE, FCC For Barebone" },
    ],
    differentials: [],
    downloads: [],
  },

  // ─── PC INDUSTRIAL 3: WEC-BLCI55200U ───────────────────────────────────────
  "WEC-BLCI55200U": {
    sku: "WEC-BLCI55200U",
    name: "PC Industrial Fanless WEC-BLCI55200U",
    category: "PC Industrial",
    categoryLabel: "PC Industrial · Desktop Industrial",
    tier: "Médio Porte",
    format: "Desktop Industrial",
    shortDescription:
      "Mini PC Industrial Fanless WEC-BLCI55200U, gabinete com dimensões reduzidas, indicado para aplicações em chão de fábrica com incidência de poeira. Possui gabinete fanless em alumínio totalmente fechado e sem partes móveis.",
    fullDescription: `Mini PC Industrial Fanless WEC-BLCI55200U, gabinete com dimensões reduzidas, indicado para aplicações em chão de fábrica com incidência de poeira.

Possui gabinete fanless em alumínio totalmente fechado e sem partes móveis.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Com Processador Intel® Core i5-5200U" },
      { icon: Network, label: "Interfaces", value: "2 X Lan Gigabit Ethernet (Wifi Opcional)" },
      { icon: HardDrive, label: "Saída de Vídeo", value: "2 HDMI" },
      { icon: Server, label: "Suporte", value: "Suporte VESA" },
      { icon: Radio, label: "Conectividade", value: "Wifi (Opcional)" },
    ],
    badges: [
      { label: "Fanless", color: "bg-emerald-600", textColor: "text-white" },
      { label: "Industrial", color: "bg-amber-600", textColor: "text-white" },
      { label: "VESA", color: "bg-blue-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Processador Intel® Core i5-5200U (cache de 3M 2,20 GHz)" },
      { label: "Saída de Vídeo", value: "2 x HDMI" },
      { label: "Memória", value: "1 x SODIMM DDR3L 1600 MHz, max 8GB" },
      { label: "Interfaces", value: "2 X RTL8111E Gigabit Ethernet (Wifi Opcional)" },
      { label: "Armazenamento", value: "1 x SATA III, 1 x MSATA" },
      { label: "USB", value: "4 x USB 3.0, 2 x USB 2.0" },
      { label: "Fonte de alimentação", value: "Externo" },
      { label: "Dimensões (L x P x A)", value: "177 x 123 x 55 mm" },
      { label: "Temperatura de Operação", value: "0 ~ 50°C" },
      { label: "Temperatura de Armazenagem", value: "-20°C~70°C" },
      { label: "Certificado", value: "CE, FCC For Barebone" },
    ],
    differentials: [],
    downloads: [],
  },

  // ─── PABX-IP 1: WEA-F594JE ───────────────────────────────────────────────
  "WEA-F594JE": {
    sku: "WEA-F594JE",
    name: "Appliance PABX-IP 1U",
    category: "PABX-IP",
    categoryLabel: "PABX-IP · Rack 1U",
    tier: "Corporativo",
    format: "Rack 1U",
    shortDescription:
      "Appliance para PABX IP WEA-F594JE. Hardware em Gabinete de 1U Rackmount 1 Slot PCI-E para placa FXO/FXS ou E1, para Processadores Intel® Core i7 / i5 / i3 / Pentium.",
    fullDescription: `Appliance para PABX IP WEA-F594JE.

Hardware em Gabinete de 1U Rackmount 1 Slot PCI-E para placa FXO/FXS ou E1, para Processadores Intel® Core i7 / i5 / i3 / Pentium.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Intel® Core i7 / i5 / i3 / Pentium" },
      { icon: Network, label: "Interfaces", value: "2 x Lan Gigabit" },
      { icon: Server, label: "Formato", value: "Gabinete de 1U Rackmount" },
    ],
    badges: [
      { label: "Asterisk", color: "bg-orange-600", textColor: "text-white" },
      { label: "FreePBX", color: "bg-blue-600", textColor: "text-white" },
      { label: "Issabel", color: "bg-emerald-600", textColor: "text-white" },
      { label: "DAHDI", color: "bg-slate-700", textColor: "text-white" },
      { label: "FXO/FXS/E1", color: "bg-violet-600", textColor: "text-white" },
      { label: "RAID SSD", color: "bg-cyan-600", textColor: "text-white" },
      { label: "Corporativo", color: "bg-amber-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Intel® Core i7 / i5 / i3 / Pentium" },
      { label: "Saída de Vídeo", value: "VGA" },
      { label: "Memória", value: "2 x SODIMM DDR4-2133 MHz, max 32GB" },
      {
        label: "Interfaces",
        value: "1 x Intel I211-AT Gigabit Ethernet, 1 x Intel I219-LM PHY Gigabit Ethernet",
      },
      {
        label: "Armazenamento",
        value: '1 x 3.5" SATA III, ou 2 x 2.5" SATA com suporte a RAID 0, 1',
      },
      { label: "Slot de Expansão", value: "1 x Mini PCIe para M-sata, 1 x PCIe x16" },
      { label: "USB", value: "6 x USB 3.0, 2 x USB 2.0" },
      { label: "Fonte de alimentação", value: "Interno" },
      { label: "Consumo de energia", value: "Ocioso 5,16~5,52 e Pico máximo 8,40 Watts" },
      { label: "Dimensões (A x L x P)", value: "44 x 430 x 250 mm" },
      { label: "Peso", value: "4,1 Kg" },
    ],
    differentials: [
      "Fabricação própria e empresa pioneira no segmento.",
      "Nossos Appliances são fabricados com placa industrial para a utilização específica de Firewall com capacitores de qualidade superior, sem conexão de placas por PCI e risco zero de mau contato nas interfaces.",
      "Trabalhamos com prazo de entrega imediato e mantemos em estoque peças de reposição.",
      "Baixo custo de aquisição.",
      "Fácil gerenciamento via browser.",
      "Solução completa de firewall sem necessidade de licenciamento.",
      "Entregamos para todo o país e trabalhamos somente com transportadoras credenciadas tornando o processo de transporte muito mais seguro e ágil.",
    ],
    downloads: [
      { name: "Datasheet WEA-F594JE (PT-BR)", url: "#", icon: "📄" },
      { name: "Manual de Instalação", url: "#", icon: "📋" },
      { name: "Guia FreePBX — Configuração Inicial", url: "#", icon: "📞" },
      { name: "Guia Asterisk — Primeiros Passos", url: "#", icon: "📞" },
      { name: "Guia Placas FXO/FXS DAHDI", url: "#", icon: "📋" },
      { name: "Certificações CE / FCC / RoHS", url: "#", icon: "📜" },
    ],
  },

  // ─── PABX-IP 2: WEA-F792JE ───────────────────────────────────────────────
  "WEA-F792JE": {
    sku: "WEA-F792JE",
    name: "PABX-IP Alta Disponibilidade",
    category: "PABX-IP",
    categoryLabel: "PABX-IP · Rack 1U",
    tier: "Operadora",
    format: "Rack 1U",
    shortDescription:
      "Appliance para PABX IP WEA-F792JE. Hardware em Gabinete de 1U Rackmount 1 Slot PCI-E para placa FXO/FXS ou E1, Processador Intel® Celeron N3160 SoC, 1.60GHz - 2.24GHz, compatível com Asterisk.",
    fullDescription: `Appliance para PABX IP WEA-F792JE.

Hardware em Gabinete de 1U Rackmount 1 Slot PCI-E para placa FXO/FXS ou E1, Processador Intel® Celeron N3160 SoC, 1.60GHz - 2.24GHz, compatível com Asterisk.`,
    highlights: [
      { icon: Cpu, label: "Processador", value: "Intel® Celeron N3160 SoC, 1.60GHz - 2.24GHz" },
      { icon: Network, label: "Interfaces", value: "2 x Lan Gigabit" },
      { icon: Server, label: "Formato", value: "Gabinete de 1U Rackmount" },
    ],
    badges: [
      { label: "Alta Disponibilidade", color: "bg-emerald-600", textColor: "text-white" },
      { label: "Asterisk HA", color: "bg-orange-600", textColor: "text-white" },
      { label: "Kamailio", color: "bg-blue-600", textColor: "text-white" },
      { label: "FXO/FXS/E1", color: "bg-violet-600", textColor: "text-white" },
      { label: "Operadora", color: "bg-rose-600", textColor: "text-white" },
      { label: "PCIe Multi-slot", color: "bg-cyan-600", textColor: "text-white" },
      { label: "Industrial Grade", color: "bg-amber-600", textColor: "text-white" },
    ],
    techSpecs: [
      { label: "CPU", value: "Intel® Celeron N3160 SoC, 1.60GHz – 2.24GHz Burst, Quad-Core" },
      { label: "Saída de Vídeo", value: "VGA" },
      { label: "Memória", value: "2 x SODIMM DDR3L 1600 MHz, max 8GB" },
      { label: "Interfaces", value: "2 x Realtek RTL8111H Gigabit Ethernet" },
      { label: "Armazenamento", value: "1 x SATA III, 1 x M.2 SATA" },
      { label: "Slot de Expansão", value: "1 x Mini PCIe para M-sata, 1 x PCIe x8" },
      { label: "USB", value: "3 x USB 3.0, 3 x USB 2.0" },
      { label: "Fonte de alimentação", value: "Interno" },
      { label: "Consumo de energia", value: "Ocioso 5,16~5,52 e Pico máximo 8,40 Watts" },
      { label: "Dimensões (A x L x P)", value: "44 x 430 x 250 mm" },
      { label: "Peso", value: "3,7 Kg" },
    ],
    differentials: [
      "Fabricação própria e empresa pioneira no segmento.",
      "Nossos Appliances são fabricados com placa industrial para a utilização específica de Firewall com capacitores de qualidade superior, sem conexão de placas por PCI e risco zero de mau contato nas interfaces.",
      "Trabalhamos com prazo de entrega imediato e mantemos em estoque peças de reposição.",
      "Baixo custo de aquisição.",
      "Fácil gerenciamento via browser.",
      "Solução completa de firewall sem necessidade de licenciamento.",
      "Entregamos para todo o país e trabalhamos somente com transportadoras credenciadas tornando o processo de transporte muito mais seguro e ágil.",
    ],
    downloads: [
      { name: "Datasheet WEA-F792JE (PT-BR)", url: "#", icon: "📄" },
      { name: "Manual de Instalação", url: "#", icon: "📋" },
      { name: "Guia Alta Disponibilidade Asterisk", url: "#", icon: "📞" },
      { name: "Guia Kamailio — Configuração", url: "#", icon: "📞" },
      { name: "Guia DRBD / Corosync / Pacemaker", url: "#", icon: "📋" },
      { name: "Certificações CE / FCC / RoHS", url: "#", icon: "📜" },
    ],
  },
};

// Helper: get detail by SKU with fallback
export function getProductDetail(sku: string): ProductDetail | undefined {
  return productDetails[sku];
}
