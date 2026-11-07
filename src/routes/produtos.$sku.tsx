import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Shield, ArrowUpRight, ExternalLink } from "lucide-react";
import { products } from "@/lib/products";
import { getProductDetail } from "@/lib/productDetails";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
import weaEpj414l1 from "@/assets/wea-epj414l-1.jpg";
import weaEpj414l2 from "@/assets/wea-epj414l-2.jpg";
import weaSw1p4l1 from "@/assets/wea-sw1p4l-1.jpg";
import weaSw1p4l2 from "@/assets/wea-sw1p4l-2.jpg";
import weaRoj414l1 from "@/assets/wea-roj414l-1.jpg";
import weaRoj414l2 from "@/assets/wea-roj414l-2.jpg";
import weaRoj416l1 from "@/assets/wea-roj416l-1.jpg";
import weaRoj416l2 from "@/assets/wea-roj416l-2.jpg";
import weaB75a6l1 from "@/assets/wea-b75a6l-1.jpg";
import weaB75a6l2 from "@/assets/wea-b75a6l-2.jpg";
import weaB75a6l3 from "@/assets/wea-b75a6l-3.jpg";
import weaAt1581n1 from "@/assets/wea-at1581n-1.jpg";
import weaAt1581n2 from "@/assets/wea-at1581n-2.jpg";
import weaF592je1 from "@/assets/wea-f592je-1.jpg";
import weaF592je2 from "@/assets/wea-f592je-2.jpg";
import weaAt17811 from "@/assets/wea-at1781-1.jpg";
import weaAt17812 from "@/assets/wea-at1781-2.jpg";
import weaAtc2361 from "@/assets/wea-atc236-1.jpg";
import weaAtc2362 from "@/assets/wea-atc236-2.jpg";
import weaF594je1 from "@/assets/wea-f594je-1.jpg";
import weaF792je1 from "@/assets/wea-f792je-1.jpg";
import wecBlj41ms21 from "@/assets/wec-blj41ms2-1.jpg";
import wecBlj41ms22 from "@/assets/wec-blj41ms2-2.jpg";
import wecBlci3400su1 from "@/assets/wec-blci3400su-1.jpg";
import wecBlci3400su2 from "@/assets/wec-blci3400su-2.jpg";
import wecBlci55200u1 from "@/assets/wec-blci55200u-1.jpg";
import wecBlci55200u2 from "@/assets/wec-blci55200u-2.jpg";

// Map nome do arquivo → imagem importada
const productImagesMap: Record<string, string> = {
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
  "wea-epj414l-1.jpg": weaEpj414l1,
  "wea-epj414l-2.jpg": weaEpj414l2,
  "wea-sw1p4l-1.jpg": weaSw1p4l1,
  "wea-sw1p4l-2.jpg": weaSw1p4l2,
  "wea-roj414l-1.jpg": weaRoj414l1,
  "wea-roj414l-2.jpg": weaRoj414l2,
  "wea-roj416l-1.jpg": weaRoj416l1,
  "wea-roj416l-2.jpg": weaRoj416l2,
  "wea-b75a6l-1.jpg": weaB75a6l1,
  "wea-b75a6l-2.jpg": weaB75a6l2,
  "wea-b75a6l-3.jpg": weaB75a6l3,
  "wea-at1581n-1.jpg": weaAt1581n1,
  "wea-at1581n-2.jpg": weaAt1581n2,
  "wea-f592je-1.jpg": weaF592je1,
  "wea-f592je-2.jpg": weaF592je2,
  "wea-at1781-1.jpg": weaAt17811,
  "wea-at1781-2.jpg": weaAt17812,
  "wea-atc236-1.jpg": weaAtc2361,
  "wea-atc236-2.jpg": weaAtc2362,
  "wea-f594je-1.jpg": weaF594je1,
  "wea-f792je-1.jpg": weaF792je1,
  "wec-blj41ms2-1.jpg": wecBlj41ms21,
  "wec-blj41ms2-2.jpg": wecBlj41ms22,
  "wec-blci3400su-1.jpg": wecBlci3400su1,
  "wec-blci3400su-2.jpg": wecBlci3400su2,
  "wec-blci55200u-1.jpg": wecBlci55200u1,
  "wec-blci55200u-2.jpg": wecBlci55200u2,
};

