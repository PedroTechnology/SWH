import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { PageHeader } from "./empresa";

const WHATSAPP_NUMBER = "5512991142389";
const WHATSAPP_MESSAGE =
  "Ol%C3%A1!%20Seja%20bem-vindo(a)!%20%0AAgradecemos%20seu%20contato!%20Ser%C3%A1%20um%20prazer%20atend%C3%AA-lo(a).%0AComo%20podemos%20ajudar%20voc%C3%AA%20hoje%3F";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fale com a SWH Tecnologia Computacional" },
      {
        name: "description",
        content:
          "Solicite cotação, datasheet ou converse com nossos especialistas. Atendimento comercial em São José dos Campos — SP.",
      },
      { property: "og:title", content: "Contato — SWH" },
      {
        property: "og:description",
        content: "Cotações, suporte técnico e projetos OEM. Fale com a SWH.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Fale com nossa equipe comercial e de engenharia"
        description="Cotações, datasheets, suporte técnico e projetos OEM. Respondemos em horário comercial brasileiro."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3">
          <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3">
            Formulário Comercial
          </div>
          <h2 className="text-3xl font-bold mb-10">Solicitar cotação</h2>

          {sent ? (
            <div className="bg-surface-soft border border-primary/30 p-10 text-center">
              <CheckCircle2 className="size-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Mensagem registrada</h3>
              <p className="text-muted-foreground">
                Nosso time comercial entrará em contato em até 1 dia útil. Para urgências, use o
                WhatsApp ao lado.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nome" name="nome" required />
                <Field label="Empresa" name="empresa" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="E-mail" name="email" type="email" required />
                <Field label="Telefone" name="telefone" type="tel" />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  rows={5}
                  required
                  placeholder="Descreva sua necessidade: modelos de interesse, volume estimado, prazo..."
                  className="w-full border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all inline-flex items-center gap-2"
              >
                Enviar Solicitação <Send className="size-4" />
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-navy text-white p-8 rounded-sm">
            <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-4">
              Atendimento Direto
            </div>
            <div className="space-y-5">
              <Info icon={Phone} label="Comercial">
                <a href="tel:+5512991142389" className="hover:text-primary transition-colors">
                  (12) 99114-2389
                </a>
              </Info>
              <Info icon={MessageCircle} label="WhatsApp">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Chamar no WhatsApp
                </a>
              </Info>
              <Info icon={Mail} label="E-mail">
                <a
                  href="mailto:comercial@swh.net.br"
                  className="hover:text-primary transition-colors"
                >
                  comercial@swh.net.br
                </a>
              </Info>
              <Info icon={MapPin} label="Endereço">
                Rua Itajaí, 80 — Sala 807
                <br />
                Centro Empresarial Taquari
                <br />
                São José dos Campos — SP
              </Info>
            </div>
          </div>

          <div className="bg-surface-soft border border-border p-8">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-2">
              Horário
            </div>
            <p className="font-semibold">Segunda a sexta-feira</p>
            <p className="text-sm text-muted-foreground">08h às 18h (horário de Brasília)</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={type === "tel" ? 15 : undefined}
        onInput={(e) => {
          if (type === "tel") {
            let v = e.currentTarget.value.replace(/\D/g, "");
            if (v.length <= 10) {
              v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
              v = v.replace(/(\d{4})(\d)/, "$1-$2");
            } else {
              if (v.length > 11) v = v.substring(0, 11);
              v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
              v = v.replace(/(\d{5})(\d)/, "$1-$2");
            }
            e.currentTarget.value = v;
          }
        }}
        className="w-full border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

function Info({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <Icon className="size-5 text-primary shrink-0 mt-0.5" />
      <div className="text-sm">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">
          {label}
        </div>
        <div className="text-white/90">{children}</div>
      </div>
    </div>
  );
}
