import { createFileRoute, Outlet, useChildMatches, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { products, type Product } from "@/lib/products";
import { getProductSlug } from "@/lib/product-slugs";
import { PageHeader } from "./empresa";
import { ChevronRight } from "lucide-react";

// ── Imagens individuais de cada produto ───────────────────────────────────────
import weaEpj414l from "@/assets/wea-epj414l.jpg";
import weaSw1p4l from "@/assets/wea-sw1p4l.jpg";
import weaRoj414l from "@/assets/wea-roj414l.jpg";
import weaRoj416l from "@/assets/wea-roj416l.jpg";
import weaB75a6l from "@/assets/wea-b75a6l.jpg";
import weaAt1581n from "@/assets/wea-at1581n.jpg";
import weaF592je from "@/assets/wea-f592je.jpg";
import weaAt1781 from "@/assets/wea-at1781.jpg";
import weaAtc236 from "@/assets/wea-atc236.jpg";
import weaF594je from "@/assets/wea-f594je.jpg";
import weaF792je from "@/assets/wea-f792je.jpg";
import wecBlj41ms2 from "@/assets/wec-blj41ms2.jpg";
import wecBlci3400su from "@/assets/wec-blci3400su.jpg";
import wecBlci55200u from "@/assets/wec-blci55200u.jpg";

// Map nome do arquivo → imagem importada
const productImages: Record<string, string> = {
  "wea-epj414l.jpg": weaEpj414l,
  "wea-sw1p4l.jpg": weaSw1p4l,
  "wea-roj414l.jpg": weaRoj414l,
  "wea-roj416l.jpg": weaRoj416l,
  "wea-b75a6l.jpg": weaB75a6l,
  "wea-at1581n.jpg": weaAt1581n,
  "wea-f592je.jpg": weaF592je,
  "wea-at1781.jpg": weaAt1781,
  "wea-atc236.jpg": weaAtc236,
  "wea-f594je.jpg": weaF594je,
  "wea-f792je.jpg": weaF792je,
  "wec-blj41ms2.jpg": wecBlj41ms2,
  "wec-blci3400su.jpg": wecBlci3400su,
  "wec-blci55200u.jpg": wecBlci55200u,
};

export const Route = createFileRoute("/produtos")({
  validateSearch: (search: Record<string, unknown>) => ({
    category:
      search.category === "firewall" ||
      search.category === "pabx" ||
      search.category === "pc-industrial"
        ? search.category
        : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Produtos — Catálogo Completo de Appliances | SWH" },
      {
        name: "description",
        content:
          "Catálogo SWH: appliances de firewall (pfSense, OPNsense), PABX-IP e computadores industriais. SKUs Entry Level a Missão Crítica.",
      },
      { property: "og:title", content: "Catálogo de Produtos SWH" },
      {
        property: "og:description",
        content: "Especificações técnicas dos appliances Firewall e PABX-IP fabricados pela SWH.",
      },
    ],
  }),
  component: ProdutosPage,
});

const categoryMeta = {
  firewall: { label: "Firewall" },
  pabx: { label: "PABX-IP" },
  industrial: { label: "Industrial" },
  "pc-industrial": { label: "PC Industrial" },
} as const;

const filters = [
  { id: "all", label: "Todos" },
  { id: "firewall", label: "Firewall" },
  { id: "pabx", label: "PABX-IP" },
  { id: "pc-industrial", label: "PC Industrial" },
] as const;

type Filter = (typeof filters)[number]["id"];

function ProdutosPage() {
  const childMatches = useChildMatches();
  const { category } = Route.useSearch();
  const initialFilter: Filter =
    category === "firewall" || category === "pabx" || category === "pc-industrial"
      ? category
      : "all";
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const catalogProducts = products.filter((product) => product.sku !== "WEA-EPJ414L");
  const list =
    filter === "all"
      ? catalogProducts
      : catalogProducts.filter((product) => product.category === filter);

  useEffect(() => {
    setFilter(initialFilter);
  }, [category]);

  // Keep the parent hooks stable during transitions to child product routes.
  if (childMatches.length > 0) {
    return <Outlet />;
  }

  return (
    <>
      <PageHeader
        eyebrow="Catálogo"
        title="Especificações técnicas, SKU por SKU"
        description="Toda a linha de hardware industrial SWH. Selecione um modelo para ver detalhes completos e solicitar cotação."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${
                filter === f.id
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-foreground border-border hover:border-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <ProductCard key={p.sku} product={p} />
          ))}
        </div>
      </section>


    </>
  );
}

function ProductCard({ product }: { product: Product }) {
  const meta = categoryMeta[product.category];
  const navigate = useNavigate();
  const productImage = productImages[product.image];

  return (
    <article className="bg-white border border-border group flex flex-col">
      <div className="p-4 border-b border-border flex justify-between items-center bg-surface-soft">
        <span className="font-mono text-[10px] font-bold">SKU: {product.sku}</span>
        <span className="px-2 py-0.5 bg-primary text-white text-[9px] font-bold uppercase tracking-tight">
          {product.tier}
        </span>
      </div>
      <div className="aspect-[5/3] bg-white border-b border-border overflow-hidden">
        <img
          src={productImage}
          alt={product.name}
          loading="lazy"
          width={800}
          height={480}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
          {meta.label} · {product.format}
        </div>
        <h3 className="font-bold text-lg mb-4">{product.name}</h3>
        <ul className="space-y-1.5 mb-6 text-[11px] flex-1">
          {product.specs.slice(0, 3).map((s) => (
            <li
              key={s.label}
              className="flex justify-between gap-3 border-b border-border/60 pb-1.5"
            >
              <span className="text-muted-foreground">{s.label}</span>
              <span className="font-medium text-right">{s.value}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => navigate({ to: `/produtos/${getProductSlug(product.sku)}` })}
          className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all group cursor-pointer"
        >
          VEJA MAIS
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
