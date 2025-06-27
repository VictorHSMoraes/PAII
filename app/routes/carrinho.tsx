import React, { useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  material: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = 10;
  const total = subtotal + tax;

  const navigate = useNavigate();

  const renderCartItem = (item: CartItem) => (
    <div
      key={item.id}
      className="max-w-[400px] overflow-hidden border-t border-gray-300"
    >
      {/* Container da imagem e ações lado a lado */}
      <div className="aspect-[3/4] overflow-hidden flex ">
        {/* Imagem do produto */}
        <div className="flex-1 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Coluna de ações ao lado da imagem */}
        <div className="w-24 border-gray-200 flex flex-col gap-4 p-3 justify-start items-center">
          {/* Botão de remover */}
          <button
            onClick={() => removeItem(item.id)}
            className="p-2 hover:bg-gray-200 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* Tamanho */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center text-sm font-semibold">
              {item.size || "M"}
            </div>
          </div>

          {/* Cor */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 border-gray-300"
              style={{ backgroundColor: item.color || "#000000" }}
              aria-label="Cor disponível"
            />
          </div>

          {/* Quantidade */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center border border-gray-300 rounded">
              <button
                onClick={() =>
                  updateQuantity(item.id, (item.quantity || 1) + 1)
                }
                className="p-2 hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
              <span className="px-3 py-2 text-sm font-medium min-w-[2rem] text-center">
                {item.quantity || 1}
              </span>
              <button
                onClick={() =>
                  updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))
                }
                className="p-2 hover:bg-gray-50 transition-colors"
              >
                <Minus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Informações do produto */}
      <div className="p-5 space-y-3">
        {/* Categoria */}
        <div className="flex items-center justify-between">
          <span className="text-base text-gray-500 font-medium">
            {item.material}
          </span>
        </div>

        {/* Nome e preço */}
        <div className="flex items-center gap-x-38  ">
          <h3 className="text-sm font-medium text-black">{item.name}</h3>
          <p className="text-sm font-medium text-black">R$ {item.price}</p>
        </div>
      </div>
      <div className="border-t border-gray-300"></div>
    </div>
  );

  return (
    <div className="pb-30 bg-[url('/assets/grain-texture.png')]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <img
              src="/assets/vector.svg"
              alt="Seta"
              className="w-18 h-18 transform rotate-180 transition-transform hover:-translate-x-1 mb-8"
              draggable={false}
            />
          </button>
          <h1 className="text-xl font-medium text-gray-900 uppercase tracking-wide">
            CARRINHO
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cartItems.map(renderCartItem)}
            </div>
          </div>

          {/* Order Summary */}
          <div className="border border-gray-200 p-6 h-fit">
            <h2 className="text-lg font-semibold text-gray-900 mb-8 uppercase tracking-wide">
              Total
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-base">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-medium text-gray-900">${subtotal}</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-gray-700">Taxa</span>
                <span className="font-medium text-gray-900">${tax}</span>
              </div>

              <hr className="my-6 border-gray-200" />

              <div className="flex justify-between text-lg font-bold">
                <span>
                  TOTAL{" "}
                  <span className="text-sm font-normal text-gray-500">
                    (TAXAS INCL.)
                  </span>
                </span>
                <span>${total}</span>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 mb-8">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-500"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-700 leading-relaxed"
              >
                Aceito os termos e condições.
              </label>
            </div>

            {/* Continue Button */}
            <button
              disabled={!acceptedTerms}
              onClick={() => {
                if (acceptedTerms) {
                  navigate("/checkout-info", {
                    state: {
                      cartItems,
                      subtotal,
                      tax,
                      total,
                    },
                  });
                }
              }}
              className={`w-full py-4 px-6 text-sm font-bold uppercase tracking-wider transition-colors ${
                acceptedTerms
                  ? "bg-gray-800 hover:bg-gray-900 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
