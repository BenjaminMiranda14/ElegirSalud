import { useState } from "react";
import { CheckCircle2, Send, ShieldCheck, MessageSquareMore, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Tiene algún costo usar ElegirSalud?",
    answer:
      "No, nuestro servicio es 100% gratuito para vos. Las prepagas y obras sociales nos pagan una comisión si decidís afiliarte a través nuestro, pero el precio del plan para vos es exactamente el mismo (y muchas veces conseguimos descuentos exclusivos).",
  },
  {
    question:
      "¿Qué pasa con mis aportes si soy empleado en relación de dependencia?",
    answer:
      "Tus aportes de ley (el 3% que te descuentan más el 6% que paga el empleador) se pueden derivar para pagar una prepaga o mejorar tu obra social. Nosotros te ayudamos con el trámite de derivación.",
  },
  {
    question: "¿Puedo cambiar de obra social si soy monotributista?",
    answer:
      "Sí. Una vez por año podés ejercer la opción de cambio a otra obra social del listado habilitado por la Superintendencia de Servicios de Salud. También podés derivar esos aportes hacia una prepaga pagando la diferencia.",
  },
  {
    question: "¿Tengo que hacer exámenes médicos para afiliarme a una prepaga?",
    answer:
      "Depende de la prepaga, de tu edad y de las preexistencias. Generalmente, para planes jóvenes o familiares sin enfermedades preexistentes graves no se requiere examen, solo una declaración jurada de salud.",
  },
  {
    question: "¿Qué es una preexistencia?",
    answer:
      "Es cualquier enfermedad o condición de salud conocida por vos antes de contratar el nuevo plan. Es fundamental declararla. Las prepagas deben admitirte por ley, pero pueden cobrar una cuota diferencial autorizada por la Superintendencia.",
  },
];

export function FAQ() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
    }, 3500);
  };

  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden bg-[#0a1f1c] text-white"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(0,184,156,0.18) 0px, transparent 50%), radial-gradient(circle at 90% 100%, rgba(126,231,211,0.10) 0px, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(126,231,211,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(126,231,211,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-[#00b89c]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7ee7d3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[#7ee7d3] text-xs font-semibold tracking-wider uppercase mb-5">
            <ShieldCheck className="h-3.5 w-3.5" />
            Preguntas y contacto
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Todo lo que necesitás saber antes de tomar una decisión.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full bg-white/5 rounded-3xl p-6 shadow-2xl border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-6 text-[#7ee7d3]">
              <MessageSquareMore className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wider font-semibold">
                FAQ
              </span>
            </div>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10 last:border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-[#7ee7d3] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="w-full bg-white/5 rounded-3xl shadow-2xl p-8 border border-white/10 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00b89c]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#7ee7d3]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                ¿Te quedaron dudas?
              </h3>
              <p className="text-white/65 text-sm">
                Escribinos y un asesor se contacta con vos sin cargo.
              </p>
            </div>

            {enviado ? (
              <div className="bg-[#005c53]/20 border border-[#7ee7d3]/30 rounded-2xl p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#7ee7d3] mx-auto mb-3" />
                <p className="text-[#7ee7d3] font-bold text-lg mb-1">
                  ¡Mensaje enviado!
                </p>
                <p className="text-white/70 text-sm">
                  Te vamos a contactar a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/20 text-white placeholder:text-white/40 focus:border-[#7ee7d3] focus:ring-2 focus:ring-[#7ee7d3]/20 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/20 text-white placeholder:text-white/40 focus:border-[#7ee7d3] focus:ring-2 focus:ring-[#7ee7d3]/20 outline-none"
                />
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/20 text-white placeholder:text-white/40 focus:border-[#7ee7d3] focus:ring-2 focus:ring-[#7ee7d3]/20 outline-none"
                />
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Contanos qué cobertura buscás..."
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/20 text-white placeholder:text-white/40 focus:border-[#7ee7d3] focus:ring-2 focus:ring-[#7ee7d3]/20 outline-none resize-none"
                />
                <button
                  type="submit"
                  className="bg-[#005c53] hover:bg-[#00443d] text-white h-12 rounded-xl font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                >
                  Enviar mensaje
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
