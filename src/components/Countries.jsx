import Country from "./Country";

const Countries = ({ countries, showFiltered }) => {
  let showCountry;
  const countriesResults = countries.filter((country) => {
    if (!showFiltered) return false;
    let showFilteredLower = showFiltered.slice();
    let countryNameLower = country.name.common.slice();
    if (
      countryNameLower.toLowerCase().includes(showFilteredLower.toLowerCase())
    ) {
      return true;
    }
  });
  // console.log(countriesResults.length);
  // console.log(countriesResults);

  let content;

  if (countriesResults.length > 10) {
    content = <p>Too many matches, specify another filter</p>;
  } else if (countriesResults.length === 10 || countriesResults.length > 1) {
    showCountry = true;
    content = countriesResults.map((country) => (
      <Country key={country.ccn3} country={country} showCountry={showCountry} />
    ));
  } else if (countriesResults.length === 1) {
    showCountry = false;
    content = (
      <Country
        key={countriesResults[0].ccn3}
        country={countriesResults[0]}
        showCountry={showCountry}
      />
    );
  } else if (countriesResults.length === 0) {
    content = "";
  }

  return <>{content}</>;
};

export default Countries;
