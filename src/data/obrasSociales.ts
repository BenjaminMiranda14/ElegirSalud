import Bonmedlogo from "../assets/ObrasSociales/bonmed.png";
import MpSaludlogo from "../assets/ObrasSociales/MPSalud.png";
import Osmedicalogo from "../assets/ObrasSociales/Osmedica.png";

export interface ObraSocial {
  id: string;
  name: string;
  logo: string;
  logoImg: string;
  color: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  coverage: string[];
  rating: number;
  ratingCount: number;
  phone: string;
  web: string;
  email: string;
  sector: string;
  cartillaMessage: string;
}

export const obrasSociales: ObraSocial[] = [
  {
    id: "MP Salud",
    name: "MP Salud",
    logo: "MP",
    logoImg: MpSaludlogo,
    color: "bg-[#0070bc]",
    shortDesc: "Obra Social privada con grandes beneficios.",
    fullDesc: "Grupo MP Salud es una cobertura médica privada argentina diseñada principalmente para monotributistas y trabajadores con recibo de sueldo.",
    benefits: ["Medicamentos gratuitos", "Atención nacional", "Turismo social"],
    coverage: ["Consultas médicas", "Internaciones", "Diagnóstico"],
    rating: 4.3,
    ratingCount: 4820,
    phone: "0800-222-7264",
    web: "www.mpsalud.org.ar",
    email: "consultas@mpsalud.org.ar",
    sector: "Prestadores Privados",
    cartillaMessage: "La cartilla médica de MP Salud se actualiza mensualmente.",
  },
  {
    id: "BONMED",
    name: "BONMED",
    logo: "BN",
    logoImg: Bonmedlogo,
    color: "bg-[#009c8d]",
    shortDesc: "Prestadores Privados.",
    fullDesc: "Grupo Bonmed es una obra social y grupo médico que opera principalmente en la Provincia de Buenos Aires y CABA.",
    benefits: ["Red en Bs.As.", "Sistema de bonos", "Salud mental"],
    coverage: ["Especialidades", "Internaciones", "Laboratorio"],
    rating: 4.4,
    ratingCount: 3150,
    phone: "0800-666-4662",
    web: "www.bonmed.org.ar",
    email: "consultas@bonmed.org.ar",
    sector: "Prestadores Privados",
    cartillaMessage: "La cartilla de BONMED incluye prestadores en toda la Provincia de Buenos Aires.",
  },
  {
    id: "Osmedica",
    name: "Osmedica",
    logo: "OM",
    logoImg: Osmedicalogo,
    color: "bg-[#0070bc]",
    shortDesc: "Obra Social de los medicos.",
    fullDesc: "Osmedica cuenta con clínicas propias, farmacias sindicales y una amplia red de prestadores a nivel nacional.",
    benefits: ["Clínicas propias", "Farmacias sindicales", "Turismo social"],
    coverage: ["Consultas médicas", "Internaciones", "Odontología"],
    rating: 3.9,
    ratingCount: 2670,
    phone: "0800-444-6723",
    web: "www.osmedica.org.ar",
    email: "info@osmedica.org.ar",
    sector: "Empleados de comercio",
    cartillaMessage: "Para consultar los prestadores de Osmedica visitá la web oficial.",
  },
];