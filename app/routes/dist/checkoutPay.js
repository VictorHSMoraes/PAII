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
var react_router_dom_1 = require("react-router-dom");
var labels = {
    email: "Email",
    celular: "Celular",
    nome: "Nome",
    sobrenome: "Sobrenome",
    pais: "País",
    estado: "Estado",
    endereco: "Endereço",
    cidade: "Cidade",
    cep: "CEP",
    cartaoNome: "Nome impresso no cartão",
    cartaoNumero: "Número do cartão",
    validadeMes: "Mês",
    validadeAno: "Ano",
    cvv: "CVV",
    parcelas: "Parcelas"
};
function CheckoutPage(_a) {
    var _b = _a.produtos, produtos = _b === void 0 ? [] : _b;
    var _c = react_1.useState({
        email: "",
        celular: "",
        nome: "",
        sobrenome: "",
        pais: "",
        estado: "",
        endereco: "",
        cidade: "",
        cep: "",
        cartaoNome: "",
        cartaoNumero: "",
        validadeMes: "",
        validadeAno: "",
        cvv: "",
        parcelas: ""
    }), form = _c[0], setForm = _c[1];
    var _d = react_1.useState({}), errors = _d[0], setErrors = _d[1];
    var _e = react_1.useState("pagamento"), currentTab = _e[0], setCurrentTab = _e[1];
    var _f = react_1.useState(false), compraFinalizada = _f[0], setCompraFinalizada = _f[1];
    var subtotal = produtos.reduce(function (acc, item) { return acc + item.preco * item.quantidade; }, 0);
    var formatarPreco = function (valor) {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valor);
    };
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setForm(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
        if (errors[name]) {
            setErrors(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[name] = undefined, _a)));
            });
        }
    };
    var validateForm = function () {
        var newErrors = {};
        if (currentTab === "pagamento") {
            [
                "cartaoNome",
                "cartaoNumero",
                "validadeMes",
                "validadeAno",
                "cvv",
                "parcelas",
            ].forEach(function (key) {
                if (!form[key]) {
                    newErrors[key] = "Campo obrigatório";
                }
            });
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    var finalizarCompra = function () {
        if (validateForm()) {
            setCompraFinalizada(true);
        }
        else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
    var inputClass = function (field) {
        return "border px-4 py-3 w-full text-sm " + (errors[field] ? "border-red-500" : "border-gray-300");
    };
    var navigate = react_router_dom_1.useNavigate();
    return (React.createElement("div", { className: "relative min-h-screen px-4 md:px-20 py-12 bg-[url('/assets/grain-texture.png')]" },
        compraFinalizada && (React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" },
            React.createElement("div", { className: "p-8 text-center relative w-[90%] max-w-md" },
                React.createElement("button", { className: "absolute top-2 right-2 text-black text-xl", onClick: function () { return setCompraFinalizada(false); } }, "\u00D7"),
                React.createElement("div", { className: "text-green-500 text-5xl mb-4" }, "\u2714"),
                React.createElement("h2", { className: "text-xl font-bold mb-4" }, "Seu pedido foi realizado!"),
                React.createElement("button", { className: "bg-gray-200 hover:bg-gray-300 px-6 py-2 font-semibold text-sm", onClick: function () { return (window.location.href = "/"); } }, "VOLTAR PARA A P\u00C1GINA INICIAL")))),
        React.createElement("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8" },
            React.createElement("div", { className: "lg:col-span-2 space-y-8" },
                React.createElement("div", { className: "flex flex-col items-start gap-2 " },
                    React.createElement("button", { onClick: function () { return navigate(-1); }, className: "p-2 hover:bg-gray-100 transition-colors" },
                        React.createElement("img", { src: "/assets/vector.svg", alt: "Seta", className: "w-18 h-18 transform rotate-180 transition-transform hover:-translate-x-1", draggable: false }))),
                React.createElement("h1", { className: "text-4xl font-black" }, "CHECKOUT"),
                React.createElement("div", { className: "flex gap-6 font-medium text-base" },
                    React.createElement("span", { className: "text-gray-400" }, "INFORMA\u00C7\u00D5ES"),
                    React.createElement("span", { className: "text-black" }, "PAGAMENTO")),
                React.createElement("form", { className: "space-y-6" },
                    React.createElement("h3", { className: "font-semibold text-sm uppercase" }, "Informa\u00E7\u00F5es de Pagamento"),
                    React.createElement("input", { name: "cartaoNome", placeholder: "Nome impresso no cart\u00E3o", value: form.cartaoNome, onChange: handleChange, className: inputClass("cartaoNome") }),
                    React.createElement("input", { name: "cartaoNumero", placeholder: "N\u00FAmero do cart\u00E3o", value: form.cartaoNumero, onChange: handleChange, className: inputClass("cartaoNumero") }),
                    React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                        React.createElement("select", { name: "validadeMes", value: form.validadeMes, onChange: handleChange, className: inputClass("validadeMes") },
                            React.createElement("option", { value: "" }, "M\u00EAs"),
                            __spreadArrays(Array(12)).map(function (_, i) {
                                var mes = String(i + 1).padStart(2, "0");
                                return (React.createElement("option", { key: mes, value: mes }, mes));
                            })),
                        React.createElement("select", { name: "validadeAno", value: form.validadeAno, onChange: handleChange, className: inputClass("validadeAno") },
                            React.createElement("option", { value: "" }, "Ano"),
                            __spreadArrays(Array(10)).map(function (_, i) {
                                var ano = new Date().getFullYear() + i;
                                return (React.createElement("option", { key: ano, value: ano }, ano));
                            }))),
                    React.createElement("input", { name: "cvv", placeholder: "CVV", value: form.cvv, onChange: handleChange, className: inputClass("cvv") }),
                    React.createElement("select", { name: "parcelas", value: form.parcelas, onChange: handleChange, className: inputClass("parcelas") },
                        React.createElement("option", { value: "" }, "Parcelas"),
                        [1, 2, 3, 6, 12].map(function (n) { return (React.createElement("option", { key: n, value: String(n) },
                            n,
                            "x de ",
                            formatarPreco(subtotal / n))); })),
                    React.createElement("button", { type: "button", onClick: finalizarCompra, className: "mt-4 px-6 py-3 bg-gray-200 text-black font-bold hover:bg-gray-300 text-sm" }, "FINALIZAR COMPRA"))),
            React.createElement("div", { className: "border border-gray-300 p-6 pt-15" },
                React.createElement("div", { className: "flex justify-between items-center mb-4" },
                    React.createElement("h3", { className: "font-semibold text-lg" }, "Seus pedidos"),
                    React.createElement("span", { className: "text-blue-600 text-xs" },
                        "(",
                        produtos.length,
                        ")")),
                produtos.map(function (produto) { return (React.createElement("div", { className: "flex gap-4 mb-4", key: produto.id + "-" + produto.variacao },
                    React.createElement("img", { src: produto.imagem, alt: produto.nome, className: "w-20 h-20 object-cover rounded" }),
                    React.createElement("div", { className: "flex flex-col justify-between flex-1 text-sm" },
                        React.createElement("div", { className: "flex justify-between" },
                            React.createElement("div", null,
                                React.createElement("p", { className: "font-medium text-sm leading-4" }, produto.nome),
                                React.createElement("p", { className: "text-gray-500 text-xs" }, produto.variacao)),
                            React.createElement("a", { className: "underline text-xs cursor-pointer" }, "Mudar")),
                        React.createElement("div", { className: "flex justify-between text-sm" },
                            React.createElement("span", { className: "text-blue-500" },
                                "(",
                                produto.quantidade,
                                ")"),
                            React.createElement("span", { className: "font-medium" }, formatarPreco(produto.preco)))))); }),
                React.createElement("div", { className: "border-t pt-4 mt-4 text-sm" },
                    React.createElement("div", { className: "flex justify-between" },
                        React.createElement("span", null, "Subtotal"),
                        React.createElement("span", null, formatarPreco(subtotal))),
                    React.createElement("div", { className: "flex justify-between" },
                        React.createElement("span", null, "Entrega"),
                        React.createElement("span", { className: "text-green-600 text-xs" }, "Frete gr\u00E1tis")),
                    React.createElement("div", { className: "flex justify-between font-bold mt-2" },
                        React.createElement("span", null, "Total"),
                        React.createElement("span", null, formatarPreco(subtotal))))))));
}
exports["default"] = CheckoutPage;
