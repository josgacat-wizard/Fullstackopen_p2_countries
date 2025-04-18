import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import countriesService from "./services/countries";

const App = () => {
  // const [value, setValue] = useState("");

  const [countries, setCountries] = useState([]);
  const [showFiltered, setShowFiltered] = useState("");

  useEffect(() => {
    // console.log("effect");
    countriesService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const handleFilteredChange = (event) => {
    // console.log(event.target.value);
    setShowFiltered(event.target.value);
  };

  return (
    <div>
      <h1>Countries information</h1>
      <Filter value={showFiltered} onChange={handleFilteredChange} />
      <Countries countries={countries} showFiltered={showFiltered} />
    </div>
  );
};

export default App;
