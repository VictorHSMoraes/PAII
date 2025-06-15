import type { Route } from "./+types/home";
import Search from "../components/search";
import { NavLink } from "react-router";
import ArrowIcon from "../assets/vector.svg";

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
    price: "R$ 99",
    image:
      "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
    color: "#808080", // Cinza
    link: "/produtos/1",
  },
  {
    id: 2,
    name: "Camiseta Básica Algodão",
    category: "Cotton T-Shirt",
    price: "R$ 99",
    image:
      "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
    color: "#E5E5E5", // Cinza claro
    link: "/produtos/2",
  },
  {
    id: 3,
    name: "Camiseta Militar",
    category: "T-Shirt",
    price: "R$ 99",
    image:
      "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
    color: "#808080", // Cinza
    link: "/produtos/3",
  },
  {
    id: 4,
    name: "Camiseta Zipper",
    category: "T-Shirt",
    price: "R$ 89",
    image:
      "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
    color: "#D4D4AA", // Bege claro
    link: "/produtos/4",
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

      <section className="w-full px-20 mt-20">
        <div className="container mx-auto max-w-7xl">
          {/* Header da seção */}
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

          {/* Grid de produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <NavLink
                key={product.id}
                to={product.link}
                className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Container da imagem */}
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Informações do produto */}
                <div className="p-4 space-y-2">
                  {/* Categoria e indicador de cor */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">
                      {product.category}
                    </span>
                    <div
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: product.color }}
                      aria-label={`Cor disponível`}
                    />
                  </div>

                  {/* Nome do produto */}
                  <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors">
                    {product.name}
                  </h3>

                  {/* Preço */}
                  <p className="text-xl font-bold text-black">
                    {product.price}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-20 mt-20">
        <div className="container mx-auto max-w-7xl">
          {/* Header da seção */}
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

          {/* Grid de produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <NavLink
                key={product.id}
                to={product.link}
                className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Container da imagem */}
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Informações do produto */}
                <div className="p-4 space-y-2">
                  {/* Categoria e indicador de cor */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">
                      {product.category}
                    </span>
                    <div
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: product.color }}
                      aria-label={`Cor disponível`}
                    />
                  </div>

                  {/* Nome do produto */}
                  <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors">
                    {product.name}
                  </h3>

                  {/* Preço */}
                  <p className="text-xl font-bold text-black">
                    {product.price}
                  </p>
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
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight tracking-wider">
              NOSSA ABORDAGEM AO DESIGN DE MODA
            </h2>
          </div>

          {/* Container das imagens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Primeira imagem - Look urbano */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                alt="Look urbano masculino com casaco escuro"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Segunda imagem - Look minimalista */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=750&fit=crop&crop=face"
                alt="Look minimalista masculino com conjunto branco"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texto descritivo */}
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
