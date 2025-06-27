import { useState } from "react";
import type { JSX } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  variacao: string;
  imagem: string;
}

interface Formulario {
  email: string;
  celular: string;
  nome: string;
  sobrenome: string;
  pais: string;
  estado: string;
  endereco: string;
  cidade: string;
  cep: string;
  cartaoNome: string;
  cartaoNumero: string;
  validadeMes: string;
  validadeAno: string;
  cvv: string;
  parcelas: string;
}

type CampoFormulario = keyof Formulario;

interface CheckoutPageProps {
  produtos?: Produto[];
}

const labels: Partial<Record<CampoFormulario, string>> = {
  email: "Email",
  celular: "Celular",
  nome: "Nome",
  sobrenome: "Sobrenome",
  pais: "País",
  estado: "Estado",
  endereco: "Endereço",
  cidade: "Cidade",
  cep: "CEP",
  cartaoNome: "Nome impresso no cartão",
  cartaoNumero: "Número do cartão",
  validadeMes: "Mês",
  validadeAno: "Ano",
  cvv: "CVV",
  parcelas: "Parcelas",
};

export default function CheckoutPage({
  produtos = [],
}: CheckoutPageProps): JSX.Element {
  const [form, setForm] = useState<Formulario>({
    email: "",
    celular: "",
    nome: "",
    sobrenome: "",
    pais: "",
    estado: "",
    endereco: "",
    cidade: "",
    cep: "",
    cartaoNome: "",
    cartaoNumero: "",
    validadeMes: "",
    validadeAno: "",
    cvv: "",
    parcelas: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<CampoFormulario, string>>
  >({});
  const [currentTab, setCurrentTab] = useState<"info" | "pagamento">(
    "pagamento"
  );
  const [compraFinalizada, setCompraFinalizada] = useState<boolean>(false);

  const subtotal: number = produtos.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const formatarPreco = (valor: number): string =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as CampoFormulario]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<CampoFormulario, string>> = {};

    if (currentTab === "pagamento") {
      [
        "cartaoNome",
        "cartaoNumero",
        "validadeMes",
        "validadeAno",
        "cvv",
        "parcelas",
      ].forEach((key) => {
        if (!form[key as CampoFormulario]) {
          newErrors[key as CampoFormulario] = "Campo obrigatório";
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const finalizarCompra = (): void => {
    if (validateForm()) {
      setCompraFinalizada(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const inputClass = (field: CampoFormulario): string =>
    `border px-4 py-3 w-full text-sm ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;

  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen px-4 md:px-20 py-12 bg-[url('/assets/grain-texture.png')]">
      {compraFinalizada && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="p-8 text-center relative w-[90%] max-w-md">
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setCompraFinalizada(false)}
            >
              &times;
            </button>
            <div className="text-green-500 text-5xl mb-4">✔</div>
            <h2 className="text-xl font-bold mb-4">
              Seu pedido foi realizado!
            </h2>
            <button
              className="bg-gray-200 hover:bg-gray-300 px-6 py-2 font-semibold text-sm"
              onClick={() => (window.location.href = "/")}
            >
              VOLTAR PARA A PÁGINA INICIAL
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulário */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex flex-col items-start gap-2 ">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <img
                src="/assets/vector.svg"
                alt="Seta"
                className="w-18 h-18 transform rotate-180 transition-transform hover:-translate-x-1"
                draggable={false}
              />
            </button>
          </div>

          <h1 className="text-4xl font-black">CHECKOUT</h1>

          <div className="flex gap-6 font-medium text-base">
            <span className="text-gray-400">INFORMAÇÕES</span>
            <span className="text-black">PAGAMENTO</span>
          </div>

          <form className="space-y-6">
            <h3 className="font-semibold text-sm uppercase">
              Informações de Pagamento
            </h3>

            <input
              name="cartaoNome"
              placeholder="Nome impresso no cartão"
              value={form.cartaoNome}
              onChange={handleChange}
              className={inputClass("cartaoNome")}
            />

            <input
              name="cartaoNumero"
              placeholder="Número do cartão"
              value={form.cartaoNumero}
              onChange={handleChange}
              className={inputClass("cartaoNumero")}
            />

            <div className="grid grid-cols-2 gap-4">
              <select
                name="validadeMes"
                value={form.validadeMes}
                onChange={handleChange}
                className={inputClass("validadeMes")}
              >
                <option value="">Mês</option>
                {[...Array(12)].map((_, i) => {
                  const mes = String(i + 1).padStart(2, "0");
                  return (
                    <option key={mes} value={mes}>
                      {mes}
                    </option>
                  );
                })}
              </select>

              <select
                name="validadeAno"
                value={form.validadeAno}
                onChange={handleChange}
                className={inputClass("validadeAno")}
              >
                <option value="">Ano</option>
                {[...Array(10)].map((_, i) => {
                  const ano = new Date().getFullYear() + i;
                  return (
                    <option key={ano} value={ano}>
                      {ano}
                    </option>
                  );
                })}
              </select>
            </div>

            <input
              name="cvv"
              placeholder="CVV"
              value={form.cvv}
              onChange={handleChange}
              className={inputClass("cvv")}
            />

            <select
              name="parcelas"
              value={form.parcelas}
              onChange={handleChange}
              className={inputClass("parcelas")}
            >
              <option value="">Parcelas</option>
              {[1, 2, 3, 6, 12].map((n) => (
                <option key={n} value={String(n)}>
                  {n}x de {formatarPreco(subtotal / n)}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={finalizarCompra}
              className="mt-4 px-6 py-3 bg-gray-200 text-black font-bold hover:bg-gray-300 text-sm"
            >
              FINALIZAR COMPRA
            </button>
          </form>
        </div>

        {/* Resumo do Pedido */}
        <div className="border border-gray-300 p-6 pt-15">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Seus pedidos</h3>
            <span className="text-blue-600 text-xs">({produtos.length})</span>
          </div>

          {produtos.map((produto) => (
            <div
              className="flex gap-4 mb-4"
              key={`${produto.id}-${produto.variacao}`}
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex flex-col justify-between flex-1 text-sm">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-sm leading-4">
                      {produto.nome}
                    </p>
                    <p className="text-gray-500 text-xs">{produto.variacao}</p>
                  </div>
                  <a className="underline text-xs cursor-pointer">Mudar</a>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-500">({produto.quantidade})</span>
                  <span className="font-medium">
                    {formatarPreco(produto.preco)}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t pt-4 mt-4 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatarPreco(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Entrega</span>
              <span className="text-green-600 text-xs">Frete grátis</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>{formatarPreco(subtotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
