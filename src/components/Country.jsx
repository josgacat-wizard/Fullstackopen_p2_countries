const Country = ({ country, showCountry }) => {
  console.log(country);
  console.log(showCountry);

  return (
    <>
      {showCountry ? (
        <li>{country.name.common}</li>
      ) : (
        <div>
          <h2>{country.name.common}</h2>
          <p>Capital {country.capital}</p>
          <p>Area {country.area}</p>
          <h3>Languages</h3>
          {Object.values(country.languages).map((language) => (
            <li>{language}</li>
          ))}
          <br />
          <img src={country.flags.svg} alt={country.flags.alt} width={200} />
        </div>
      )}
    </>
  );
};

export default Country;
