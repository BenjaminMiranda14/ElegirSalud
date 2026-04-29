import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Send } from "lucide-react";

import heroDesktop from "../assets/ElegirSaludHero.png";
import heroMobile from "../assets/ElegirSaludMobile.png";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-black pt-20 pb-10 md:py-0"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 md:hidden">
          <img
            src={heroMobile}
            alt="Elegir Salud Mobile"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="hidden md:block absolute inset-0">
          <img
            src={heroDesktop}
            alt="Elegir Salud"
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>
      </div>

      <div className="container relative z-20 px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-teal-300 w-fit font-semibold text-xs border border-white/20 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
              La plataforma #1 de salud en Argentina
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Tu cobertura médica <br />
              <span className="text-[#7ee7d3] md:text-[#005c53]">
                Desde CASA
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white font-medium max-w-[550px] leading-relaxed drop-shadow-md">
              Comparamos más de 25 opciones para vos. <br className="hidden md:block" />
              Simple, rápido y totalmente transparente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <button
                onClick={() => scrollTo("coberturas")}
                className="bg-[#005c53] hover:bg-[#00443d] text-white h-14 px-8 text-lg font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Ver coberturas
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => scrollTo("como-funciona")}
                className="hidden md:flex bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white h-14 px-8 text-lg font-bold rounded-2xl transition-all items-center justify-center"
              >
                Cómo funciona
              </button>
            </div>

            <div className="hidden md:flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mt-6 pt-6 border-t border-white/10 w-full text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00b89c]" />
                <span className="font-medium text-sm">
                  Asesoramiento gratuito
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00b89c]" />
                <span className="font-medium text-sm">
                  Más de 25 opciones
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00b89c]" />
                <span className="font-medium text-sm">
                  Datos actualizados
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-5 md:p-8 border border-white/20 -mt-2 md:mt-0">
              <div className="mb-4 md:mb-6">
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                  Contactanos
                </h3>
                <p className="text-gray-600 text-sm">
                  Dejanos tus datos y un asesor te contacta sin cargo.
                </p>
              </div>

              {enviado ? (
                <div className="bg-[#005c53]/10 border border-[#005c53]/30 rounded-xl p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-[#005c53] mx-auto mb-3" />
                  <p className="text-[#005c53] font-bold text-lg mb-1">
                    ¡Mensaje enviado!
                  </p>
                  <p className="text-gray-600 text-sm">
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
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#005c53] focus:ring-2 focus:ring-[#005c53]/20 outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#005c53] focus:ring-2 focus:ring-[#005c53]/20 outline-none"
                  />

                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                    placeholder="Teléfono"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#005c53] focus:ring-2 focus:ring-[#005c53]/20 outline-none"
                  />

                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Mensaje"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#005c53] focus:ring-2 focus:ring-[#005c53]/20 outline-none resize-none"
                  />

                  <button
                    type="submit"
                    className="bg-[#005c53] hover:bg-[#00443d] text-white h-12 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    Enviar mensaje
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
