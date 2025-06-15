import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

// Simulação dos dados dos produtos (ideal: importar de um arquivo ou contexto)
const products = [
  {
    id: "1",
    name: "Camisa Abstrata Animals",
    price: "R$99",
    description: "Camisa de algodão",
    images: [
      "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg",
      "https://static.zara.net/assets/public/da46/1eb1/c81a4f2fb010/fe6e9ea44f14/03665417251-000-a1/03665417251-000-a1.jpg?ts=1746777657706&w=1500",
      "https://static.zara.net/assets/public/da70/5cae/120e499e9931/fbcdd193e431/06462307800-a1/06462307800-a1.jpg?ts=1732117538502&w=1500",
      "https://static.zara.net/assets/public/3fd9/de20/7f134ddf8484/575002ad8c33/06224436800-a1/06224436800-a1.jpg"
    ],
    colors: ["#D3D3D3", "#B0B0B0", "#444444", "#111111"],
    sizes: ["PP", "P", "M", "G", "GG"],
  },
  // Adicione outros produtos conforme necessário
];

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = products.find((p) => p.id === id);
  const [mainImage, setMainImage] = useState(produto?.images[0] || "");
  const [selectedColor, setSelectedColor] = useState(produto?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState("");

  if (!produto) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <button
          className="px-4 py-2 bg-black text-white rounded"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] py-12">
      <div className="flex bg-white rounded-lg shadow-md max-w-5xl w-full p-8 gap-12">
        {/* Galeria de imagens */}
        <div className="flex gap-6">
          {/* Thumbnails verticais */}
          <div className="flex flex-col gap-4">
            {produto.images.map((img, idx) => (
              <button
                key={idx}
                className={`border rounded-md overflow-hidden w-16 h-20 focus:outline-none ${mainImage === img ? 'border-black' : 'border-gray-200'}`}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt={`Thumb ${idx+1}`} className="object-cover w-full h-full opacity-90 hover:opacity-100" />
              </button>
            ))}
          </div>
          {/* Imagem principal */}
          <div className="w-[340px] h-[420px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={mainImage} alt={produto.name} className="object-contain w-full h-full" />
          </div>
        </div>

        {/* Detalhes do produto */}
        <div className="flex-1 flex flex-col gap-6 min-w-[320px]">
          <div>
            <h2 className="text-xl font-semibold mb-1">{produto.name}</h2>
            <div className="text-lg font-bold mb-1">{produto.price}</div>
            <div className="text-gray-700 mb-4">{produto.description}</div>
          </div>

          {/* Cores */}
          <div>
            <div className="font-medium mb-2">Cores</div>
            <div className="flex gap-2 mb-4">
              {produto.colors.map((color, idx) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Cor ${idx+1}`}
                />
              ))}
            </div>
          </div>

          {/* Tamanhos */}
          <div>
            <div className="font-medium mb-2">Tamanho</div>
            <div className="flex gap-2 mb-2">
              {produto.sizes.map((size) => (
                <button
                  key={size}
                  className={`w-12 h-10 border text-base font-medium rounded transition-colors ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 text-black hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="text-xs text-gray-500">ESCOLHA SEU TAMANHO</div>
          </div>

          {/* Botão adicionar */}
          <button
            className="mt-6 w-full py-4 bg-gray-200 text-black font-semibold text-lg rounded disabled:opacity-60 transition"
            disabled={!selectedSize}
          >
            ADICIONAR
          </button>
        </div>
      </div>
    </div>
  );
} 