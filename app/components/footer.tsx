// src/components/Footer.tsx
import { NavLink } from "react-router";
import { useEffect, useRef, useState } from "react";
// import Logo from "../assets/logo.svg";
// import ToTopIcon from "../assets/to-top.svg";
// import grainTexture from "../assets/grain-texture.png";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  // Controla a visibilidade do botão "voltar ao topo"
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollTop(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.2, // pode ajustar esse valor conforme necessário
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[url(../assets/grain-texture.png)] border-t border-gray-200"
    >
      <div className="container mx-auto max-w-7xl px-20 mt-10 pb-5">
        {/* Logo centralizado */}
        <div className="flex justify-center mb-12">
          <NavLink to="/" className="flex items-center">
            <img src="/assets/logo.svg" alt="Logo" className="h-12 w-auto" />
          </NavLink>
        </div>

        {/* Links de navegação centralizados verticalmente */}
        <nav className="flex flex-col justify-center items-center gap-y-6 mb-16">
          <NavLink
            to="/privacidade"
            className="text-gray-600 hover:text-black transition-colors font-medium"
          >
            PRIVACIDADE
          </NavLink>
          <NavLink
            to="/sobre"
            className="text-gray-600 hover:text-black transition-colors font-medium"
          >
            SOBRE NÓS
          </NavLink>
          <NavLink
            to="/contatos"
            className="text-gray-600 hover:text-black transition-colors font-medium"
          >
            CONTATOS
          </NavLink>
        </nav>

        {/* Botão voltar ao topo - canto inferior esquerdo */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg z-50"
            aria-label="Voltar ao topo"
          >
            <img
              src="/assets/to-top.svg"
              alt="Voltar ao topo"
              className="w-6 h-6"
            />
          </button>
        )}

        {/* Copyright e privacidade - parte inferior */}
        <div className="flex justify-between items-center text-sm text-gray-500 border-t border-gray-200 pt-8">
          <span>© 2025 — copyright</span>
          <NavLink
            to="/privacidade"
            className="hover:text-gray-700 transition-colors"
          >
            privacidade
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
