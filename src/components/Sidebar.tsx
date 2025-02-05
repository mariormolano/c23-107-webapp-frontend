import Logo from './Logo';

const Sidebar = () => {
  const paises = ["Argentina", "Bolivia", "Chile", "Colombia", "Paraguay", "Perú", "Uruguay", "Venezuela"];
  const categorias = ["Salsas", "Pastas", "Arroz", "Legumbres", "Panes", "Postres", "Bebidas", "Ensaladas", "Carnes", "Pescados"];

  return (
    <aside className="flex flex-col  items-center  h-full min-w-40 md:min-w-72 bg-white pb-4">
      <Logo />
      <form className="w-full max-w-md rounded-lg flex flex-col items-center space-y-4">
        <input
          type="text"
          name="search"
          placeholder="Escribe lo que buscas"
          className="w-48 bg-celesteClaro px-3 py-2 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />

        <div className="w-full max-w-48">
          <label htmlFor="country" className="block text-lg font-bold text-black">
            Selecciona País
          </label>
          <select
            id="country"
            name="country"
            className="w-full bg-celesteClaro px-3 py-2 mt-1 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Selecciona un país</option>
            {paises.map((pais) => (
              <option key={pais.toLowerCase()} value={pais.toLowerCase()}>
                {pais}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full max-w-48">
          <label htmlFor="categories" className="block text-lg font-bold text-black">
            Categorías
          </label>
          <select
            id="categories"
            name="categories"
            required
            className="w-full bg-celesteClaro px-3 py-2 mt-1 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((cat) => (
              <option key={cat.toLowerCase()} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </form>
    </aside>
  );
};

export default Sidebar;
