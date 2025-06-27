import { useState } from "react";
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
}

type CampoFormulario = keyof Formulario;

interface CheckoutPageProps {
  produtos?: Produto[];
}

const labels: Record<CampoFormulario, string> = {
  email: "Email",
  celular: "Celular",
  nome: "Nome",
  sobrenome: "Sobrenome",
  pais: "País",
  estado: "Estado",
  endereco: "Endereço",
  cidade: "Cidade",
  cep: "CEP",
};

export default function CheckoutPage() {
  const location = useLocation();
  const produtos: Produto[] = location.state?.cartItems || [];

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
  });

  const [errors, setErrors] = useState<
    Partial<Record<CampoFormulario, string>>
  >({});
  const [currentTab, setCurrentTab] = useState<"info" | "pagamento">("info");

  const subtotal = produtos.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const formatarPreco = (valor: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as CampoFormulario]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<CampoFormulario, string>> = {};

    if (!form.email) {
      newErrors.email = "Campo obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email inválido";
    }

    if (!form.celular) {
      newErrors.celular = "Campo obrigatório";
    } else if (!/^\d{10,11}$/.test(form.celular)) {
      newErrors.celular = "Celular inválido";
    }

    (Object.keys(form) as CampoFormulario[]).forEach((key) => {
      if (!form[key] && !newErrors[key]) {
        newErrors[key] = "Campo obrigatório";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setCurrentTab("pagamento");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const inputClass = (field: CampoFormulario) =>
    `p-3 border w-full ${errors[field] ? "border-red-500" : "border-gray-300"}`;

  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-4 md:p-8 font-sans bg-[url('/assets/grain-texture.png')]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
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

          <h1 className="text-3xl font-extrabold">CHECKOUT</h1>

          <div className="flex gap-6 font-semibold text-sm">
            <button
              role="tab"
              aria-pressed={currentTab === "info"}
              className={`pb-1 ${
                currentTab === "info"
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setCurrentTab("info")}
            >
              INFORMAÇÕES
            </button>
            <button
              role="tab"
              aria-pressed={currentTab === "pagamento"}
              className={`pb-1 ${
                currentTab === "pagamento"
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => {
                if (currentTab === "info" && !validateForm()) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  return;
                }
                setCurrentTab("pagamento");
              }}
            >
              PAGAMENTO
            </button>
          </div>

          {currentTab === "info" && (
            <form className="space-y-8">
              <div>
                <h3 className="font-semibold mb-2">INFORMAÇÕES DE CONTATO</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="celular"
                      placeholder="Celular"
                      onChange={handleChange}
                      className={inputClass("celular")}
                    />
                    {errors.celular && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.celular}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">ENDEREÇO</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="nome"
                      placeholder="Nome"
                      onChange={handleChange}
                      className={inputClass("nome")}
                    />
                    {errors.nome && (
                      <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
                    )}
                  </div>
                  <div>
                    <input
                      name="sobrenome"
                      placeholder="Sobrenome"
                      onChange={handleChange}
                      className={inputClass("sobrenome")}
                    />
                    {errors.sobrenome && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.sobrenome}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  {(Object.keys(labels) as CampoFormulario[])
                    .filter(
                      (f) =>
                        !["email", "celular", "nome", "sobrenome"].includes(f)
                    )
                    .map((field) => (
                      <div key={field}>
                        <input
                          name={field}
                          placeholder={labels[field]}
                          onChange={handleChange}
                          className={inputClass(field)}
                        />
                        {errors[field] && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors[field]}
                          </p>
                        )}
                      </div>
                    ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="mt-6 px-6 py-3 bg-gray-200 text-black font-bold flex items-center justify-between w-full md:w-64 hover:bg-gray-300"
              >
                PRÓXIMO <span className="ml-4">→</span>
              </button>
            </form>
          )}

          {currentTab === "pagamento" && (
            <div className="text-gray-500 italic">
              💳 Conteúdo da aba <strong>PAGAMENTO</strong> virá em breve...
            </div>
          )}
        </div>

        <div className="border border-gray-300 p-6 pt-15">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Seus pedidos</h3>
            <span className="text-blue-600 text-sm">({produtos.length})</span>
          </div>

          {produtos.map((produto) => (
            <div className="flex gap-4 mb-4" key={produto.id}>
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex flex-col justify-between flex-1 text-sm">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">{produto.nome}</p>
                    <p className="text-gray-500">{produto.variacao}</p>
                  </div>
                  <a className="underline text-sm cursor-pointer">Mudar</a>
                </div>
                <div className="flex justify-between">
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
              <span className="text-green-600">Frete grátis</span>
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
