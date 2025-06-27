"use strict";
exports.__esModule = true;
// src/components/Footer.tsx
var react_router_1 = require("react-router");
var react_1 = require("react");
// import Logo from "../assets/logo.svg";
// import ToTopIcon from "../assets/to-top.svg";
// import grainTexture from "../assets/grain-texture.png";
function Footer() {
    var _a = react_1.useState(false), showScrollTop = _a[0], setShowScrollTop = _a[1];
    var footerRef = react_1.useRef(null);
    // Controla a visibilidade do botão "voltar ao topo"
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            setShowScrollTop(entry.isIntersecting);
        }, {
            root: null,
            threshold: 0.2
        });
        if (footerRef.current) {
            observer.observe(footerRef.current);
        }
        return function () {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);
    // Função para voltar ao topo
    var scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (React.createElement("footer", { ref: footerRef, className: "relative w-full bg-[url(../assets/grain-texture.png)] border-t border-gray-200" },
        React.createElement("div", { className: "container mx-auto max-w-7xl px-20 mt-10 pb-5" },
            React.createElement("div", { className: "flex justify-center mb-12" },
                React.createElement(react_router_1.NavLink, { to: "/", className: "flex items-center" },
                    React.createElement("img", { src: "/assets/logo.svg", alt: "Logo", className: "h-12 w-auto" }))),
            React.createElement("nav", { className: "flex flex-col justify-center items-center gap-y-6 mb-16" },
                React.createElement(react_router_1.NavLink, { to: "/privacidade", className: "text-gray-600 hover:text-black transition-colors font-medium" }, "PRIVACIDADE"),
                React.createElement(react_router_1.NavLink, { to: "/sobre", className: "text-gray-600 hover:text-black transition-colors font-medium" }, "SOBRE N\u00D3S"),
                React.createElement(react_router_1.NavLink, { to: "/contatos", className: "text-gray-600 hover:text-black transition-colors font-medium" }, "CONTATOS")),
            showScrollTop && (React.createElement("button", { onClick: scrollToTop, className: "fixed bottom-8 left-8 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg z-50", "aria-label": "Voltar ao topo" },
                React.createElement("img", { src: "/assets/to-top.svg", alt: "Voltar ao topo", className: "w-6 h-6" }))),
            React.createElement("div", { className: "flex justify-between items-center text-sm text-gray-500 border-t border-gray-200 pt-8" },
                React.createElement("span", null, "\u00A9 2025 \u2014 copyright"),
                React.createElement(react_router_1.NavLink, { to: "/privacidade", className: "hover:text-gray-700 transition-colors" }, "privacidade")))));
}
exports["default"] = Footer;
