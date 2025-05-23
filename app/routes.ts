import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("produtos", "routes/produtos.tsx"),
    route("produtos/:id", "routes/detalhesProduto.tsx"),
    route("carrinho", "routes/carrinho.tsx"),
    route("checkout", "routes/checkout.tsx"),
] satisfies RouteConfig;
