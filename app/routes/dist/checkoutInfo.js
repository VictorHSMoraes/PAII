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
    cep: "CEP"
};
function CheckoutPage() {
    var _a;
    var location = react_router_dom_1.useLocation();
    var produtos = ((_a = location.state) === null || _a === void 0 ? void 0 : _a.cartItems) || [];
    var _b = react_1.useState({
        email: "",
        celular: "",
        nome: "",
        sobrenome: "",
        pais: "",
        estado: "",
        endereco: "",
        cidade: "",
        cep: ""
    }), form = _b[0], setForm = _b[1];
    var _c = react_1.useState({}), errors = _c[0], setErrors = _c[1];
    var _d = react_1.useState("info"), currentTab = _d[0], setCurrentTab = _d[1];
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
        if (!form.email) {
            newErrors.email = "Campo obrigatório";
        }
        else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email inválido";
        }
        if (!form.celular) {
            newErrors.celular = "Campo obrigatório";
        }
        else if (!/^\d{10,11}$/.test(form.celular)) {
            newErrors.celular = "Celular inválido";
        }
        Object.keys(form).forEach(function (key) {
            if (!form[key] && !newErrors[key]) {
                newErrors[key] = "Campo obrigatório";
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    var handleNext = function () {
        if (validateForm()) {
            setCurrentTab("pagamento");
        }
        else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
    var inputClass = function (field) {
        return "p-3 border w-full " + (errors[field] ? "border-red-500" : "border-gray-300");
    };
    var navigate = react_router_dom_1.useNavigate();
    return (React.createElement("div", { className: "min-h-screen p-4 md:p-8 font-sans bg-[url('/assets/grain-texture.png')]" },
        React.createElement("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8" },
            React.createElement("div", { className: "lg:col-span-2 space-y-6" },
                React.createElement("div", { className: "flex flex-col items-start gap-2 " },
                    React.createElement("button", { onClick: function () { return navigate(-1); }, className: "p-2 hover:bg-gray-100 transition-colors" },
                        React.createElement("img", { src: "/assets/vector.svg", alt: "Seta", className: "w-18 h-18 transform rotate-180 transition-transform hover:-translate-x-1", draggable: false }))),
                React.createElement("h1", { className: "text-3xl font-extrabold" }, "CHECKOUT"),
                React.createElement("div", { className: "flex gap-6 font-semibold text-sm" },
                    React.createElement("button", { role: "tab", "aria-pressed": currentTab === "info", className: "pb-1 " + (currentTab === "info"
                            ? "border-b-2 border-black"
                            : "text-gray-400"), onClick: function () { return setCurrentTab("info"); } }, "INFORMA\u00C7\u00D5ES"),
                    React.createElement("button", { role: "tab", "aria-pressed": currentTab === "pagamento", className: "pb-1 " + (currentTab === "pagamento"
                            ? "border-b-2 border-black"
                            : "text-gray-400"), onClick: function () {
                            if (currentTab === "info" && !validateForm()) {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                return;
                            }
                            setCurrentTab("pagamento");
                        } }, "PAGAMENTO")),
                currentTab === "info" && (React.createElement("form", { className: "space-y-8" },
                    React.createElement("div", null,
                        React.createElement("h3", { className: "font-semibold mb-2" }, "INFORMA\u00C7\u00D5ES DE CONTATO"),
                        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
                            React.createElement("div", null,
                                React.createElement("input", { type: "email", name: "email", placeholder: "Email", onChange: handleChange, className: inputClass("email") }),
                                errors.email && (React.createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.email))),
                            React.createElement("div", null,
                                React.createElement("input", { type: "text", name: "celular", placeholder: "Celular", onChange: handleChange, className: inputClass("celular") }),
                                errors.celular && (React.createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.celular))))),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "font-semibold mb-2" }, "ENDERE\u00C7O"),
                        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
                            React.createElement("div", null,
                                React.createElement("input", { name: "nome", placeholder: "Nome", onChange: handleChange, className: inputClass("nome") }),
                                errors.nome && (React.createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.nome))),
                            React.createElement("div", null,
                                React.createElement("input", { name: "sobrenome", placeholder: "Sobrenome", onChange: handleChange, className: inputClass("sobrenome") }),
                                errors.sobrenome && (React.createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.sobrenome)))),
                        React.createElement("div", { className: "mt-4 space-y-4" }, Object.keys(labels)
                            .filter(function (f) {
                            return !["email", "celular", "nome", "sobrenome"].includes(f);
                        })
                            .map(function (field) { return (React.createElement("div", { key: field },
                            React.createElement("input", { name: field, placeholder: labels[field], onChange: handleChange, className: inputClass(field) }),
                            errors[field] && (React.createElement("p", { className: "text-red-500 text-sm mt-1" }, errors[field])))); }))),
                    React.createElement("button", { type: "button", onClick: handleNext, className: "mt-6 px-6 py-3 bg-gray-200 text-black font-bold flex items-center justify-between w-full md:w-64 hover:bg-gray-300" },
                        "PR\u00D3XIMO ",
                        React.createElement("span", { className: "ml-4" }, "\u2192")))),
                currentTab === "pagamento" && (React.createElement("div", { className: "text-gray-500 italic" },
                    "\uD83D\uDCB3 Conte\u00FAdo da aba ",
                    React.createElement("strong", null, "PAGAMENTO"),
                    " vir\u00E1 em breve..."))),
            React.createElement("div", { className: "border border-gray-300 p-6 pt-15" },
                React.createElement("div", { className: "flex justify-between items-center mb-4" },
                    React.createElement("h3", { className: "font-semibold text-lg" }, "Seus pedidos"),
                    React.createElement("span", { className: "text-blue-600 text-sm" },
                        "(",
                        produtos.length,
                        ")")),
                produtos.map(function (produto) { return (React.createElement("div", { className: "flex gap-4 mb-4", key: produto.id },
                    React.createElement("img", { src: produto.imagem, alt: produto.nome, className: "w-20 h-20 object-cover rounded" }),
                    React.createElement("div", { className: "flex flex-col justify-between flex-1 text-sm" },
                        React.createElement("div", { className: "flex justify-between" },
                            React.createElement("div", null,
                                React.createElement("p", { className: "font-medium" }, produto.nome),
                                React.createElement("p", { className: "text-gray-500" }, produto.variacao)),
                            React.createElement("a", { className: "underline text-sm cursor-pointer" }, "Mudar")),
                        React.createElement("div", { className: "flex justify-between" },
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
                        React.createElement("span", { className: "text-green-600" }, "Frete gr\u00E1tis")),
                    React.createElement("div", { className: "flex justify-between font-bold mt-2" },
                        React.createElement("span", null, "Total"),
                        React.createElement("span", null, formatarPreco(subtotal))))))));
}
exports["default"] = CheckoutPage;
