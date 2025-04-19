const Country = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>
      <h3>Languages</h3>
      {Object.values(country.languages).map((language) => (
        <li key={language}>{language}</li>
      ))}
      <br />
      <img src={country.flags.svg} alt={country.flags.alt} width={200} />
    </>
  );
};

export default Country;
