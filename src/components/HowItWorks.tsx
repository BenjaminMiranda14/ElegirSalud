import { motion } from "framer-motion";
import { ArrowRight, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import step1 from "../assets/steps/step-1.png";
import step2 from "../assets/steps/step-2.png";
import step3 from "../assets/steps/step-3.png";

const steps = [
  {
    number: "01",
    image: step1,
    icon: Layers3,
    title: "Completá tus datos",
    description:
      "Contanos sobre vos, tu grupo familiar, tu edad y tu situación laboral actual para personalizar la búsqueda.",
  },
  {
    number: "02",
    image: step2,
    icon: Sparkles,
    title: "Compará opciones",
    description:
      "Nuestro sistema analiza más de 25 prestadoras y te muestra los planes que mejor se adaptan a tu presupuesto y necesidades.",
  },
  {
    number: "03",
    image: step3,
    icon: ShieldCheck,
    title: "Elegí y asóciate",
    description:
      "Seleccioná el plan ideal y nosotros te ayudamos con el alta y, si corresponde, con la derivación de tus aportes.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[#7ee7d3] text-xs font-semibold tracking-wider uppercase mb-5">
            <ArrowRight className="h-3.5 w-3.5" />
            El proceso
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
            Encontrar tu plan ideal es simple
          </h2>
          <p className="mt-4 text-lg text-white/70">
            En tres pasos rápidos, accedés a la mejor cobertura para vos y tu
            familia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 relative">
          <div className="hidden md:block absolute top-[140px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-[#7ee7d3]/40 to-transparent z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="relative w-full max-w-[280px] mb-6">
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#7ee7d3]/40 via-white/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#0d2622]/90 border border-white/10 shadow-[0_10px_40px_-15px_rgba(0,92,83,0.35)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_-15px_rgba(0,92,83,0.5)]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/15 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                      Paso {step.number}
                    </div>
                    <div className="absolute bottom-4 right-4 h-11 w-11 rounded-xl bg-[#00b89c]/90 flex items-center justify-center shadow-lg shadow-[#00b89c]/20">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
