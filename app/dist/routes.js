"use strict";
exports.__esModule = true;
var routes_1 = require("@react-router/dev/routes");
exports["default"] = [
    routes_1.index("routes/home.tsx"),
    routes_1.route("produtos", "routes/produtos.tsx"),
    routes_1.route("produtos/:id", "routes/produtos/[id].tsx"),
    routes_1.route("carrinho", "routes/carrinho.tsx"),
    routes_1.route("checkout", "routes/checkout.tsx"),
];
satisfies;
routes_1.RouteConfig;
