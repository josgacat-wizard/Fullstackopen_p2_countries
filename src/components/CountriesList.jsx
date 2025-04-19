const CountriesList = ({ country, handleShowCountry }) => {
  return (
    <li>
      {country.name.common}{" "}
      <button onClick={() => handleShowCountry(country)}>show</button>
    </li>
  );
};

export default CountriesList;
