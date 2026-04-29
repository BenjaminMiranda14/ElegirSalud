import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/logo.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* --- LOGO EDITADO --- */}
        {/* Cambiamos el Link por un div con onClick para usar el scroll suave */}
        <div 
          onClick={() => scrollTo("hero")} 
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img 
            src={logoImg} 
            alt="ElegirSalud Logo" 
            className="h-10 w-10 object-contain transition-transform group-hover:scale-105" 
          />
          <span className="font-serif text-2xl font-black text-primary tracking-tight">
            ElegirSalud
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-muted-foreground">
          <button onClick={() => scrollTo("coberturas")} className="hover:text-primary transition-colors cursor-pointer">Coberturas</button>
          <button onClick={() => scrollTo("como-funciona")} className="hover:text-primary transition-colors cursor-pointer">Cómo funciona</button>
          <button onClick={() => scrollTo("beneficios")} className="hover:text-primary transition-colors cursor-pointer">Beneficios</button>
          <button onClick={() => scrollTo("faq")} className="hover:text-primary transition-colors cursor-pointer">Preguntas Frecuentes</button>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 flex flex-col gap-4">
          <button onClick={() => scrollTo("coberturas")} className="text-left text-base font-medium text-foreground hover:text-primary py-2 transition-colors">Coberturas</button>
          <button onClick={() => scrollTo("como-funciona")} className="text-left text-base font-medium text-foreground hover:text-primary py-2 transition-colors">Cómo funciona</button>
          <button onClick={() => scrollTo("beneficios")} className="text-left text-base font-medium text-foreground hover:text-primary py-2 transition-colors">Beneficios</button>
          <button onClick={() => scrollTo("faq")} className="text-left text-base font-medium text-foreground hover:text-primary py-2 transition-colors">Preguntas Frecuentes</button>
        </div>
      )}
    </header>
  );
}