"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
// Dados dos produtos (normalmente viriam de uma API ou contexto)
var productsData = [
    {
        id: 1,
        name: "Básica Slim Fit",
        category: "Algodão",
        price: 199,
        images: [
            "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
            "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
            "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
            "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
            "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
        ],
        colors: [
            { name: "white", hex: "#f8fafc", label: "Branco" },
            { name: "gray", hex: "#6b7280", label: "Cinza" },
            { name: "black", hex: "#1f2937", label: "Preto" },
        ],
        sizes: ["PP", "P", "M", "G", "GG"],
        material: "100% Algodão",
        care: "Lavar à máquina até 30°C"
    },
    {
        id: 2,
        name: "Básica",
        category: "Algodão",
        price: 199,
        images: [
            "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
            "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
        ],
        colors: [
            { name: "black", hex: "#1f2937", label: "Preto" },
            { name: "white", hex: "#f8fafc", label: "Branco" },
        ],
        sizes: ["P", "M", "G", "GG"],
        material: "100% Algodão",
        care: "Lavar à máquina até 30°C"
    },
    {
        id: 3,
        name: "Camisa",
        category: "Algodão",
        price: 199,
        images: [
            "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
        ],
        colors: [
            { name: "darkslategray", hex: "#2F4F4F", label: "Cinza Escuro" },
            { name: "white", hex: "#f8fafc", label: "Branco" },
        ],
        sizes: ["PP", "P", "M", "G"],
        material: "100% Algodão",
        care: "Lavar à máquina até 30°C"
    },
    {
        id: 4,
        name: "Básica Slim Fit",
        category: "Algodão",
        price: 199,
        images: [
            "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
        ],
        colors: [
            { name: "brown", hex: "#8B4513", label: "Marrom" },
            { name: "black", hex: "#1f2937", label: "Preto" },
        ],
        sizes: ["P", "M", "G", "GG"],
        material: "100% Algodão",
        care: "Lavar à máquina até 30°C"
    },
    {
        id: 5,
        name: "Básica",
        category: "Algodão",
        price: 199,
        images: [
            "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
        ],
        colors: [{ name: "black", hex: "#1f2937", label: "Preto" }],
        sizes: ["PP", "P", "M", "G", "GG"],
        material: "100% Algodão",
        care: "Lavar à máquina até 30°C"
    },
    {
        id: 6,
        name: "Camisa",
        category: "Algodão",
        price: 199,
        images: [
            "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
        ],
        colors: [{ name: "skyblue", hex: "#87CEEB", label: "Azul Claro" }],
        sizes: ["P", "M", "G"],
        material: "100% Algodão",
        care: "Lavar à máquina até 30°C"
    },
    {
        id: 7,
        name: "Básica Slim Fit",
        category: "Algodão",
        price: 199,
        images: [
            "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
        ],
        colors: [{ name: "beige", hex: "#F5F5DC", label: "Bege" }],
        sizes: ["PP", "P", "M", "G", "GG"],
        material: "100% Algodão",
        care: "Lavar à máquina até 30°C"
    },
    {
        id: 8,
        name: "Básica",
        category: "Algodão",
        price: 199,
        images: [
            "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
        ],
        colors: [{ name: "black", hex: "#1f2937", label: "Preto" }],
        sizes: ["P", "M", "G", "GG"],
        material: "100% Algodão",
        care: "Lavar à máquina até 30°C"
    },
    {
        id: 9,
        name: "Camisa",
        category: "Algodão",
        price: 199,
        images: [
            "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
        ],
        colors: [{ name: "darkslategray", hex: "#2F4F4F", label: "Cinza Escuro" }],
        sizes: ["PP", "P", "M", "G"],
        material: "100% Algodão",
        care: "Lavar à máquina até 30°C"
    },
];
var ProductPage = function () {
    var _a;
    var id = react_router_1.useParams().id;
    var productId = parseInt(id || "1", 10);
    var product = productsData.find(function (p) { return p.id === productId; });
    var _b = react_1.useState(((_a = product === null || product === void 0 ? void 0 : product.colors[0]) === null || _a === void 0 ? void 0 : _a.name) || "black"), selectedColor = _b[0], setSelectedColor = _b[1];
    var _c = react_1.useState("M"), selectedSize = _c[0], setSelectedSize = _c[1];
    var _d = react_1.useState(0), selectedImage = _d[0], setSelectedImage = _d[1];
    var _e = react_1.useState(1), quantity = _e[0], setQuantity = _e[1];
    if (!product) {
        return (react_1["default"].createElement("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center" },
            react_1["default"].createElement("div", { className: "text-center" },
                react_1["default"].createElement("h1", { className: "text-2xl font-medium text-gray-900 mb-4" }, "Produto n\u00E3o encontrado"),
                react_1["default"].createElement(react_router_1.Link, { to: "/produtos", className: "text-blue-600 hover:text-blue-800 underline" }, "Voltar para produtos"))));
    }
    var renderThumbnail = function (imageUrl, index) {
        var isSelected = selectedImage === index;
        return (react_1["default"].createElement("button", { key: index, onClick: function () { return setSelectedImage(index); }, className: "\n          relative w-24 h-28 bg-white overflow-hidden transition-all duration-300 ease-in-out\n          border-2 hover:shadow-lg transform hover:scale-105\n          " + (isSelected
                ? "border-gray-900"
                : "border-gray-200 hover:border-gray-400") + "\n        " },
            react_1["default"].createElement("img", { src: imageUrl, alt: product.name + " - Imagem " + (index + 1), className: "\n            w-full h-full object-cover transition-all duration-300\n            " + (isSelected ? 'opacity-100' : 'opacity-80 hover:opacity-100') + "\n          " }),
            react_1["default"].createElement("div", { className: "\n          absolute inset-0 bg-black transition-opacity duration-300\n          " + (isSelected ? 'opacity-0' : 'opacity-0 hover:opacity-10') + "\n        " })));
    };
    var handleAddToCart = function () {
        var newItem = {
            id: product.id,
            name: product.name,
            material: product.material,
            price: product.price,
            size: selectedSize,
            color: selectedColor,
            quantity: quantity,
            image: product.images[selectedImage]
        };
        var cart = JSON.parse(localStorage.getItem("cart") || "[]");
        var existingIndex = cart.findIndex(function (item) {
            return item.id === newItem.id &&
                item.size === newItem.size &&
                item.color === newItem.color;
        });
        if (existingIndex >= 0) {
            cart[existingIndex].quantity += newItem.quantity;
        }
        else {
            cart.push(newItem);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Produto adicionado ao carrinho!");
    };
    return (react_1["default"].createElement("div", { className: "px-4 py-8 pb-30 bg-[url('/assets/grain-texture.png')]" },
        react_1["default"].createElement("div", { className: "max-w-7xl mx-auto mb-6" },
            react_1["default"].createElement("nav", { className: "flex text-sm text-gray-500" },
                react_1["default"].createElement(react_router_1.Link, { to: "/", className: "hover:text-gray-700 transition-colors" }, "Home"),
                react_1["default"].createElement("span", { className: "mx-2" }, "/"),
                react_1["default"].createElement(react_router_1.Link, { to: "/produtos", className: "hover:text-gray-700 transition-colors" }, "Produtos"),
                react_1["default"].createElement("span", { className: "mx-2" }, "/"),
                react_1["default"].createElement("span", { className: "text-gray-900" }, product.name))),
        react_1["default"].createElement("div", { className: "max-w-7xl mx-auto w-full" },
            react_1["default"].createElement("div", { className: "flex flex-col lg:flex-row justify-between items-start gap-10" },
                react_1["default"].createElement("div", { className: "flex gap-14 max-w-[700px] w-full" },
                    react_1["default"].createElement("div", { className: "flex-1" },
                        react_1["default"].createElement("div", { className: "bg-white overflow-hidden aspect-[3/4] rounded-lg shadow-lg relative group" },
                            react_1["default"].createElement("img", { src: product.images[selectedImage], alt: product.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }),
                            react_1["default"].createElement("div", { className: "absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm" },
                                selectedImage + 1,
                                " / ",
                                product.images.length))),
                    react_1["default"].createElement("div", { className: "flex flex-col gap-3" }, product.images.map(function (imageUrl, index) {
                        return renderThumbnail(imageUrl, index);
                    }))),
                react_1["default"].createElement("div", { className: "space-y-25 w-[400px] border border-gray-300 p-6" },
                    react_1["default"].createElement("div", { className: "flex justify-between items-start" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("h1", { className: "text-3xl font-medium text-gray-900 mb-2" }, product.name),
                            react_1["default"].createElement("p", { className: "text-2xl font-medium text-gray-900 mb-1" },
                                "R$ ",
                                product.price),
                            react_1["default"].createElement("p", { className: "text-sm text-gray-600" }, product.category))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h3", { className: "text-sm font-medium text-gray-900 mb-3" }, "Cores"),
                        react_1["default"].createElement("div", { className: "flex gap-2" }, product.colors.map(function (color) { return (react_1["default"].createElement("button", { key: color.name, onClick: function () { return setSelectedColor(color.name); }, className: "w-12 h-12 rounded border-2 transition-all " + (selectedColor === color.name
                                ? "border-gray-400 scale-110"
                                : "border-gray-200 hover:border-gray-300"), style: { backgroundColor: color.hex }, "aria-label": color.label, title: color.label })); }))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("h3", { className: "text-sm font-medium text-gray-900 mb-3" }, "Tamanho"),
                            react_1["default"].createElement("div", { className: "grid grid-cols-5 gap-0 mb-3" }, product.sizes.map(function (size) { return (react_1["default"].createElement("button", { key: size, onClick: function () { return setSelectedSize(size); }, className: "w-[60px] h-[70px] border text-sm font-medium transition-all " + (selectedSize === size
                                    ? "border-gray-400 bg-gray-50 text-gray-900"
                                    : "border-gray-200 text-gray-700 hover:border-gray-300") }, size)); })),
                            react_1["default"].createElement("p", { className: "text-xs text-gray-500 uppercase tracking-wide mb-6" }, "Escolha seu tamanho")),
                        react_1["default"].createElement("div", { className: "mb-10" },
                            react_1["default"].createElement("h3", { className: "text-sm font-medium text-gray-900 mb-3" }, "Quantidade"),
                            react_1["default"].createElement("div", { className: "flex items-center gap-3 mb-3" },
                                react_1["default"].createElement("button", { onClick: function () { return setQuantity(Math.max(1, quantity - 1)); }, className: "w-10 h-10 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50" }, "-"),
                                react_1["default"].createElement("span", { className: "font-medium text-lg w-8 text-center" }, quantity),
                                react_1["default"].createElement("button", { onClick: function () { return setQuantity(quantity + 1); }, className: "w-10 h-10 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50" }, "+"))),
                        react_1["default"].createElement("button", { onClick: handleAddToCart, className: "w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-5 px-6 transition-colors uppercase tracking-wide text-s" }, "Adicionar ao Carrinho")))))));
};
exports["default"] = ProductPage;
