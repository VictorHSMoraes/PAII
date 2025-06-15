import SearchIcon from "../assets/search.svg";

type SearchBarProps = {
  alignWith?: "inicio" | "colecao" | "novo";
};

const navItems = [
  { key: "inicio", label: "Início" },
  { key: "colecao", label: "Coleção" },
  { key: "novo", label: "Novo" },
];

export default function SearchBar({ alignWith = "inicio" }: SearchBarProps) {
  const index = navItems.findIndex((item) => item.key === alignWith);

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex items-center gap-x-27 mt-30">
        {Array.from({ length: index }).map((_, i) => (
          <div key={i} style={{ width: "max-content" }} />
        ))}
        <form className="flex">
          <div className="flex items-center bg-[#D9D9D9] rounded-sm h-15 w-[300px] md:w-[400px] px-4">
            <img
              src={SearchIcon}
              alt="Pesquisar"
              className="h-5 w-5 mr-3 opacity-70"
            />
            <input
              type="text"
              placeholder="Pesquisar"
              className="bg-transparent outline-none flex-1 text-gray-700 placeholder:text-gray-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
