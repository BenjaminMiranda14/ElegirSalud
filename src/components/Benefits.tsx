import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock4,
  HeartHandshake,
  Zap,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    metric: "100%",
    metricLabel: "Imparcial",
    title: "Sin comisiones ocultas",
    description:
      "No cobramos por recomendarte una empresa sobre otra. Toda la información se ordena de forma neutral y transparente.",
  },
  {
    icon: Clock4,
    metric: "<3 min",
    metricLabel: "Promedio",
    title: "Ahorrás tiempo real",
    description:
      "Olvidate de llamar a cada prepaga o buscar en foros. Comparás todo en un mismo panel, en pocos segundos.",
  },
  {
    icon: HeartHandshake,
    metric: "24/7",
    metricLabel: "Asesoramiento",
    title: "Asesoramiento humano",
    description:
      "Cuando lo necesites, nuestro equipo de expertos te acompaña en cada paso, sin costo y sin compromiso.",
  },
  {
    icon: Zap,
    metric: "+25",
    metricLabel: "Prestadoras",
    title: "Trámites ágiles",
    description:
      "Te ayudamos con todo el papelerío para derivar aportes o dar de alta tu nueva cobertura en tiempo récord.",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="py-24 relative overflow-hidden bg-[#0a1f1c] text-white"
    >
      {/* gradiente de fondo radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(0,184,156,0.18) 0px, transparent 50%), radial-gradient(circle at 90% 100%, rgba(126,231,211,0.10) 0px, transparent 50%)",
        }}
      />

      {/* grilla tech */}
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

      {/* glow blobs */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-[#00b89c]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7ee7d3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[#7ee7d3] text-xs font-semibold tracking-wider uppercase mb-5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Por qué ElegirSalud
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold leading-tight"
          >
            Tecnología{" "}
            <span className="bg-gradient-to-r from-[#7ee7d3] to-[#00b89c] bg-clip-text text-transparent">
              al servicio de tu salud
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-white/70"
          >
            Una plataforma moderna que combina datos actualizados, comparación
            inteligente y asesoramiento real para que decidas con total
            claridad.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative"
              >
                {/* borde con gradiente */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#7ee7d3]/40 via-white/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="relative h-full flex flex-col p-6 rounded-2xl bg-[#0d2622]/80 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 group-hover:-translate-y-1">
                  {/* glow interno al hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00b89c]/0 to-[#00b89c]/0 group-hover:from-[#00b89c]/10 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative flex items-start justify-between mb-5">
                    {/* icono tech */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#00b89c]/30 blur-xl rounded-2xl" />
                      <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#00b89c] to-[#005c53] flex items-center justify-center shadow-lg shadow-[#00b89c]/20">
                        <Icon
                          className="h-6 w-6 text-white"
                          strokeWidth={2.2}
                        />
                      </div>
                    </div>

                    {/* indicador online */}
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#7ee7d3] opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7ee7d3]" />
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">
                        Activo
                      </span>
                    </div>
                  </div>

                  {/* métrica destacada */}
                  <div className="relative mb-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-white to-[#7ee7d3] bg-clip-text text-transparent leading-none">
                      {feature.metric}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-white/50 font-semibold mt-1">
                      {feature.metricLabel}
                    </div>
                  </div>

                  <h3 className="relative text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="relative text-sm text-white/65 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* línea inferior decorativa */}
                  <div className="relative mt-5 pt-4 border-t border-white/5">
                    <div className="h-0.5 w-8 bg-gradient-to-r from-[#7ee7d3] to-transparent rounded-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* fila inferior de stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { value: "+10K", label: "Familias asesoradas" },
            { value: "+25", label: "Prestadoras comparadas" },
            { value: "98%", label: "Satisfacción" },
            { value: "$0", label: "Costo del servicio" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#7ee7d3]">
                {stat.value}
              </div>
              <div className="text-xs text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
