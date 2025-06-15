import { NavLink } from "react-router";
import Logo from "../assets/logo.svg";
import CartIcon from "../assets/cart.svg";
import UserIcon from "../assets/user.svg";

export default function Navbar() {
  return (
    <header className="relative w-full px-20 mt-8">
      <div className="container flex items-center justify-between py-5 mx-auto max-w-7xl">
        <nav className="flex flex-wrap items-center gap-x-15">
          <NavLink
            to="/"
            end
            className="font-medium text-black hover:text-gray-600"
          >
            Início
          </NavLink>
          <NavLink
            to="/produtos"
            className="font-medium text-black hover:text-gray-600"
          >
            Coleção
          </NavLink>
          <NavLink
            to="/produtos/novo"
            className="font-medium text-black hover:text-gray-600"
          >
            Novo
          </NavLink>
        </nav>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavLink to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </NavLink>
        </div>

        <div className="flex gap-x-6 ml-auto items-center">
          <button
            className="flex items-center justify-center h-15 w-15 rounded-full bg-white border border-black shadow hover:opacity-80 transition"
            aria-label="Carrinho"
          >
            <img src={CartIcon} alt="Carrinho" className="h-5 w-5" />
          </button>
          <button
            className="flex items-center justify-center h-15 w-15 rounded-full bg-black shadow hover:opacity-80 transition"
            aria-label="Usuário"
          >
            <img src={UserIcon} alt="Usuário" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
