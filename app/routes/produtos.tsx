import { useState } from "react";
import { NavLink } from "react-router";

interface FilterState {
  tamanhos: string[];
  disponibilidade: string;
  categoria: string[];
  cores: string[];
  precoMin: number;
  precoMax: number;
  colecao: string[];
  tags: string[];
  avaliacoes: number;
}

const categoryFilters = [
  { id: "novo", label: "NOVO", active: false },
  { id: "populares", label: "POPULARES", active: false },
  { id: "camisas", label: "CAMISAS", active: false },
  { id: "camisetas", label: "CAMISETAS", active: false },
  { id: "polo", label: "POLO", active: false },
  { id: "jeans", label: "JEANS", active: false },
  { id: "shorts", label: "SHORTS", active: false },
  { id: "jackets", label: "JACKETS", active: false },
  { id: "ternos", label: "TERNOS", active: false },
  { id: "blusas", label: "BLUSAS", active: false },
];

const products = [
  {
    id: 1,
    name: "Básica Slim Fit",
    category: "Algodão",
    price: "199",
    image:
      "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
    color: "#F5F5DC",
  },
  {
    id: 2,
    name: "Básica",
    category: "Algodão",
    price: 199,
    image:
      "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
    color: "#000000",
  },
  {
    id: 3,
    name: "Camisa",
    category: "Algodão",
    price: 199,
    image:
      "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
    color: "#2F4F4F",
  },
  {
    id: 4,
    name: "Básica Slim Fit",
    category: "Algodão",
    price: 199,
    image:
      "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
    color: "#8B4513",
  },
  {
    id: 5,
    name: "Básica",
    category: "Algodão",
    price: 199,
    image:
      "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
    color: "#000000",
  },
  {
    id: 6,
    name: "Camisa",
    category: "Algodão",
    price: 199,
    image:
      "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
    color: "#87CEEB",
  },
  {
    id: 7,
    name: "Básica Slim Fit",
    category: "Algodão",
    price: 199,
    image:
      "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
    color: "#F5F5DC",
  },
  {
    id: 8,
    name: "Básica",
    category: "Algodão",
    price: 199,
    image:
      "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
    color: "#000000",
  },
  {
    id: 9,
    name: "Camisa",
    category: "Algodão",
    price: 199,
    image:
      "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
    color: "#2F4F4F",
  },
];

export default function Produtos() {
  const [filters, setFilters] = useState<FilterState>({
    tamanhos: [],
    disponibilidade: "todos",
    categoria: [],
    cores: [],
    precoMin: 0,
    precoMax: 1000,
    colecao: [],
    tags: [],
    avaliacoes: 0,
  });

  const [expandedSections, setExpandedSections] = useState({
    avaliados: true,
    categoria: false,
    cores: false,
    preco: false,
    colecao: false,
    tags: false,
    avaliacoes: false,
  });

  const tamanhos = ["PP", "P", "M", "L", "G"];

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleTamanhoChange = (tamanho: string) => {
    setFilters((prev) => ({
      ...prev,
      tamanhos: prev.tamanhos.includes(tamanho)
        ? prev.tamanhos.filter((t) => t !== tamanho)
        : [...prev.tamanhos, tamanho],
    }));
  };

  const handleDisponibilidadeChange = (tipo: string) => {
    setFilters((prev) => ({
      ...prev,
      disponibilidade: tipo,
    }));
  };

  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="bg-[url('/assets/grain-texture.png')]">

      <div className="flex min-h-screen">
        {/* Filtro Lateral */}
        <aside className="w-64 md:w-72 lg:w-80 p-15 mt-30 h-screen overflow-y-auto border-gray-200">
          <div className="space-y-5">
            {/* Título */}
            <h2 className="text-2xl font-bold text-black">Filtros</h2>

            {/* Tamanho */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">Tamanho</h3>
              <div className="flex gap-2">
                {tamanhos.map((tamanho) => (
                  <button
                    key={tamanho}
                    onClick={() => handleTamanhoChange(tamanho)}
                    className={`w-12 h-12 border-2 font-medium transition-colors ${
                      filters.tamanhos.includes(tamanho)
                        ? "border-black bg-black text-white"
                        : "border-gray-300 text-black hover:border-gray-400"
                    }`}
                  >
                    {tamanho}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200"></div>

            <div className="space-y-4">
              <button
                onClick={() => toggleSection("avaliados")}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-black">Avaliados</h3>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.avaliados ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedSections.avaliados && (
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={filters.disponibilidade === "disponiveis"}
                      onChange={() =>
                        handleDisponibilidadeChange("disponiveis")
                      }
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">Disponíveis (30)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={filters.disponibilidade === "todos"}
                      onChange={() => handleDisponibilidadeChange("todos")}
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">Todos os itens (50)</span>
                  </label>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200"></div>

            <div className="space-y-4">
              <button
                onClick={() => toggleSection("categoria")}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-black">Categoria</h3>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.categoria ? "rotate-180" : "rotate-90"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="border-t border-gray-200"></div>

            <div className="space-y-4">
              <button
                onClick={() => toggleSection("cores")}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-black">Cores</h3>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.cores ? "rotate-180" : "rotate-90"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="border-t border-gray-200"></div>

            <div className="space-y-4">
              <button
                onClick={() => toggleSection("preco")}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-black">Preço</h3>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.preco ? "rotate-180" : "rotate-90"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="border-t border-gray-200"></div>

            <div className="space-y-4">
              <button
                onClick={() => toggleSection("colecao")}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-black">Coleção</h3>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.colecao ? "rotate-180" : "rotate-90"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="border-t border-gray-200"></div>

            <div className="space-y-4">
              <button
                onClick={() => toggleSection("tags")}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-black">Tags</h3>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.tags ? "rotate-180" : "rotate-90"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="border-t border-gray-200"></div>

            <div className="space-y-4">
              <button
                onClick={() => toggleSection("avaliacoes")}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-black">Avaliações</h3>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.avaliacoes ? "rotate-180" : "rotate-90"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8 flex justify-center">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-gray-600 mb-6">
              <NavLink to="/" className="hover:text-black">
                Início
              </NavLink>
              <span className="mx-2">/</span>
              <span className="text-black">Produtos</span>
            </nav>

            <h1 className="text-4xl font-bold text-black mb-8">PRODUTOS</h1>

            <div className="flex items-center gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="flex items-center bg-gray-200 rounded-sm h-12 w-80 px-4">
                  <img
                    src="/assets/search.svg"
                    alt="Pesquisar"
                    className="h-5 w-5 mr-3 opacity-70"
                  />
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent outline-none flex-1 text-gray-700 placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
                  {categoryFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => toggleFilter(filter.id)}
                      className={`px-4 py-3 border text-sm font-medium transition-colors ${
                        activeFilters.includes(filter.id)
                          ? "border-black bg-black text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-30">
              {products.map((product) => (
                <NavLink
                  key={product.id}
                  to={`/produtos/${product.id}`}
                  className="group block overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[3/4] overflow-hidden">
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
                        aria-label="Cor disponível"
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
        </main>
      </div>
    </div>
  );
}
