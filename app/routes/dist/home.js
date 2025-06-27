"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.meta = void 0;
var search_1 = require("../components/search");
var react_router_1 = require("react-router");
function meta(_a) {
    return [{ title: "Ecommerce de Camisetas" }];
}
exports.meta = meta;
var images = [
    {
        src: "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
        alt: "Camiseta preta",
        link: "/produtos/1"
    },
    {
        src: "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
        alt: "Camiseta branca",
        link: "/produtos/2"
    },
    {
        src: "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
        alt: "Camiseta preta",
        link: "/produtos/3"
    },
];
var popularProducts = [
    {
        id: 1,
        name: "Camiseta Minimalista",
        category: "T-Shirt",
        price: 99,
        image: "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
        color: "#808080",
        link: "/produtos/1"
    },
    {
        id: 2,
        name: "Camiseta Básica Algodão",
        category: "Cotton T-Shirt",
        price: 99,
        image: "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
        color: "#E5E5E5",
        link: "/produtos/2"
    },
    {
        id: 3,
        name: "Camiseta Militar",
        category: "T-Shirt",
        price: 99,
        image: "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
        color: "#808080",
        link: "/produtos/3"
    },
    {
        id: 4,
        name: "Camiseta Zipper",
        category: "T-Shirt",
        price: 89,
        image: "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
        color: "#D4D4AA",
        link: "/produtos/4"
    },
];
function Home() {
    var repeatedImages = __spreadArrays(images, images);
    return (React.createElement("div", null,
        React.createElement("div", { className: "bg-[url('/assets/grain-texture.png')]" },
            React.createElement(search_1["default"], { alignWith: "inicio" }),
            React.createElement("section", { className: "w-full px-20 mt-20 pb-28" },
                React.createElement("div", { className: "container mx-auto max-w-7xl" },
                    React.createElement("div", { className: "flex gap-6 items-center mt-8" },
                        React.createElement("div", { className: "flex-shrink-0 w-1/3 space-y-6" },
                            React.createElement("div", null,
                                React.createElement("h1", { className: "text-5xl lg:text-6xl font-bold text-black leading-tight" },
                                    "NOVA",
                                    React.createElement("br", null),
                                    "COLE\u00C7\u00C3O"),
                                React.createElement("p", { className: "text-lg text-gray-600 mt-2" }, "Ver\u00E3o 2025")),
                            React.createElement(react_router_1.NavLink, { to: "/produtos", className: "inline-flex items-center group hover:opacity-80 transition-opacity" },
                                React.createElement("span", { className: "text-lg font-medium text-black mr-4" }, "Ir para loja"),
                                React.createElement("div", { className: "flex items-center" },
                                    React.createElement("img", { src: "/assets/vector.svg", alt: "Seta", className: "w-12 h-12 transform transition-transform group-hover:translate-x-1", draggable: false })))),
                        React.createElement("div", { className: "relative w-2/3 overflow-x-hidden pr-32" },
                            React.createElement("div", { className: "flex" },
                                React.createElement("div", { className: "flex animate-infinite-scroll gap-4" }, repeatedImages.map(function (image, index) { return (React.createElement(react_router_1.NavLink, { to: image.link, key: "first-" + index, className: "flex-shrink-0 bg-gray-100 overflow-hidden aspect-[3/4] w-[366px]", "aria-label": image.alt },
                                    React.createElement("img", { src: image.src, alt: image.alt, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300" }))); })),
                                React.createElement("div", { className: "flex animate-infinite-scroll gap-4" }, repeatedImages.map(function (image, index) { return (React.createElement(react_router_1.NavLink, { to: image.link, key: "second-" + index, className: "flex-shrink-0 bg-gray-100 overflow-hidden aspect-[3/4] w-[366px]", "aria-label": image.alt },
                                    React.createElement("img", { src: image.src, alt: image.alt, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300" }))); })))))))),
        React.createElement("section", { className: "w-full px-20 mt-20" },
            React.createElement("div", { className: "container mx-auto max-w-7xl" },
                React.createElement("div", { className: "flex justify-between items-end mb-12" },
                    React.createElement("div", null,
                        React.createElement("h2", { className: "text-4xl lg:text-5xl font-bold text-black leading-tight" },
                            "POPULARES",
                            React.createElement("br", null),
                            "ESSA SEMANA")),
                    React.createElement(react_router_1.NavLink, { to: "/produtos", className: "text-lg text-gray-600 hover:text-black transition-colors underline" }, "Ver tudo")),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, popularProducts.map(function (product) { return (React.createElement(react_router_1.NavLink, { key: product.id, to: product.link, className: "group block overflow-hidden hover:shadow-lg transition-shadow duration-300" },
                    React.createElement("div", { className: "aspect-[3/4] bg-gray-100 overflow-hidden" },
                        React.createElement("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })),
                    React.createElement("div", { className: "p-4 space-y-2" },
                        React.createElement("div", { className: "flex items-center gap-x-2" },
                            React.createElement("span", { className: "text-sm text-gray-500 font-medium" }, product.category),
                            React.createElement("div", { className: "w-4 h-4 border border-gray-300", style: { backgroundColor: product.color }, "aria-label": "Cor dispon\u00EDvel" })),
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("h3", { className: "text-sm font-medium text-black group-hover:text-gray-700 transition-colors" }, product.name),
                            React.createElement("p", null,
                                "R$ ",
                                product.price))))); })))),
        React.createElement("section", { className: "w-full px-20 mt-20" },
            React.createElement("div", { className: "container mx-auto max-w-7xl" },
                React.createElement("div", { className: "flex justify-between items-end mb-12" },
                    React.createElement("div", null,
                        React.createElement("h2", { className: "text-4xl lg:text-5xl font-bold text-black leading-tight" },
                            "TODOS OS",
                            React.createElement("br", null),
                            "PRODUTOS")),
                    React.createElement(react_router_1.NavLink, { to: "/produtos", className: "text-lg text-gray-600 hover:text-black transition-colors underline" }, "Ver tudo")),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, popularProducts.map(function (product) { return (React.createElement(react_router_1.NavLink, { key: product.id, to: product.link, className: "group block overflow-hidden hover:shadow-lg transition-shadow duration-300" },
                    React.createElement("div", { className: "aspect-[3/4] bg-gray-100 overflow-hidden" },
                        React.createElement("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })),
                    React.createElement("div", { className: "p-4 space-y-2" },
                        React.createElement("div", { className: "flex items-center gap-x-2" },
                            React.createElement("span", { className: "text-sm text-gray-500 font-medium" }, product.category),
                            React.createElement("div", { className: "w-4 h-4 border border-gray-300", style: { backgroundColor: product.color }, "aria-label": "Cor dispon\u00EDvel" })),
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("h3", { className: "text-sm font-medium text-black group-hover:text-gray-700 transition-colors" }, product.name),
                            React.createElement("p", null,
                                "R$ ",
                                product.price))))); })),
                React.createElement("div", { className: "flex justify-center mt-12" },
                    React.createElement(react_router_1.NavLink, { to: "/produtos", className: "text-lg font-medium text-gray-600 hover:text-black transition-colors underline" }, "Mais")))),
        React.createElement("section", { className: "w-full px-20 mt-32 mb-20" },
            React.createElement("div", { className: "container mx-auto max-w-7xl" },
                React.createElement("div", { className: "text-center mb-16" },
                    React.createElement("h2", { className: "text-4xl lg:text-5xl font-semibold text-black leading-tight tracking-wider" }, "NOSSA ABORDAGEM AO DESIGN DE MODA")),
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" },
                    React.createElement("div", { className: "relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]" },
                        React.createElement("img", { src: "https://www.yourchurch.com/content/uploads/2023/08/Book-Brief_-_Finding-the-Right-Hills-to-Die-On_.jpg", alt: "Look urbano masculino com casaco escuro", className: "w-full h-full object-cover opacity-70" })),
                    React.createElement("div", { className: "relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]" },
                        React.createElement("img", { src: "https://themes.muffingroup.com/be/clothingstore2/wp-content/uploads/2022/09/clothingstore2-man-pic12-800x888.webp", alt: "Look minimalista masculino com conjunto branco", className: "w-full h-full object-cover opacity-70" }))),
                React.createElement("div", { className: "max-w-4xl mx-auto text-center" },
                    React.createElement("p", { className: "text-lg leading-relaxed text-gray-700" },
                        "Na ",
                        React.createElement("span", { className: "font-semibold italic" }, "Elegante"),
                        ", unimos criatividade e habilidade artesanal para criar moda que transcende as tend\u00EAncias e resiste ao teste do tempo. Cada pe\u00E7a \u00E9 meticulosamente elaborada, garantindo a mais alta qualidade e um acabamento requintado."))))));
}
exports["default"] = Home;