// Map SKU → array de nomes de arquivos de imagem
const skuImageFiles: Record<string, string[]> = {
  "WEA-EPJ414L": ["wea-epj414l.jpg", "wea-epj414l-1.jpg", "wea-epj414l-2.jpg"],
  "WEA-SW1P4L": ["wea-sw1p4l.jpg", "wea-sw1p4l-1.jpg", "wea-sw1p4l-2.jpg"],
  "WEA-ROJ414L": ["wea-roj414l.jpg", "wea-roj414l-1.jpg", "wea-roj414l-2.jpg"],
  "WEA-ROJ416L": ["wea-roj416l.jpg", "wea-roj416l-1.jpg", "wea-roj416l-2.jpg"],
  "WEA-B75A6L": ["wea-b75a6l.jpg", "wea-b75a6l-1.jpg", "wea-b75a6l-2.jpg", "wea-b75a6l-3.jpg"],
  "WEA-AT1581N": ["wea-at1581n.jpg", "wea-at1581n-1.jpg", "wea-at1581n-2.jpg"],
  "WEA-F592JE": ["wea-f592je.jpg", "wea-f592je-1.jpg", "wea-f592je-2.jpg"],
  "WEA-AT1781": ["wea-at1781.jpg", "wea-at1781-1.jpg", "wea-at1781-2.jpg"],
  "WEA-ATC236": ["wea-atc236.jpg", "wea-atc236-1.jpg", "wea-atc236-2.jpg"],
  "WEA-F594JE": ["wea-f594je.jpg", "wea-f594je-1.jpg"],
  "WEA-F792JE": ["wea-f792je.jpg", "wea-f792je-1.jpg"],
  "WEC-BLJ41MS2": ["wec-blj41ms2.jpg", "wec-blj41ms2-1.jpg", "wec-blj41ms2-2.jpg"],
  "WEC-BLCI3400SU": ["wec-blci3400su.jpg", "wec-blci3400su-1.jpg", "wec-blci3400su-2.jpg"],
  "WEC-BLCI55200U": ["wec-blci55200u.jpg", "wec-blci55200u-1.jpg", "wec-blci55200u-2.jpg"],
};

// Map SKU → array de imagens importadas (resolvidas)
const skuImages: Record<string, string[]> = {};
Object.entries(skuImageFiles).forEach(([sku, files]) => {
  skuImages[sku] = files.map((f) => productImagesMap[f] ?? productImagesMap["wea-epj414l.jpg"]);
});

