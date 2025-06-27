"use strict";
// import SearchIcon from "../assets/search.svg";
exports.__esModule = true;
var navItems = [
    { key: "inicio", label: "Início" },
    { key: "colecao", label: "Coleção" },
    { key: "novo", label: "Novo" },
];
function SearchBar(_a) {
    var _b = _a.alignWith, alignWith = _b === void 0 ? "inicio" : _b;
    var index = navItems.findIndex(function (item) { return item.key === alignWith; });
    return (React.createElement("div", { className: "container mx-auto max-w-7xl" },
        React.createElement("div", { className: "flex items-center gap-x-27 pt-30" },
            Array.from({ length: index }).map(function (_, i) { return (React.createElement("div", { key: i, style: { width: "max-content" } })); }),
            React.createElement("form", { className: "flex" },
                React.createElement("div", { className: "flex items-center bg-[#D9D9D9] rounded-sm h-15 w-[300px] md:w-[400px] px-4" },
                    React.createElement("img", { src: "/assets/search.svg", alt: "Pesquisar", className: "h-5 w-5 mr-3 opacity-70" }),
                    React.createElement("input", { type: "text", placeholder: "Pesquisar", className: "bg-transparent outline-none flex-1 text-gray-700 placeholder:text-gray-500" }))))));
}
exports["default"] = SearchBar;
