"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
var search_svg_1 = require("../assets/search.svg");
var categoryFilters = [
    { id: "novo", label: "NOVO", active: false },
    { id: "populares", label: "POPULARES", active: false },
    { id: "camisas", label: "CAMISAS", active: false },
    { id: "camisetas", label: "CAMISETAS", active: false },
    { id: "polo", label: "POLO", active: false },
    { id: "jeans", label: "JEANS", active: false },
    { id: "shorts", label: "SHORTS", active: false },
    { id: "jackets", label: "JACKETS", active: false },
    { id: "ternos", label: "TERNOS", active: false },
    { id: "blusas", label: "BLUSAS", active: false },
];
var products = [
    {
        id: 1,
        name: "Básica Slim Fit",
        category: "Algodão",
        price: "R$ 199",
        image: "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
        color: "#F5F5DC",
        link: "/produtos/1"
    },
    {
        id: 2,
        name: "Básica",
        category: "Algodão",
        price: "R$ 199",
        image: "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
        color: "#000000",
        link: "/produtos/2"
    },
    {
        id: 3,
        name: "Camisa",
        category: "Algodão",
        price: "R$ 199",
        image: "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
        color: "#2F4F4F",
        link: "/produtos/3"
    },
    {
        id: 4,
        name: "Básica Slim Fit",
        category: "Algodão",
        price: "R$ 199",
        image: "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
        color: "#8B4513",
        link: "/produtos/4"
    },
    {
        id: 5,
        name: "Básica",
        category: "Algodão",
        price: "R$ 199",
        image: "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
        color: "#000000",
        link: "/produtos/5"
    },
    {
        id: 6,
        name: "Camisa",
        category: "Algodão",
        price: "R$ 199",
        image: "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
        color: "#87CEEB",
        link: "/produtos/6"
    },
    {
        id: 7,
        name: "Básica Slim Fit",
        category: "Algodão",
        price: "R$ 199",
        image: "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
        color: "#F5F5DC",
        link: "/produtos/7"
    },
    {
        id: 8,
        name: "Básica",
        category: "Algodão",
        price: "R$ 199",
        image: "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
        color: "#000000",
        link: "/produtos/8"
    },
    {
        id: 9,
        name: "Camisa",
        category: "Algodão",
        price: "R$ 199",
        image: "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
        color: "#2F4F4F",
        link: "/produtos/9"
    },
];
function Produtos() {
    var _a = react_1.useState({
        tamanhos: [],
        disponibilidade: "todos",
        categoria: [],
        cores: [],
        precoMin: 0,
        precoMax: 1000,
        colecao: [],
        tags: [],
        avaliacoes: 0
    }), filters = _a[0], setFilters = _a[1];
    var _b = react_1.useState({
        avaliados: true,
        categoria: false,
        cores: false,
        preco: false,
        colecao: false,
        tags: false,
        avaliacoes: false
    }), expandedSections = _b[0], setExpandedSections = _b[1];
    var tamanhos = ["PP", "P", "M", "L", "G"];
    var toggleSection = function (section) {
        setExpandedSections(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[section] = !prev[section], _a)));
        });
    };
    var handleTamanhoChange = function (tamanho) {
        setFilters(function (prev) { return (__assign(__assign({}, prev), { tamanhos: prev.tamanhos.includes(tamanho)
                ? prev.tamanhos.filter(function (t) { return t !== tamanho; })
                : __spreadArrays(prev.tamanhos, [tamanho]) })); });
    };
    var handleDisponibilidadeChange = function (tipo) {
        setFilters(function (prev) { return (__assign(__assign({}, prev), { disponibilidade: tipo })); });
    };
    var _c = react_1.useState([]), activeFilters = _c[0], setActiveFilters = _c[1];
    var _d = react_1.useState(""), searchTerm = _d[0], setSearchTerm = _d[1];
    var toggleFilter = function (filterId) {
        setActiveFilters(function (prev) {
            return prev.includes(filterId)
                ? prev.filter(function (id) { return id !== filterId; })
                : __spreadArrays(prev, [filterId]);
        });
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex min-h-screen" },
            React.createElement("aside", { className: "fixed top-65 left-0 h-screen overflow-y-auto w-80 bg-white border-r border-gray-200 p-6 z-40" },
                React.createElement("div", { className: "space-y-8" },
                    React.createElement("h2", { className: "text-2xl font-bold text-black" }, "Filtros"),
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("h3", { className: "text-lg font-semibold text-black" }, "Tamanho"),
                        React.createElement("div", { className: "flex gap-2" }, tamanhos.map(function (tamanho) { return (React.createElement("button", { key: tamanho, onClick: function () { return handleTamanhoChange(tamanho); }, className: "w-12 h-12 border-2 font-medium transition-colors " + (filters.tamanhos.includes(tamanho)
                                ? "border-black bg-black text-white"
                                : "border-gray-300 text-black hover:border-gray-400") }, tamanho)); }))),
                    React.createElement("div", { className: "border-t border-gray-200" }),
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("button", { onClick: function () { return toggleSection("avaliados"); }, className: "flex items-center justify-between w-full text-left" },
                            React.createElement("h3", { className: "text-lg font-semibold text-black" }, "Avaliados"),
                            React.createElement("svg", { className: "w-5 h-5 transition-transform " + (expandedSections.avaliados ? "rotate-180" : ""), fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }))),
                        expandedSections.avaliados && (React.createElement("div", { className: "space-y-3" },
                            React.createElement("label", { className: "flex items-center space-x-3" },
                                React.createElement("input", { type: "checkbox", checked: filters.disponibilidade === "disponiveis", onChange: function () {
                                        return handleDisponibilidadeChange("disponiveis");
                                    }, className: "w-4 h-4 border-gray-300 rounded" }),
                                React.createElement("span", { className: "text-gray-700" }, "Dispon\u00EDveis (30)")),
                            React.createElement("label", { className: "flex items-center space-x-3" },
                                React.createElement("input", { type: "checkbox", checked: filters.disponibilidade === "todos", onChange: function () { return handleDisponibilidadeChange("todos"); }, className: "w-4 h-4 border-gray-300 rounded" }),
                                React.createElement("span", { className: "text-gray-700" }, "Todos os itens (50)"))))),
                    React.createElement("div", { className: "border-t border-gray-200" }),
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("button", { onClick: function () { return toggleSection("categoria"); }, className: "flex items-center justify-between w-full text-left" },
                            React.createElement("h3", { className: "text-lg font-semibold text-black" }, "Categoria"),
                            React.createElement("svg", { className: "w-5 h-5 transition-transform " + (expandedSections.categoria ? "rotate-180" : "rotate-90"), fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })))),
                    React.createElement("div", { className: "border-t border-gray-200" }),
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("button", { onClick: function () { return toggleSection("cores"); }, className: "flex items-center justify-between w-full text-left" },
                            React.createElement("h3", { className: "text-lg font-semibold text-black" }, "Cores"),
                            React.createElement("svg", { className: "w-5 h-5 transition-transform " + (expandedSections.cores ? "rotate-180" : "rotate-90"), fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })))),
                    React.createElement("div", { className: "border-t border-gray-200" }),
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("button", { onClick: function () { return toggleSection("preco"); }, className: "flex items-center justify-between w-full text-left" },
                            React.createElement("h3", { className: "text-lg font-semibold text-black" }, "Pre\u00E7o"),
                            React.createElement("svg", { className: "w-5 h-5 transition-transform " + (expandedSections.preco ? "rotate-180" : "rotate-90"), fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })))),
                    React.createElement("div", { className: "border-t border-gray-200" }),
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("button", { onClick: function () { return toggleSection("colecao"); }, className: "flex items-center justify-between w-full text-left" },
                            React.createElement("h3", { className: "text-lg font-semibold text-black" }, "Cole\u00E7\u00E3o"),
                            React.createElement("svg", { className: "w-5 h-5 transition-transform " + (expandedSections.colecao ? "rotate-180" : "rotate-90"), fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })))),
                    React.createElement("div", { className: "border-t border-gray-200" }),
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("button", { onClick: function () { return toggleSection("tags"); }, className: "flex items-center justify-between w-full text-left" },
                            React.createElement("h3", { className: "text-lg font-semibold text-black" }, "Tags"),
                            React.createElement("svg", { className: "w-5 h-5 transition-transform " + (expandedSections.tags ? "rotate-180" : "rotate-90"), fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })))),
                    React.createElement("div", { className: "border-t border-gray-200" }),
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("button", { onClick: function () { return toggleSection("avaliacoes"); }, className: "flex items-center justify-between w-full text-left" },
                            React.createElement("h3", { className: "text-lg font-semibold text-black" }, "Avalia\u00E7\u00F5es"),
                            React.createElement("svg", { className: "w-5 h-5 transition-transform " + (expandedSections.avaliacoes ? "rotate-180" : "rotate-90"), fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })))))),
            React.createElement("main", { className: "flex-1 p-8" },
                React.createElement("div", { className: "max-w-6xl mx-auto" },
                    React.createElement("nav", { className: "text-sm text-gray-600 mb-6" },
                        React.createElement(react_router_1.NavLink, { to: "/", className: "hover:text-black" }, "In\u00EDcio"),
                        React.createElement("span", { className: "mx-2" }, "/"),
                        React.createElement("span", { className: "text-black" }, "Produtos")),
                    React.createElement("h1", { className: "text-4xl font-bold text-black mb-8" }, "PRODUTOS"),
                    React.createElement("div", { className: "flex items-center gap-6 mb-12" },
                        React.createElement("div", { className: "flex-shrink-0" },
                            React.createElement("div", { className: "flex items-center bg-gray-200 rounded-sm h-12 w-80 px-4" },
                                React.createElement("img", { src: search_svg_1["default"], alt: "Pesquisar", className: "h-5 w-5 mr-3 opacity-70" }),
                                React.createElement("input", { type: "text", placeholder: "Pesquisar", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, className: "bg-transparent outline-none flex-1 text-gray-700 placeholder:text-gray-500" }))),
                        React.createElement("div", { className: "flex-1" },
                            React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4" }, categoryFilters.map(function (filter) { return (React.createElement("button", { key: filter.id, onClick: function () { return toggleFilter(filter.id); }, className: "px-4 py-3 border text-sm font-medium transition-colors " + (activeFilters.includes(filter.id)
                                    ? "border-black bg-black text-white"
                                    : "border-gray-300 text-gray-700 hover:border-gray-400") }, filter.label)); })))),
                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, products.map(function (product) { return (React.createElement(react_router_1.NavLink, { key: product.id, to: product.link, className: "group block bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300" },
                        React.createElement("div", { className: "aspect-[3/4] bg-gray-100 overflow-hidden" },
                            React.createElement("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" })),
                        React.createElement("div", { className: "p-4 space-y-2" },
                            React.createElement("div", { className: "flex items-center justify-between" },
                                React.createElement("span", { className: "text-sm text-gray-500 font-medium" }, product.category),
                                React.createElement("div", { className: "w-4 h-4 rounded-full border border-gray-300", style: { backgroundColor: product.color }, "aria-label": "Cor dispon\u00EDvel" })),
                            React.createElement("h3", { className: "text-lg font-semibold text-black group-hover:text-gray-700 transition-colors" }, product.name),
                            React.createElement("p", { className: "text-xl font-bold text-black" }, product.price)))); })))))));
}
exports["default"] = Produtos;
