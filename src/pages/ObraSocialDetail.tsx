import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Phone, Globe, Mail, CheckCircle2, FileText, MapPin, AlertCircle } from "lucide-react";
import { obrasSociales } from "@/data/obrasSociales";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ObraSocialDetail() {
  const { id } = useParams<{ id: string }>();
  const obra = obrasSociales.find((o) => o.id === id);

  if (!obra) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
          <AlertCircle className="h-16 w-16 text-muted-foreground" />
          <h1 className="text-2xl font-bold text-foreground">Obra social no encontrada</h1>
          <p className="text-muted-foreground">La obra social que buscás no existe o fue eliminada.</p>
          <Link href="/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Back bar */}
        <div className="bg-white border-b py-3 px-4 md:px-6">
          <div className="container mx-auto">
            <Link href="/#coberturas" className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm">
              <ArrowLeft className="h-4 w-4" />
              Volver a coberturas
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-[#145044] py-14 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black shadow-xl shrink-0 overflow-hidden ${obra.logoImg ? "bg-white border border-white/40" : `text-white ${obra.color}`}`}>
                {obra.logoImg ? (
                  <img src={obra.logoImg} alt={`${obra.name} logo`} className="max-w-[80%] max-h-[80%] object-contain" />
                ) : (
                  obra.logo
                )}
              </div>
              <div>
                <div className="text-white/70 text-sm font-medium mb-1">{obra.sector}</div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">{obra.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                  <span className="text-white font-bold text-lg">{obra.rating}</span>
                  <span className="text-white/60 text-sm">({obra.ratingCount.toLocaleString()} opiniones)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-10 grid lg:grid-cols-3 gap-8">
          {/* Left column: main info */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* About */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border p-6 shadow-sm"
            >
              <h2 className="text-xl font-serif font-bold text-foreground mb-3">Acerca de {obra.name}</h2>
              <p className="text-muted-foreground leading-relaxed">{obra.fullDesc}</p>
            </motion.section>

            {/* Benefits */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl border p-6 shadow-sm"
            >
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Beneficios incluidos</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {obra.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 bg-primary/5 rounded-xl p-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Coverage */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border p-6 shadow-sm"
            >
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Qué cubre</h2>
              <ul className="flex flex-col gap-3">
                {obra.coverage.map((c, i) => (
                  <li key={i} className="flex items-center gap-3 py-2 border-b last:border-0">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Cartilla Médica */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white rounded-2xl border p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-serif font-bold text-foreground">Cartilla Médica</h2>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 leading-relaxed">{obra.cartillaMessage}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Especialidades disponibles</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Clínica Médica",
                    "Cardiología",
                    "Pediatría",
                    "Ginecología",
                    "Traumatología",
                    "Neurología",
                    "Dermatología",
                    "Oftalmología",
                    "Psicología",
                    "Odontología",
                    "Kinesiología",
                    "Endocrinología",
                  ].map((spec) => (
                    <div key={spec} className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-xs font-medium text-foreground">{spec}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mt-2">
                  La cartilla completa con los profesionales disponibles en tu zona puede consultarse directamente con la obra social. Las especialidades disponibles pueden variar según la localidad.
                </p>
              </div>
            </motion.section>
          </div>

          {/* Right column: contact & CTA */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border p-6 shadow-sm sticky top-24"
            >
              <h3 className="text-lg font-serif font-bold text-foreground mb-4">Contacto y afiliación</h3>

              <div className="flex flex-col gap-4 mb-6">
                <a href={`tel:${obra.phone}`} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group">
                  <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Teléfono</p>
                    <p className="font-semibold text-primary group-hover:underline">{obra.phone}</p>
                  </div>
                </a>

                <a href={`https://${obra.web}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group">
                  <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sitio web</p>
                    <p className="font-semibold text-primary group-hover:underline text-sm">{obra.web}</p>
                  </div>
                </a>

                <a href={`mailto:${obra.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group">
                  <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-semibold text-primary group-hover:underline text-sm">{obra.email}</p>
                  </div>
                </a>
              </div>

              <div className="bg-primary rounded-xl p-5 text-white text-center">
                <p className="font-bold text-lg mb-1">¿Sos afiliado?</p>
                <p className="text-sm text-white/80 mb-4">Consultá los beneficios disponibles para tu categoría llamando directamente a {obra.name}.</p>
                <a
                  href={`tel:${obra.phone}`}
                  className="block w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-white/90 transition-colors"
                >
                  Llamar ahora
                </a>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                La información es orientativa. Verificá los planes disponibles directamente con la obra social.
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
