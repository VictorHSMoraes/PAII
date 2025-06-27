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
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var react_router_dom_1 = require("react-router-dom");
var CartPage = function () {
    var _a = react_1["default"].useState(function () {
        var storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    }), cartItems = _a[0], setCartItems = _a[1];
    react_1["default"].useEffect(function () {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);
    var _b = react_1.useState(false), acceptedTerms = _b[0], setAcceptedTerms = _b[1];
    var updateQuantity = function (id, newQuantity) {
        if (newQuantity < 1)
            return;
        setCartItems(function (items) {
            return items.map(function (item) {
                return item.id === id ? __assign(__assign({}, item), { quantity: newQuantity }) : item;
            });
        });
    };
    var removeItem = function (id) {
        setCartItems(function (items) { return items.filter(function (item) { return item.id !== id; }); });
    };
    var subtotal = cartItems.reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0);
    var tax = 10;
    var total = subtotal + tax;
    var navigate = react_router_dom_1.useNavigate();
    var renderCartItem = function (item) { return (react_1["default"].createElement("div", { key: item.id, className: "max-w-[400px] overflow-hidden border-t border-gray-300" },
        react_1["default"].createElement("div", { className: "aspect-[3/4] overflow-hidden flex " },
            react_1["default"].createElement("div", { className: "flex-1 overflow-hidden" },
                react_1["default"].createElement("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover" })),
            react_1["default"].createElement("div", { className: "w-24 border-gray-200 flex flex-col gap-4 p-3 justify-start items-center" },
                react_1["default"].createElement("button", { onClick: function () { return removeItem(item.id); }, className: "p-2 hover:bg-gray-200 transition-colors" },
                    react_1["default"].createElement(lucide_react_1.X, { className: "w-6 h-6 text-gray-600" })),
                react_1["default"].createElement("div", { className: "flex flex-col items-center" },
                    react_1["default"].createElement("div", { className: "w-10 h-10 flex items-center justify-center text-sm font-semibold" }, item.size || "M")),
                react_1["default"].createElement("div", { className: "flex flex-col items-center" },
                    react_1["default"].createElement("div", { className: "w-10 h-10 border-gray-300", style: { backgroundColor: item.color || "#000000" }, "aria-label": "Cor dispon\u00EDvel" })),
                react_1["default"].createElement("div", { className: "flex flex-col items-center" },
                    react_1["default"].createElement("div", { className: "flex flex-col items-center border border-gray-300 rounded" },
                        react_1["default"].createElement("button", { onClick: function () {
                                return updateQuantity(item.id, (item.quantity || 1) + 1);
                            }, className: "p-2 hover:bg-gray-50 transition-colors" },
                            react_1["default"].createElement(lucide_react_1.Plus, { className: "w-5 h-5" })),
                        react_1["default"].createElement("span", { className: "px-3 py-2 text-sm font-medium min-w-[2rem] text-center" }, item.quantity || 1),
                        react_1["default"].createElement("button", { onClick: function () {
                                return updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1));
                            }, className: "p-2 hover:bg-gray-50 transition-colors" },
                            react_1["default"].createElement(lucide_react_1.Minus, { className: "w-5 h-5" })))))),
        react_1["default"].createElement("div", { className: "p-5 space-y-3" },
            react_1["default"].createElement("div", { className: "flex items-center justify-between" },
                react_1["default"].createElement("span", { className: "text-base text-gray-500 font-medium" }, item.material)),
            react_1["default"].createElement("div", { className: "flex items-center gap-x-38  " },
                react_1["default"].createElement("h3", { className: "text-sm font-medium text-black" }, item.name),
                react_1["default"].createElement("p", { className: "text-sm font-medium text-black" },
                    "R$ ",
                    item.price))),
        react_1["default"].createElement("div", { className: "border-t border-gray-300" }))); };
    return (react_1["default"].createElement("div", { className: "pb-30 bg-[url('/assets/grain-texture.png')]" },
        react_1["default"].createElement("div", { className: "max-w-7xl mx-auto px-4 py-6" },
            react_1["default"].createElement("div", { className: "flex flex-col items-start gap-2 mb-12" },
                react_1["default"].createElement("button", { onClick: function () { return navigate(-1); }, className: "p-2 hover:bg-gray-100 transition-colors" },
                    react_1["default"].createElement("img", { src: "/assets/vector.svg", alt: "Seta", className: "w-18 h-18 transform rotate-180 transition-transform hover:-translate-x-1 mb-8", draggable: false })),
                react_1["default"].createElement("h1", { className: "text-xl font-medium text-gray-900 uppercase tracking-wide" }, "CARRINHO")),
            react_1["default"].createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4" },
                react_1["default"].createElement("div", { className: "lg:col-span-2" },
                    react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, cartItems.map(renderCartItem))),
                react_1["default"].createElement("div", { className: "border border-gray-200 p-6 h-fit" },
                    react_1["default"].createElement("h2", { className: "text-lg font-semibold text-gray-900 mb-8 uppercase tracking-wide" }, "Total"),
                    react_1["default"].createElement("div", { className: "space-y-4 mb-8" },
                        react_1["default"].createElement("div", { className: "flex justify-between text-base" },
                            react_1["default"].createElement("span", { className: "text-gray-700" }, "Subtotal"),
                            react_1["default"].createElement("span", { className: "font-medium text-gray-900" },
                                "$",
                                subtotal)),
                        react_1["default"].createElement("div", { className: "flex justify-between text-base" },
                            react_1["default"].createElement("span", { className: "text-gray-700" }, "Taxa"),
                            react_1["default"].createElement("span", { className: "font-medium text-gray-900" },
                                "$",
                                tax)),
                        react_1["default"].createElement("hr", { className: "my-6 border-gray-200" }),
                        react_1["default"].createElement("div", { className: "flex justify-between text-lg font-bold" },
                            react_1["default"].createElement("span", null,
                                "TOTAL",
                                " ",
                                react_1["default"].createElement("span", { className: "text-sm font-normal text-gray-500" }, "(TAXAS INCL.)")),
                            react_1["default"].createElement("span", null,
                                "$",
                                total))),
                    react_1["default"].createElement("div", { className: "flex items-start gap-3 mb-8" },
                        react_1["default"].createElement("input", { type: "checkbox", id: "terms", checked: acceptedTerms, onChange: function (e) { return setAcceptedTerms(e.target.checked); }, className: "mt-1 w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-500" }),
                        react_1["default"].createElement("label", { htmlFor: "terms", className: "text-sm text-gray-700 leading-relaxed" }, "Aceito os termos e condi\u00E7\u00F5es.")),
                    react_1["default"].createElement("button", { disabled: !acceptedTerms, onClick: function () {
                            if (acceptedTerms) {
                                navigate("/checkout-info", {
                                    state: {
                                        cartItems: cartItems,
                                        subtotal: subtotal,
                                        tax: tax,
                                        total: total
                                    }
                                });
                            }
                        }, className: "w-full py-4 px-6 text-sm font-bold uppercase tracking-wider transition-colors " + (acceptedTerms
                            ? "bg-gray-800 hover:bg-gray-900 text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed") }, "CONTINUE"))))));
};
exports["default"] = CartPage;
