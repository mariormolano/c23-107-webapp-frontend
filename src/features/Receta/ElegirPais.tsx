import Select from "react-select";
import countries from "world-countries";

type ElegirPaisProps = {
  onChange: (selectedCountry: { value: string; label: string } | null) => void;
};

const customStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "#A0C3EE",
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: "grey",
  }),
};

const formattedCountries = countries
  .map((country) => ({
    value: country.cca2,
    label: country.name.common,
  }))
  .sort((a, b) => a.label.localeCompare(b.label, "es"));

const ElegirPais: React.FC<ElegirPaisProps> = ({ onChange }) => {
  return (
    <div>
      {/* <label
        htmlFor="country-select"
        className="block text-sm font-medium my-1"
      >
        País de la receta
      </label> */}
      <Select
        id="country-select"
        options={formattedCountries}
        onChange={onChange}
        placeholder="Selecciona un país"
        isClearable
        className="w-full"
        styles={customStyles}
      />
    </div>
  );
};

export default ElegirPais;
