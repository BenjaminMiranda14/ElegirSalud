import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Sparkles, MessageSquareMore, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Laura G.",
    role: "Trabajadora, CABA",
    content:
      "Estaba perdidísima con el tema de derivar aportes. En ElegirSalud me explicaron todo claro y me consiguieron un plan de MP Salud que puedo pagar.",
    rating: 5,
    initial: "L",
    color: "bg-blue-500",
  },
  {
    name: "Martín y Sofía",
    role: "Grupo Familiar, Entre Ríos",
    content:
      "Queríamos cambiar de prepaga porque la nuestra aumentó mucho. Comparamos 4 opciones y terminamos eligiendo Avalian con una cobertura excelente.",
    rating: 5,
    initial: "M",
    color: "bg-green-500",
  },
  {
    name: "Carlos P.",
    role: "Empleado de comercio, Avellaneda",
    content:
      "No sabía nada de mi obra social y los chicos de Elegir Salud me ayudaron. Me quedé en BONMED y estoy más que satisfecho.",
    rating: 4,
    initial: "C",
    color: "bg-purple-500",
  },
  {
    name: "Valentina R.",
    role: "Estudiante, Córdoba",
    content:
      "Re fácil todo. En menos de una semana ya tenía mi nueva prepaga andando, sin moverme de casa. Atención súper cordial y rápida.",
    rating: 5,
    initial: "V",
    color: "bg-pink-500",
  },
  {
    name: "Familia Gómez",
    role: "Grupo familiar, Rosario",
    content:
      "Buscábamos un plan que cubra a nuestros tres hijos sin gastar una fortuna. Nos asesoraron muy bien y hoy estamos con OSDE muy contentos.",
    rating: 5,
    initial: "G",
    color: "bg-teal-500",
  },
  {
    name: "Diego M.",
    role: "Monotributista, Mendoza",
    content:
      "Como monotributista siempre fue un quilombo entender qué obra social me convenía. Acá me lo explicaron en 10 minutos. Recomendadísimo.",
    rating: 5,
    initial: "D",
    color: "bg-amber-500",
  },
  {
    name: "Romina S.",
    role: "Diseñadora, La Plata",
    content:
      "Súper atentos. Hice todo el trámite por WhatsApp, me pasaron 3 opciones a medida y elegí la que mejor se adaptaba a mi presupuesto.",
    rating: 5,
    initial: "R",
    color: "bg-indigo-500",
  },
  {
    name: "Jorge y Marta",
    role: "Jubilados, Mar del Plata",
    content:
      "Pensábamos que iba a ser un trámite complicado a nuestra edad. Nos acompañaron paso a paso y conseguimos una cobertura ideal para los dos.",
    rating: 5,
    initial: "J",
    color: "bg-rose-500",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.max(1, testimonials.length - perView + 1);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % totalPages),
    [totalPages]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + totalPages) % totalPages),
    [totalPages]
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  useEffect(() => {
    if (index > totalPages - 1) setIndex(0);
  }, [perView, totalPages, index]);

  const visible = testimonials.slice(index, index + perView);

  return (
    <section
      className="py-24 relative overflow-hidden bg-[#0a1f1c] text-white"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(0,184,156,0.18) 0px, transparent 50%), radial-gradient(circle at 85% 75%, rgba(126,231,211,0.10) 0px, transparent 50%)",
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
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[#7ee7d3] text-xs font-semibold tracking-wider uppercase mb-5">
            <MessageSquareMore className="h-3.5 w-3.5" />
            Confianza real
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
            Historias de tranquilidad
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Miles de argentinos ya encontraron su cobertura ideal gracias a
            nuestra plataforma.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-lg border border-white/10 items-center justify-center hover:bg-[#005c53] hover:text-white text-[#005c53] transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            aria-label="Siguiente"
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-lg border border-white/10 items-center justify-center hover:bg-[#005c53] hover:text-white text-[#005c53] transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="grid gap-8"
                style={{
                  gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))`,
                }}
              >
                {visible.map((t, i) => (
                  <Card
                    key={`${index}-${i}`}
                    className="h-full flex flex-col bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm text-white"
                  >
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex gap-1">
                          {[...Array(t.rating)].map((_, j) => (
                            <Star
                              key={j}
                              className="h-5 w-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[#7ee7d3] text-xs uppercase tracking-wider font-semibold">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          Verificado
                        </div>
                      </div>
                      <p className="text-white/80 text-lg italic mb-8 leading-relaxed">
                        "{t.content}"
                      </p>

                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                        <div
                          className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 ${t.color}`}
                        >
                          {t.initial}
                        </div>
                        <div>
                          <p className="font-bold text-white leading-none mb-1">
                            {t.name}
                          </p>
                          <p className="text-sm text-white/55 leading-tight">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-[#7ee7d3]"
                    : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
