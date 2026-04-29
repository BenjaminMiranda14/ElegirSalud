import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ChevronLeft, ChevronRight, Check, ArrowRight, Sparkles, ShieldCheck, Layers3 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useLocation } from "wouter";
import { obrasSociales } from "@/data/obrasSociales";
import { prepagas as prepagasData } from "@/data/prepagas";

const prepagas = prepagasData.map((p) => ({
  id: p.id,
  name: p.name,
  logo: p.logo,
  logoImg: p.logoImg,
  color: p.color,
  desc: p.shortDesc,
  benefits: p.benefits.slice(0, 3),
  price: p.price.split("/")[0].replace("Desde ", ""),
  rating: p.rating,
}));

const PlanCard = ({ plan, onClick }: { plan: any; onClick?: () => void }) => (
  <Card
    onClick={onClick}
    className={`h-full flex flex-col border-white/10 bg-[#0d2622]/90 text-white transition-all duration-300 backdrop-blur-sm ${onClick ? "cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00b89c]/10 hover:border-[#7ee7d3]/40" : ""}`}
  >
    <CardContent className="p-6 flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base shadow-md overflow-hidden ${plan.logoImg ? "bg-white border border-white/10" : `text-white ${plan.color}`}`}>
          {plan.logoImg ? (
            <img src={plan.logoImg} alt={`${plan.name} logo`} className="max-w-[80%] max-h-[80%] object-contain" />
          ) : (
            plan.logo
          )}
        </div>
        <div className="flex items-center bg-white/5 px-2 py-1 rounded-full border border-white/10">
          <Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-1" />
          <span className="text-sm font-bold text-white">{plan.rating}</span>
        </div>
      </div>
      <h3 className="text-lg font-serif font-bold text-white mb-1">{plan.name}</h3>
      <p className="text-sm text-white/65 mb-4">{plan.desc}</p>
      <div className="flex-1">
        <ul className="space-y-2 mb-6">
          {plan.benefits.map((benefit: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <Check className="h-4 w-4 text-[#7ee7d3] mt-0.5 mr-2 shrink-0" />
              <span className="text-sm text-white/80">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
        <div>
          <p className="text-xs text-white/50">Costo mensual</p>
          <p className="font-bold text-[#7ee7d3]">{plan.price ?? "Aportes"}</p>
        </div>
        {onClick && (
          <div className="flex items-center gap-1 text-white font-semibold text-sm">
            Ver detalle
            <ArrowRight className="h-4 w-4" />
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);

const Carousel = ({ items, onCardClick }: { items: any[]; onCardClick?: (id: string) => void }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", containScroll: "trimSnaps" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    const onReInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    };
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6 ml-4 sm:ml-0 py-6">
          {items.map((item) => (
            <div key={item.id} className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_32%] min-w-0">
              <PlanCard plan={item} onClick={onCardClick ? () => onCardClick(item.id) : undefined} />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 h-11 w-11 rounded-full bg-white shadow-xl border border-white/10 hidden sm:flex items-center justify-center transition-all hover:bg-[#005c53] hover:text-white hover:scale-110 disabled:opacity-30 disabled:pointer-events-none disabled:cursor-not-allowed z-10"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 h-11 w-11 rounded-full bg-white shadow-xl border border-white/10 hidden sm:flex items-center justify-center transition-all hover:bg-[#005c53] hover:text-white hover:scale-110 disabled:opacity-30 disabled:pointer-events-none disabled:cursor-not-allowed z-10"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Siguiente"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {scrollSnaps.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              aria-label={`Ir al slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === selectedIndex ? "w-8 bg-[#7ee7d3]" : "w-1.5 bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export function CoverageSection() {
  const [, navigate] = useLocation();
  return (
    <section id="coberturas" className="py-24 relative overflow-hidden bg-[#0a1f1c] text-white">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 0%, rgba(0,184,156,0.18) 0px, transparent 50%), radial-gradient(circle at 90% 100%, rgba(126,231,211,0.10) 0px, transparent 50%)" }} />
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(126,231,211,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(126,231,211,0.4) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }} />
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-[#00b89c]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7ee7d3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[#7ee7d3] text-xs font-semibold tracking-wider uppercase mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Coberturas inteligentes
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">Prepagas y Obras Sociales</h2>
          <p className="mt-4 text-lg text-white/70">Compará planes con una experiencia simple, clara y visualmente consistente con toda la web.</p>
        </div>

        <Tabs defaultValue="prepagas" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/5 backdrop-blur-md border border-white/10 p-[4px] rounded-full w-full max-w-sm flex overflow-hidden">
              <TabsTrigger value="prepagas" className="flex-1 h-10 rounded-full text-white/80 font-semibold transition-all data-[state=active]:bg-white data-[state=active]:text-[#005c53]">Prepagas</TabsTrigger>
              <TabsTrigger value="obras-sociales" className="flex-1 h-10 rounded-full text-white/80 font-semibold transition-all data-[state=active]:bg-white data-[state=active]:text-[#005c53]">Obras Sociales</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="prepagas">
            <Carousel items={prepagas} onCardClick={(id) => navigate(`/prepaga/${id}`)} />
          </TabsContent>
          <TabsContent value="obras-sociales">
            <Carousel items={obrasSociales} onCardClick={(id) => navigate(`/obra-social/${id}`)} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
