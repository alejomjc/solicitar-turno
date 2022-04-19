import { useState, useEffect } from "react";
import { Button, Input, useTheme } from "@nextui-org/react";
import Select from "react-select";
import AsyncSelect from "react-select/async";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { reactSelectStyles } from "@styles/reactSelectStyles";

const SearchInputDireccion = ({ panTo }) => {
  const [options, setOptions] = useState<any>([]);
  const { theme } = useTheme();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({});
  const customTheme = (themeSelect) => {
    return reactSelectStyles(themeSelect, theme);
  };
  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    // console.log("change Input");
    setValue(e.target.value);
  };
  const handleInputChange = (str) => {
    setValue(str);
    return str;
  };
  const filterColors = (inputValue: string) => {
    return data.map((item) => ({ value: item, label: item.description }));
  };
  const loadOptions = (
    inputValue: string,
    callback: (options: any) => void
  ) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 300);
  };
  // const handleLocalizarmeAuto = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       panTo({
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       });
  //       clearSuggestions();
  //     },
  //     () => null
  //   );
  // };
  const handleSelect = async (value) => {
    const { label } = value;
    setValue(label, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address: label });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };
  useEffect(() => {
    if (data && status === "OK") {
      const newOptions = data.map((item) => ({
        value: item,
        label: item.description,
      }));
      setOptions(newOptions);
    }
  }, [data]);
  return (
    <div>
      {/* <div>
        <Select
          theme={customTheme}
          options={options}
          onChange={handleSelect}
          noOptionsMessage={() => "No hay mas sugerencias"}
          placeholder="Escriba municipio y dirección"
          isSearchable
          onInputChange={handleInputChange}
        />
      </div> */}
      <div>
        <AsyncSelect
          theme={customTheme}
          // cacheOptions
          onChange={handleSelect}
          placeholder="Buscar por municipio y dirección"
          loadOptions={loadOptions}
          onInputChange={handleInputChange}
          noOptionsMessage={() => "No hay mas sugerencias"}
          loadingMessage={() => "Cargando.."}
        />
      </div>
    </div>
  );
};

export default SearchInputDireccion;
