import { useState } from "react";

const WHATSAPP_NUMBER = "5491100000000";
const DEFAULT_MESSAGE =
  "Hola! Me gustaría recibir asesoramiento sobre coberturas médicas.";

export function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 group"
    >
      <span
        className={`hidden sm:block bg-white text-[#0f172a] text-sm font-medium px-3 py-2 rounded-full shadow-md border border-gray-200 transition-all duration-300 ${
          hovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Chateá con un asesor
      </span>
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative h-6 w-6 text-white"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39-.058 0-.116-.026-.174-.058-.372-.139-1.395-.604-2.39-1.486-.835-.732-1.395-1.65-1.55-1.967-.156-.317-.058-.45.116-.617.116-.116.255-.291.395-.434.139-.142.186-.244.279-.407.093-.163.046-.302-.024-.418s-.604-1.487-.829-2.04c-.218-.534-.44-.464-.604-.464l-.522-.018c-.179 0-.469.07-.715.348-.247.279-.94.918-.94 2.234s.964 2.59 1.103 2.776c.139.186 1.879 2.991 4.564 4.082.638.276 1.135.44 1.523.566.64.205 1.222.176 1.683.108.514-.077 1.581-.646 1.806-1.273.225-.627.225-1.165.158-1.273-.067-.108-.255-.176-.534-.31zM16.001 4C9.373 4 4 9.373 4 16c0 2.124.555 4.118 1.527 5.85L4 28l6.293-1.498A11.93 11.93 0 0016.001 28C22.628 28 28 22.627 28 16S22.628 4 16.001 4zm0 21.91c-1.999 0-3.873-.581-5.453-1.585l-.391-.232-3.732.889.83-3.638-.255-.402A9.86 9.86 0 016.115 16c0-5.451 4.435-9.886 9.886-9.886S25.886 10.549 25.886 16s-4.434 9.91-9.885 9.91z" />
        </svg>
      </span>
    </a>
  );
}
