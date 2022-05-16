import Country from './Country';

const CountriesList = (prop) => {
  const { countries } = prop;
  return (
    <div className="countries">
      {countries.map((country) => (
        <Country
          key={country.id}
          country={country}
        />
      ))}
    </div>
  );
};

export default CountriesList;
