import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImg from "../assets/logo.png";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1.5 rounded-full">
                <img src={logoImg} alt="ElegirSalud Logo" className="h-8 w-8 object-contain" />
              </div>
              <span className="font-serif text-2xl font-black text-white tracking-tight">ElegirSalud</span>
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed">
              Simplificamos la forma en que los argentinos eligen su cobertura médica, aportando transparencia y asesoramiento humano.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Plataforma</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Comparador de Prepagas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Obras Sociales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Planes para Monotributistas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Calculadora de Aportes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog de Salud</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Compañía</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Quiénes Somos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cómo Funciona</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Defensa del Consumidor</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Av. Corrientes 1234, Piso 5<br/>C1043 AAZ, Buenos Aires</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>0800-122-SALUD (7258)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>ElegirSalud@Gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} ElegirSalud. Todos los derechos reservados.
          </p>
          <p className="text-white/50 text-sm">
          {/*Desarrollado por <a href="https://www.designweb.com.ar" className="text-primary hover:underline">Design Web</a>. */}
          </p>
        </div>
      </div>
    </footer>
  );
}