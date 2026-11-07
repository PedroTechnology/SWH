import { createFileRoute, Link } from "@tanstack/react-router";
import { Factory, Wifi, Antenna, Wrench, Building2, Landmark } from "lucide-react";
import { segments } from "@/lib/products";
import { PageHeader } from "./empresa";

export const Route = createFileRoute("/segmentos")({
  head: () => ({
    meta: [
      { title: "Segmentos Atendidos — Indústria, ISP, Telecom, Governo | SWH" },
      {
        name: "description",
        content:
          "Soluções SWH para indústria, ISPs, telecom, integradores, corporativo e governo — hardware industrial brasileiro para cada vertical.",
      },
      { property: "og:title", content: "Segmentos Atendidos — SWH" },
      {
        property: "og:description",
        content: "Como o hardware SWH resolve desafios de cada vertical: indústria, ISPs, telecom e mais.",
      },
    ],
  }),
  component: SegmentosPage,
});

const icons = {
  industria: Factory,
  isp: Wifi,
  telecom: Antenna,
  integradores: Wrench,
  corporativo: Building2,
  governo: Landmark,
} as const;

function SegmentosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Segmentos"
        title="Hardware desenhado para cada vertical crítica"
        description="Cada segmento tem desafios específicos. Nossas plataformas são dimensionadas para responder com performance, durabilidade e suporte local."
        image="/hero-segmentos.png"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-px bg-border ring-1 ring-border">
          {segments.map((s) => {
            const Icon = icons[s.slug as keyof typeof icons];
            return (
              <article key={s.slug} className="bg-background p-6 sm:p-10 hover:bg-surface-soft transition-colors">
                <Icon className="size-8 text-primary mb-6" />
                <h2 className="text-2xl font-bold mb-6">{s.name}</h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
                      Desafios
                    </div>
                    <ul className="space-y-1.5 text-sm">
                      {s.problems.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="size-1 bg-foreground/40 mt-2 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-3">
                      Soluções SWH
                    </div>
                    <ul className="space-y-1.5 text-sm">
                      {s.solutions.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="size-1 bg-primary mt-2 shrink-0" />
                          <span className="font-medium">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contato"
                  className="inline-block mt-8 text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-primary pb-1"
                >
                  Falar sobre {s.name} →
                </Link>
              </article>
            );
          })}
        </div>
      </section>


    </>
  );
}
