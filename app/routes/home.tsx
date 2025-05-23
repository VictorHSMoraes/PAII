import type { Route } from "./+types/home";
import Search from "../components/search";
import { NavLink } from "react-router";
import ArrowIcon from "../assets/vector.svg"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ecommerce de Camisetas" },
  ];
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

export default function Home() {
  const repeatedImages = [...images, ...images];

  return (
    <div>
      <Search alignWith="inicio" />
      <section className="w-full px-20 mt-20">
      <div className="container mx-auto max-w-7xl">
          <div className="flex gap-6 items-center mt-8">

            <div className="flex-shrink-0 w-1/3 space-y-6">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  NOVA<br />
                  COLEÇÃO
                </h1>
                <p className="text-lg text-gray-600 mt-2">Verão 2025</p>
              </div>
              <NavLink
                to="/produtos"
                className="inline-flex items-center group hover:opacity-80 transition-opacity"
              >
                <span className="text-lg font-medium text-black mr-4">Ir para loja</span>
                <div className="flex items-center">
                    <img
                      src={ArrowIcon}
                      alt="Seta"
                      className="w-12 h-12 transform transition-transform group-hover:translate-x-1"
                      draggable={false}
                    />
                </div>
              </NavLink>
            </div>

            {/* Container da galeria com duas sequências idênticas */}
            <div className="relative w-2/3 overflow-x-hidden pr-32">
              <div className="flex">
                {/* Primeira sequência */}
                <div className="flex animate-infinite-scroll gap-4">
                  {repeatedImages.map((image, index) => (
                    <NavLink
                      to={image.link}
                      key={`first-${index}`}
                      className="flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden aspect-[3/4] w-[366px]"
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
                
                {/* Segunda sequência idêntica para o loop */}
                <div className="flex animate-infinite-scroll gap-4">
                  {repeatedImages.map((image, index) => (
                    <NavLink
                      to={image.link}
                      key={`second-${index}`}
                      className="flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden aspect-[3/4] w-[366px]"
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
  );
}
