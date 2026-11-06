import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import catPabx from "@/assets/cat-pabx.jpg";

export const Route = createFileRoute("/produtos/pc-industrial")({
  head: () => ({
    meta: [
      { title: "Appliances para PABX IP — SWH" },
      {
        name: "description",
        content: "Appliances para PABX IP. Plataformas avançadas para comunicação corporativa.",
      },
    ],
  }),
  component: PabxIpPage,
});

const pabxProducts = [
  {
    id: "WEA-F792JE",
    title: "Appliance para PABX IP WEA-F792JE",
    tag: "INTEL CELERON",
    shortSpecs: [
      "Gabinete de 1U Rackmount",
      "1 Slot PCI-E para placa FXO/FXS ou E1",
      "Porta VGA e HDMI",
      "2 x Lan Gigabit",
      "1 x Slot de expansão por PCIe x8",
    ],
    description:
      "Appliance para PABX IP WEA-F792JE.\n\nHardware em Gabinete de 1U Rackmount 1 Slot PCI-E para placa FXO/FXS ou E1, Processador Intel® Celeron N3160 SoC, 1.60GHz - 2.24GHz, compatível com Asterisk.",
    techSpecs: [
      { label: "CPU:", value: "Intel® Celeron N3160 SoC, 1.60GHz – 2.24GHz Burst, Quad-Core" },
      { label: "Saída de Vídeo:", value: "VGA" },
      { label: "Memória:", value: "2 x SODIMM DDR3L 1600 MHz, max 8GB" },
      { label: "Interfaces:", value: "2 x Realtek RTL8111H Gigabit Ethernet" },
      { label: "Armazenamento:", value: "1 x SATA III, 1 x M.2 SATA" },
      { label: "Slot de Expansão:", value: "1 x Mini PCIe para M-sata, 1 x PCIe x8" },
      { label: "USB:", value: "3 x USB 3.0, 3 x USB 2.0" },
      { label: "Fonte de alimentação:", value: "Interno" },
      { label: "Consumo de energia:", value: "Ocioso 5,16~5,52 e Pico máximo 8,40 Watts" },
      { label: "Dimensões (A x L x P):", value: "44 x 430 x 250 mm" },
      { label: "Peso:", value: "3,7 Kg" },
    ],
  },
  {
    id: "WEA-F594JE",
    title: "Appliance para PABX IP WEA-F594JE",
    tag: "INTEL CORE",
    shortSpecs: [
      "Gabinete de 1U Rackmount",
      "1 Slot PCI-E para placa FXO/FXS ou E1",
      "Compatível com processadores Intel® Core i7 / i5 / i3 / Pentium",
      "2 x Lan Gigabit",
    ],
    description:
      "Appliance para PABX IP WEA-F594JE.\n\nHardware em Gabinete de 1U Rackmount 1 Slot PCI-E para placa FXO/FXS ou E1, para Processadores Intel® Core i7 / i5 / i3 / Pentium.",
    techSpecs: [
      { label: "CPU:", value: "Intel® Core i7 / i5 / i3 / Pentium" },
      { label: "Saída de Vídeo:", value: "VGA" },
      { label: "Memória:", value: "2 x SODIMM DDR4-2133 MHz, max 32GB" },
      {
        label: "Interfaces:",
        value: "1 x Intel I211-AT Gigabit Ethernet, 1 x Intel I219-LM PHY Gigabit Ethernet",
      },
      {
        label: "Armazenamento:",
        value: '1 x 3.5" SATA III, ou 2 x 2.5" SATA com suporte a RAID 0, 1',
      },
      { label: "Slot de Expansão:", value: "1 x Mini PCIe para M-sata, 1 x PCIe x16" },
      { label: "USB:", value: "6 x USB 3.0, 2 x USB 2.0" },
      { label: "Fonte de alimentação:", value: "Interno" },
      { label: "Consumo de energia:", value: "Ocioso 5,16~5,52 e Pico máximo 8,40 Watts" },
      { label: "Dimensões (A x L x P):", value: "44 x 430 x 250 mm" },
      { label: "Peso:", value: "4.1 Kg" },
    ],
  },
];

