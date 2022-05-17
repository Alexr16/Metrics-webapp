import Country from './Country';

const CountriesList = (prop) => {
  const { countries } = prop;
  return (
    <ul className="countries">
      {countries.map((country) => (
        <Country
          key={country.id}
          country={country}
        />
      ))}
    </ul>
  );
};

export default CountriesList;
