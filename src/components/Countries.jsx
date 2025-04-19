import Country from "./Country";
import CountriesList from "./CountriesList";

const Countries = ({
  countries,
  showFiltered,
  showCountry,
  countryToShow,
  handleShowCountry,
}) => {
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
    // setShowCountry(false);
    content = countriesResults.map((country) => (
      <CountriesList
        key={country.ccn3}
        country={country}
        handleShowCountry={handleShowCountry}
      />
    ));
  } else if (countriesResults.length === 1) {
    // setShowCountry(true);
    let key = countriesResults[0].ccn3;
    let country = countriesResults[0];
    content = <Country key={key} country={country} />;
  } else if (countriesResults.length === 0) {
    content = "";
  }

  if (showCountry === true) {
    let key = countryToShow.ccn3;
    let country = countryToShow;
    content = <Country key={key} country={country} />;
  }

  return <>{content}</>;
};

export default Countries;