function PabxIpPage() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"desc" | "specs">("desc");
  const [filter, setFilter] = useState<"todos" | "celeron" | "core">("todos");

  const selectedProduct = pabxProducts.find((p) => p.id === selectedProductId);

  const filteredProducts = pabxProducts.filter((p) => {
    if (filter === "todos") return true;
    if (filter === "celeron") return p.tag === "INTEL CELERON";
    if (filter === "core") return p.tag === "INTEL CORE";
    return true;
  });

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {!selectedProduct ? (
          <div>
            <h2 className="text-3xl font-bold mb-10">Appliances para PABX IP</h2>

            <div className="flex flex-wrap gap-6 mb-12 border-b border-border text-sm font-bold uppercase tracking-wider text-muted-foreground">
              <button
                onClick={() => setFilter("todos")}
                className={`pb-3 border-b-2 transition-colors ${
                  filter === "todos"
                    ? "text-primary border-primary"
                    : "border-transparent hover:text-foreground"
                }`}
              >
                VER TODOS
              </button>
              <button
                onClick={() => setFilter("celeron")}
                className={`pb-3 border-b-2 transition-colors ${
                  filter === "celeron"
                    ? "text-primary border-primary"
                    : "border-transparent hover:text-foreground"
                }`}
              >
                INTEL CELERON
              </button>
              <button
                onClick={() => setFilter("core")}
                className={`pb-3 border-b-2 transition-colors ${
                  filter === "core"
                    ? "text-primary border-primary"
                    : "border-transparent hover:text-foreground"
                }`}
              >
                INTEL CORE I3/I5/I7
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer group"
                  onClick={() => {
                    setSelectedProductId(product.id);
                    setActiveTab("desc");
                  }}
                >
                  <div className="relative aspect-[4/3] bg-white overflow-hidden flex items-center justify-center">
                    <img
                      src={catPabx}
                      alt={product.title}
                      className="max-w-[80%] max-h-[80%] object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 flex flex-col items-start gap-px shadow-xl">
                      <div className="bg-[#4b5563] text-white px-4 py-2 font-bold text-sm shadow-md">
                        {product.id}
                      </div>
                      <div className="bg-[#0ea5e9] text-white px-4 py-1 text-[11px] font-bold shadow-md">
                        {product.tag}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedProductId(null)}
              className="mb-8 text-sm font-bold text-primary uppercase tracking-widest hover:text-navy flex items-center gap-2 transition-colors"
            >
              &larr; Voltar para lista
            </button>

            <h2 className="text-3xl font-bold mb-12">{selectedProduct.title}</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative aspect-video bg-white flex flex-col items-center justify-center">
                <img
                  src={catPabx}
                  alt={selectedProduct.title}
                  className="max-w-[90%] object-contain"
                />
                <div className="flex gap-1.5 mt-6">
                  <div className="size-2 rounded-full bg-primary"></div>
                  <div className="size-2 rounded-full bg-border"></div>
                </div>
              </div>

              <div className="space-y-6">
                <ul className="space-y-3 text-muted-foreground">
                  {selectedProduct.shortSpecs.map((spec, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-border mt-1">-</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 pt-6 text-2xl font-bold text-foreground items-center">
                  <span title="FCC">FC</span>
                  <span title="CE">CE</span>
                  <span className="text-green-600 text-base" title="RoHS">
                    RoHS
                  </span>
                  <span className="text-xl" title="WEEE">
                    🗑️
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6 flex gap-4 text-sm font-medium">
              <button
                onClick={() => setActiveTab("desc")}
                className={`px-6 py-4 transition-colors ${
                  activeTab === "desc"
                    ? "text-primary bg-white shadow-[0_-2px_0_0_#0ea5e9_inset] border-x border-t border-border"
                    : "text-muted-foreground bg-surface-soft border border-transparent hover:bg-border/50"
                }`}
              >
                Descrição
              </button>
              <button
                onClick={() => setActiveTab("specs")}
                className={`px-6 py-4 transition-colors ${
                  activeTab === "specs"
                    ? "text-primary bg-white shadow-[0_-2px_0_0_#0ea5e9_inset] border-x border-t border-border"
                    : "text-muted-foreground bg-surface-soft border border-transparent hover:bg-border/50"
                }`}
              >
                Especificações Técnicas
              </button>
            </div>

            <div className="bg-white border border-border p-8 min-h-[300px]">
              {activeTab === "desc" && (
                <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed text-sm">
                  {selectedProduct.description}
                </div>
              )}
              {activeTab === "specs" && (
                <div className="flex flex-col text-sm">
                  {selectedProduct.techSpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row py-4 border-b border-border last:border-0 gap-4 sm:gap-8"
                    >
                      <div className="sm:w-1/3 font-bold text-foreground shrink-0">
                        {spec.label}
                      </div>
                      <div className="text-muted-foreground">{spec.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
