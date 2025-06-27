import type { Route } from "./+types/home";
import Search from "../components/search";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ecommerce de Camisetas" }];
}

const images = [
  {
    src: "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
    alt: "Camiseta preta",
    link: "/produtos/1",
  },
  {
    src: "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
    alt: "Camiseta branca",
    link: "/produtos/2",
  },
  {
    src: "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
    alt: "Camiseta preta",
    link: "/produtos/3",
  },
];

const popularProducts = [
  {
    id: 1,
    name: "Camiseta Minimalista",
    category: "T-Shirt",
    price: 99,
    image:
      "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
    color: "#808080", // Cinza
    link: "/produtos/1",
  },
  {
    id: 2,
    name: "Camiseta Básica Algodão",
    category: "Cotton T-Shirt",
    price: 99,
    image:
      "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
    color: "#E5E5E5", // Cinza claro
    link: "/produtos/2",
  },
  {
    id: 3,
    name: "Camiseta Militar",
    category: "T-Shirt",
    price: 99,
    image:
      "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
    color: "#808080", // Cinza
    link: "/produtos/3",
  },
  {
    id: 4,
    name: "Camiseta Zipper",
    category: "T-Shirt",
    price: 89,
    image:
      "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
    color: "#D4D4AA", // Bege claro
    link: "/produtos/4",
  },
];

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function Home() {
  const repeatedImages = [...images, ...images];

  return (
    <div>
      <div className="bg-[url('/assets/grain-texture.png')]">
        <Search alignWith="inicio" />
        <section className="w-full px-20 mt-20 pb-28">
          <div className="container mx-auto max-w-7xl">
            <div className="flex gap-6 items-center mt-8">
              <div className="flex-shrink-0 w-1/3 space-y-6">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                    NOVA
                    <br />
                    COLEÇÃO
                  </h1>
                  <p className="text-lg text-gray-600 mt-2">Verão 2025</p>
                </div>
                <NavLink
                  to="/produtos"
                  className="inline-flex items-center group hover:opacity-80 transition-opacity"
                >
                  <span className="text-lg font-medium text-black mr-4">
                    Ir para loja
                  </span>
                  <div className="flex items-center">
                    <img
                      src="/assets/vector.svg"
                      alt="Seta"
                      className="w-12 h-12 transform transition-transform group-hover:translate-x-1"
                      draggable={false}
                    />
                  </div>
                </NavLink>
              </div>

              <div className="relative w-2/3 overflow-x-hidden pr-32">
                <div className="flex">
                  <div className="flex animate-infinite-scroll gap-4">
                    {repeatedImages.map((image, index) => (
                      <NavLink
                        to={image.link}
                        key={`first-${index}`}
                        className="flex-shrink-0 bg-gray-100 overflow-hidden aspect-[3/4] w-[366px]"
                        aria-label={image.alt}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </NavLink>
                    ))}
                  </div>

                  <div className="flex animate-infinite-scroll gap-4">
                    {repeatedImages.map((image, index) => (
                      <NavLink
                        to={image.link}
                        key={`second-${index}`}
                        className="flex-shrink-0 bg-gray-100 overflow-hidden aspect-[3/4] w-[366px]"
                        aria-label={image.alt}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full px-20 mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                POPULARES
                <br />
                ESSA SEMANA
              </h2>
            </div>
            <NavLink
              to="/produtos"
              className="text-lg text-gray-600 hover:text-black transition-colors underline"
            >
              Ver tudo
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <NavLink
                key={product.id}
                to={product.link}
                className="group block overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-x-2">
                    <span className="text-sm text-gray-500 font-medium">
                      {product.category}
                    </span>
                    <div
                      className="w-4 h-4 border border-gray-300"
                      style={{ backgroundColor: product.color }}
                      aria-label={`Cor disponível`}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-black group-hover:text-gray-700 transition-colors">
                      {product.name}
                    </h3>
                    <p>R$ {product.price}</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-20 mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                TODOS OS
                <br />
                PRODUTOS
              </h2>
            </div>
            <NavLink
              to="/produtos"
              className="text-lg text-gray-600 hover:text-black transition-colors underline"
            >
              Ver tudo
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <NavLink
                key={product.id}
                to={product.link}
                className="group block overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-x-2">
                    <span className="text-sm text-gray-500 font-medium">
                      {product.category}
                    </span>
                    <div
                      className="w-4 h-4 border border-gray-300"
                      style={{ backgroundColor: product.color }}
                      aria-label={`Cor disponível`}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-black group-hover:text-gray-700 transition-colors">
                      {product.name}
                    </h3>
                    <p>R$ {product.price}</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <NavLink
              to="/produtos"
              className="text-lg font-medium text-gray-600 hover:text-black transition-colors underline"
            >
              Mais
            </NavLink>
          </div>
        </div>
      </section>

      <section className="w-full px-20 mt-32 mb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight tracking-wider">
              NOSSA ABORDAGEM AO DESIGN DE MODA
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]">
              <img
                src="https://www.yourchurch.com/content/uploads/2023/08/Book-Brief_-_Finding-the-Right-Hills-to-Die-On_.jpg"
                alt="Look urbano masculino com casaco escuro"
                className="w-full h-full object-cover opacity-70"
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]">
              <img
                src="https://themes.muffingroup.com/be/clothingstore2/wp-content/uploads/2022/09/clothingstore2-man-pic12-800x888.webp"
                alt="Look minimalista masculino com conjunto branco"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700">
              Na <span className="font-semibold italic">Elegante</span>, unimos
              criatividade e habilidade artesanal para criar moda que transcende
              as tendências e resiste ao teste do tempo. Cada peça é
              meticulosamente elaborada, garantindo a mais alta qualidade e um
              acabamento requintado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
