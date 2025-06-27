"use strict";
exports.__esModule = true;
var react_router_1 = require("react-router");
// import Logo from "../assets/logo.svg";
// import CartIcon from "../assets/cart.svg";
// import UserIcon from "../assets/user.svg";
function Navbar() {
    return (React.createElement("header", { className: "relative w-full px-20 pt-8 bg-[url('/assets/grain-texture.png')]" },
        React.createElement("div", { className: "container flex items-center justify-between py-5 mx-auto max-w-7xl" },
            React.createElement("nav", { className: "flex flex-wrap items-center gap-x-15" },
                React.createElement(react_router_1.NavLink, { to: "/", end: true, className: "font-medium text-black hover:text-gray-600" }, "In\u00EDcio"),
                React.createElement(react_router_1.NavLink, { to: "/produtos", className: "font-medium text-black hover:text-gray-600" }, "Cole\u00E7\u00E3o"),
                React.createElement(react_router_1.NavLink, { to: "/produtos/novo", className: "font-medium text-black hover:text-gray-600" }, "Novo")),
            React.createElement("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" },
                React.createElement(react_router_1.NavLink, { to: "/", className: "flex items-center" },
                    React.createElement("img", { src: "/assets/logo.svg", alt: "Logo", className: "h-10 w-auto" }))),
            React.createElement("div", { className: "flex gap-x-6 ml-auto items-center" },
                React.createElement(react_router_1.NavLink, { to: "/carrinho", className: "flex items-center justify-center h-15 w-15 rounded-full bg-white border border-black shadow hover:opacity-80 transition", "aria-label": "Carrinho" },
                    React.createElement("img", { src: "/assets/cart.svg", alt: "Carrinho", className: "h-5 w-5" })),
                React.createElement(react_router_1.NavLink, { to: "/perfil", className: "flex items-center justify-center h-15 w-15 rounded-full bg-black shadow hover:opacity-80 transition", "aria-label": "Usu\u00E1rio" },
                    React.createElement("img", { src: "/assets/user.svg", alt: "Usu\u00E1rio", className: "h-5 w-5" }))))));
}
exports["default"] = Navbar;