export const Route = createFileRoute("/produtos/$sku")({
  head: ({ params }) => {
    const detail = getProductDetail(params.sku);
    const catalog = products.find((p) => p.sku === params.sku);
    const name = detail?.name ?? catalog?.name ?? params.sku;
    const description =
      detail?.shortDescription ?? "Appliance SWH — especificações técnicas completas.";
    return {
      meta: [
        { title: `${name} — SWH` },
        { name: "description", content: description },
        { property: "og:title", content: name },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { sku } = Route.useParams();

  // Prefer detailed data; fall back to catalog data
  const detail = getProductDetail(sku);
  const catalog = products.find((p) => p.sku === sku);

  const productImages = skuImages[sku] ?? [productImagesMap["wea-epj414l.jpg"]];

  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "diff" | "downloads">("desc");
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const thumbnailTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedImage(0);
  }, [sku]);

  useEffect(() => {
    const selectedThumbnail = thumbnailTrackRef.current?.children[selectedImage] as HTMLElement | undefined;
    selectedThumbnail?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [selectedImage]);

  useEffect(() => {
    if (zoomedImage) {
      document.body.classList.add("zoom-modal-open");
    } else {
      document.body.classList.remove("zoom-modal-open");
    }
    return () => document.body.classList.remove("zoom-modal-open");
  }, [zoomedImage]);

  const tierLabel = detail?.tier ?? catalog?.tier ?? "";
  const highlights = detail?.highlights ?? [];
  const fullDescription =
    detail?.fullDescription ??
    "Informações detalhadas deste produto serão disponibilizadas em breve. Entre em contato para mais detalhes.";
  const techSpecs =
    detail?.techSpecs ?? catalog?.specs.map((s) => ({ label: s.label, value: s.value })) ?? [];
  const differentials = detail?.differentials ?? [];
  const downloads = detail?.downloads ?? [];
  const officialUrl = detail?.officialUrl;

  const tabs = [
    { id: "desc", label: "Descrição" },
    { id: "specs", label: "Especificações Técnicas" },
    ...(differentials.length > 0 ? [{ id: "diff", label: "Diferencial" }] : []),
    ...(downloads.length > 0 ? [{ id: "downloads", label: "Downloads" }] : []),
  ];

  // Resolved values ────────────────────────────────────────────────────────
  const productName = detail?.name ?? catalog?.name ?? sku;
  const shortDesc =
    detail?.shortDescription ?? "Consulte-nos para informações detalhadas sobre este produto.";
  const categoryLabel =
    detail?.categoryLabel ??
    (catalog
      ? `${catalog.category === "pabx" ? "PABX-IP" : "Firewall"} · ${catalog.format}`
      : "Produto");

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-8 md:pt-12 md:pb-12">
        {/* Breadcrumb */}
        <nav
          className="mb-6 flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground"
          aria-label="Navegação"
        >
          <Link to="/produtos" className="hover:text-primary transition-colors">
            Produtos
          </Link>
          <span>/</span>
          <Link to="/produtos" className="hover:text-primary transition-colors">
            {detail?.category ?? (catalog?.category === "pabx" ? "PABX-IP" : "Firewall")}
          </Link>
          <span>/</span>
          <span className="text-foreground">{sku}</span>
        </nav>

        {/* Product Row – Image | Info (full width, aligned with header/footer) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column – Image Gallery */}
          <div className="space-y-3 lg:sticky lg:top-32">
            {/* Main Image */}
            <div
              className="relative bg-white border border-border rounded-sm overflow-hidden h-[280px] sm:h-[360px] lg:h-[480px] cursor-pointer"
              onClick={() => setZoomedImage(productImages[selectedImage])}
            >
              <img
                src={productImages[selectedImage]}
                alt={productName}
                className="w-full h-full object-contain transition-opacity duration-300"
                loading="eager"
              />
              <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-[10px]">
                Clique para ampliar
              </div>

              {/* Carrossel de avançar/voltar quando houver múltiplas imagens */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((prev) =>
                        prev === 0 ? productImages.length - 1 : prev - 1,
                      );
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-navy w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((prev) =>
                        prev === productImages.length - 1 ? 0 : prev + 1,
                      );
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-navy w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails abaixo da imagem principal */}
            {productImages.length > 1 && (
              <div className="relative flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => thumbnailTrackRef.current?.scrollBy({ left: -220, behavior: "smooth" })}
                  className="shrink-0 bg-white border border-border text-navy w-9 h-9 rounded-full flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="Ver thumbnails anteriores"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <div
                  ref={thumbnailTrackRef}
                  className="flex gap-2 overflow-x-auto pb-2 no-scrollbar flex-1 scroll-smooth touch-pan-x"
                >
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(idx)}
                      aria-label={`Selecionar imagem ${idx + 1}`}
                      className={`shrink-0 aspect-[4/3] w-24 overflow-hidden rounded-sm border-2 transition-all bg-white ${
                        selectedImage === idx
                          ? "border-primary bg-primary/10"
                          : "border-transparent hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${productName} - imagem ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => thumbnailTrackRef.current?.scrollBy({ left: 220, behavior: "smooth" })}
                  className="shrink-0 bg-white border border-border text-navy w-9 h-9 rounded-full flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="Ver próximas thumbnails"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            )}

            {/* Modal de zoom – fullscreen, z-index acima do header */}
            {zoomedImage && (
              <div
                className="fixed inset-0 z-[999999] bg-black/95 flex items-center justify-center p-4"
                onClick={() => setZoomedImage(null)}
              >
                {/* Botão fechar – topo direito da tela */}
                <button
                  onClick={() => setZoomedImage(null)}
                  className="absolute top-4 right-4 z-[1000001] bg-white/20 text-white hover:bg-white/30 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all"
                  aria-label="Fechar zoom"
                >
                  <span className="text-[28px] leading-none font-light">×</span>
                </button>

                {/* Seta anterior – centro esquerdo da tela */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev === 0 ? productImages.length - 1 : prev - 1,
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-[1000000] bg-white/20 text-white hover:bg-white/40 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all opacity-100"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="size-5" />
                </button>

                {/* Seta próxima – centro direito da tela */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev === productImages.length - 1 ? 0 : prev + 1,
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-[1000000] bg-white/20 text-white hover:bg-white/40 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all opacity-100"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="size-5" />
                </button>

                {/* Imagem central */}
                <div
                  className="relative max-w-full max-h-[85vh] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={productImages[selectedImage]}
                    alt={productName}
                    className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Column – Product Info */}
          <div className="space-y-6">
            {/* SKU & Category */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] font-bold text-primary">SKU: {sku}</span>
              {tierLabel && (
                <Badge
                  variant="secondary"
                  className="text-[9px] font-bold uppercase tracking-tight"
                >
                  {tierLabel}
                </Badge>
              )}
              {categoryLabel && (
                <Badge
                  variant="secondary"
                  className="text-[9px] font-bold uppercase tracking-tight"
                >
                  {categoryLabel.split("·")[1]?.trim() ?? categoryLabel}
                </Badge>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-[clamp(1.75rem,7vw,2.25rem)] lg:text-4xl font-extrabold leading-[1.1] text-balance text-foreground">
              {productName}
            </h1>

            {/* Spec Chips (Processador / Interfaces / Segurança) – um abaixo do outro */}
            {highlights.length > 0 && (
              <div className="flex flex-col gap-3 pt-4 border-t border-border w-full">
                {highlights.map((h, idx) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-3 bg-surface-soft border border-border rounded-sm min-w-0"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="size-4 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col items-start min-w-0">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                          {h.label}
                        </div>
                        <div className="text-sm text-muted-foreground leading-relaxed break-words">
                          {h.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <Separator className="my-4" />

            {/* Call to Action Buttons */}
            <div className="flex flex-col gap-4 pt-2">
              <Link to="/contato">
                <Button
                  id={`btn-solicitar-cotacao-${sku}`}
                  className="w-full flex-1 bg-primary text-white py-6 text-sm font-bold uppercase tracking-widest hover:bg-navy transition-all"
                >
                  Solicitar Cotação
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs – full width, aligned with header and footer */}
        <div className="mt-8">
          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as typeof activeTab)}
            className="w-full"
          >
            <TabsList className="grid h-auto min-h-12 w-full grid-cols-2 sm:grid-cols-4 items-stretch rounded-none bg-surface-soft p-0">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="h-full min-h-12 min-w-0 whitespace-normal rounded-none px-1 py-3 text-[9px] font-bold uppercase leading-tight tracking-wide text-muted-foreground shadow-none sm:px-4 sm:text-[10px] sm:tracking-widest data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Descrição */}
            <TabsContent
              value="desc"
              className="mt-0 h-auto bg-white border border-border rounded-b-sm p-8"
            >
              <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed text-sm">
                {fullDescription}
              </div>
            </TabsContent>

            {/* Especificações Técnicas */}
            <TabsContent
              value="specs"
              className="mt-0 h-auto bg-white border border-border rounded-b-sm p-8"
            >
              {techSpecs.length > 0 ? (
                <div className="flex flex-col text-sm">
                  {techSpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row py-4 border-b border-border last:border-0 gap-4 sm:gap-8"
                    >
                      <div className="sm:w-2/5 font-medium text-foreground shrink-0 text-[11px] leading-snug">
                        {spec.label}
                      </div>
                      <div className="text-muted-foreground text-[11px] leading-relaxed">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  Especificações técnicas detalhadas serão disponibilizadas em breve. Entre em
                  contato para mais informações.
                </p>
              )}
            </TabsContent>

            {/* Diferencial */}
            <TabsContent
              value="diff"
              className="mt-0 h-auto bg-white border border-border rounded-b-sm p-8"
            >
              {differentials.length > 0 ? (
                <div className="space-y-4">
                  {differentials.map((diff, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 bg-surface-soft border border-border rounded-sm hover:border-primary/50 transition-colors"
                    >
                      <Shield
                        className="size-5 text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-muted-foreground leading-relaxed">{diff}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  Informações de diferenciais serão disponibilizadas em breve.
                </p>
              )}
            </TabsContent>

            {/* Downloads */}
            <TabsContent
              value="downloads"
              className="mt-0 h-auto bg-white border border-border rounded-b-sm p-8"
            >
              {downloads.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  {downloads.map((dl, idx) => (
                    <a
                      key={idx}
                      href={dl.url}
                      className="flex items-center gap-4 p-4 bg-surface-soft border border-border rounded-sm hover:border-primary hover:bg-white transition-all group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        {dl.icon}
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                          {dl.name}
                        </p>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-0.5">
                          Download
                        </p>
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto flex-shrink-0" />
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  Documentos e downloads serão disponibilizados em breve. Entre em contato para mais
                  informações.
                </p>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Back to Catalog + Specialist – full width */}
        {/* Removido a pedido do cliente */}
      </section>

      {/* Related Products – full width */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-8 md:pt-12 md:pb-12">
        <RelatedProducts currentSku={sku} />
      </div>
    </>
  );
}

// ── Related Products Component ───────────────────────────────────────────────
function RelatedProducts({ currentSku }: { currentSku: string }) {
  const currentProduct = products.find((p) => p.sku === currentSku);
  if (!currentProduct) return null;

  const related = products
    .filter((p) => p.sku !== currentSku && p.category === currentProduct.category)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="pt-3 border-t border-border">
      <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-2">
        Outros produtos
      </div>
      <h2 className="text-2xl font-bold mb-4">
        Mais da linha {currentProduct.category === "pabx" ? "PABX-IP" : "Firewall"}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map((p) => {
          const img =
            (skuImages[p.sku] ?? [])[0] ?? productImagesMap[p.image] ?? productImagesMap["wea-epj414l.jpg"];
          return (
            <a
              key={p.sku}
              href={`/produtos/${p.sku}`}
              className="group bg-white border border-border hover:border-primary transition-colors flex flex-col"
            >
              <div className="aspect-[5/3] overflow-hidden bg-surface-soft">
                <img
                  src={img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="font-mono text-[9px] font-bold text-primary uppercase tracking-widest mb-1">
                  {p.tier}
                </span>
                <h3 className="font-bold text-sm mb-3 leading-snug">{p.name}</h3>
                <span className="mt-auto text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-navy transition-colors flex items-center gap-1">
                  Ver detalhes <ChevronRight className="size-3" />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
