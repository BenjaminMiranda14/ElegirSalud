import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Phone, Globe, Mail, CheckCircle2, FileText, MapPin, AlertCircle, BadgeCheck } from "lucide-react";
import { prepagas } from "@/data/prepagas";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrepagaDetail() {
  const { id } = useParams<{ id: string }>();
  const prepaga = prepagas.find((p) => p.id === id);

  if (!prepaga) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
          <AlertCircle className="h-16 w-16 text-muted-foreground" />
          <h1 className="text-2xl font-bold text-foreground">Prepaga no encontrada</h1>
          <p className="text-muted-foreground">La prepaga que buscás no existe o fue eliminada.</p>
          <Link href="/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
        <Footer />
      </div>
    );

  }
  const priceStars =
    prepaga.price.includes("$$$") ? "$$$" :
    prepaga.price.includes("$$") ? "$$" : "$";

  const categoryLabel: Record<string, string> = {
    "Prepaga premium": "Premium",
    "Prepaga exclusiva": "Exclusiva",
    "Prepaga accesible": "Accesible",
    "Prepaga privada": "Privada",
    "Mutual de salud": "Mutual",
  };

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
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black shadow-xl shrink-0 overflow-hidden ${prepaga.logoImg ? "bg-white border border-white/40" : `text-white ${prepaga.color}`}`}>
                {prepaga.logoImg ? (
                  <img src={prepaga.logoImg} alt={`${prepaga.name} logo`} className="max-w-[80%] max-h-[80%] object-contain" />
                ) : (
                  prepaga.logo
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-white/70 text-sm font-medium">{prepaga.category}</span>
                  <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {categoryLabel[prepaga.category] ?? prepaga.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">{prepaga.name}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                    <span className="text-white font-bold text-lg">{prepaga.rating}</span>
                    <span className="text-white/60 text-sm">({prepaga.ratingCount.toLocaleString()} opiniones)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                    <BadgeCheck className="h-4 w-4 text-white/80" />
                    <span className="text-white/90 text-sm font-medium">{prepaga.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-10 grid lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* About */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border p-6 shadow-sm"
            >
              <h2 className="text-xl font-serif font-bold text-foreground mb-3">Acerca de {prepaga.name}</h2>
              <p className="text-muted-foreground leading-relaxed">{prepaga.fullDesc}</p>
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
                {prepaga.benefits.map((b, i) => (
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
                {prepaga.coverage.map((c, i) => (
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
                  <p className="text-sm text-amber-800 leading-relaxed">{prepaga.cartillaMessage}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Especialidades cubiertas</p>
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
                    "Oncología",
                    "Urología",
                    "Nutrición",
                  ].map((spec) => (
                    <div key={spec} className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-xs font-medium text-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  La disponibilidad de especialidades puede variar según el plan contratado y la zona de cobertura. Consultá directamente con la prepaga para obtener la cartilla actualizada.
                </p>
              </div>
            </motion.section>

            {/* Precios orientativos */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl border p-6 shadow-sm"
            >
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Costo aproximado</h2>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <BadgeCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Precio estimado desde</p>
                  <p className="text-2xl font-bold text-primary">{prepaga.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Los precios varían según edad, grupo familiar y plan elegido. Consultá a la prepaga para un presupuesto personalizado.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right column: contact */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border p-6 shadow-sm sticky top-24"
            >
              <h3 className="text-lg font-serif font-bold text-foreground mb-4">Contacto y afiliación</h3>

              <div className="flex flex-col gap-4 mb-6">
                <a href={`tel:${prepaga.phone}`} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group">
                  <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Teléfono</p>
                    <p className="font-semibold text-primary group-hover:underline">{prepaga.phone}</p>
                  </div>
                </a>

                <a href={`https://${prepaga.web}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group">
                  <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sitio web oficial</p>
                    <p className="font-semibold text-primary group-hover:underline text-sm">{prepaga.web}</p>
                  </div>
                </a>

                <a href={`mailto:${prepaga.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group">
                  <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-semibold text-primary group-hover:underline text-sm">{prepaga.email}</p>
                  </div>
                </a>
              </div>

              <div className="bg-primary rounded-xl p-5 text-white text-center">
                <p className="font-bold text-lg mb-1">Quiero afiliarme</p>
                <p className="text-sm text-white/80 mb-4">Contactá directamente a {prepaga.name} para recibir un presupuesto personalizado.</p>
                <a
                  href={`tel:${prepaga.phone}`}
                  className="block w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-white/90 transition-colors"
                >
                  Llamar ahora
                </a>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Los precios y coberturas son orientativos. Verificá los planes actualizados directamente con la prepaga.
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
