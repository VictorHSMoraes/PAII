import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("produtos", "routes/produtos.tsx"),
  route("produtos/:id", "routes/produtos.$id.tsx"),
  route("carrinho", "routes/carrinho.tsx"),
  route("checkout-info", "routes/checkoutInfo.tsx"),
  route("checkout-pagamento", "routes/checkoutPay.tsx"),
] satisfies RouteConfig;
