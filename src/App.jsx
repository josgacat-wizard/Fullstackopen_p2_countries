import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import countriesService from "./services/countries";

const App = () => {
  // const [value, setValue] = useState("");

  const [countries, setCountries] = useState([]);
  const [showFiltered, setShowFiltered] = useState("");
  const [showCountry, setShowCountry] = useState(null);
  const [countryToShow, setCountryToShow] = useState(null);

  useEffect(() => {
    // console.log("effect");
    countriesService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const handleFilteredChange = (event) => {
    // console.log(event.target.value);
    if (!event.target.value) {
      setShowCountry(false);
    }
    setShowFiltered(event.target.value);
  };

  const handleShowCountry = (country) => {
    setCountryToShow(country);
    setShowCountry(true);
  };

  return (
    <div>
      <h1>Countries information</h1>
      <Filter value={showFiltered} onChange={handleFilteredChange} />
      <Countries
        countries={countries}
        showFiltered={showFiltered}
        showCountry={showCountry}
        countryToShow={countryToShow}
        handleShowCountry={handleShowCountry}
      />
    </div>
  );
};

export default App;
