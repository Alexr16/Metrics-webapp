const baseUrlMap = 'https://mapsvg.com/static/maps/geo-calibrated';

export const normalizeName = (name) => {
  if (name === 'us') return 'usa';
  if (name === 'korea,_south') return 'south-korea';
  if (name === 'brunei') return 'brunei-darussalam';
  if (name === 'afghanistan') return 'world';
  if (name === 'albania') return 'world';
  if (name === 'algeria') return 'world';
  if (name === 'antigua_and_barbuda') return 'world';
  if (name === 'barbados') return 'world';
  if (name === 'belize') return 'world';
  if (name === 'benin') return 'world';
  if (name === 'burma') return 'world';
  if (name === 'bosnia_and_herzegovina') return 'world';
  if (name === 'cabo_verde') return 'world';
  if (name === 'congo_(brazzaville)') return 'world';
  if (name === 'comoros') return 'world';
  if (name === 'central_african_republic') return 'world';
  if (name === 'congo_(kinshasa)') return 'world';
  if (name === 'czechia') return 'world';
  if (name === 'diamond_princess') return 'world';
  if (name === 'dominica') return 'world';
  if (name === 'east_timor') return 'world';
  if (name === 'equatorial_guinea') return 'world';
  if (name === 'eritrea') return 'world';
  if (name === 'eswatini') return 'world';
  if (name === 'fiji') return 'world';
  if (name === 'gabon') return 'world';
  if (name === 'gambia') return 'world';
  if (name === 'ghana') return 'world';
  if (name === 'grenada') return 'world';
  if (name === 'guernsey') return 'world';
  if (name === 'guinea-bissau') return 'world';
  if (name === 'guyana') return 'world';
  if (name === 'holy_see') return 'world';
  if (name === 'jersey') return 'world';
  if (name === 'jordan') return 'world';
  if (name === 'kiribati') return 'world';
  if (name === 'kuwait') return 'world';
  if (name === 'lebanon') return 'world';
  if (name === 'lesotho') return 'world';
  if (name === 'liberia') return 'world';
  if (name === 'libya') return 'world';
  if (name === 'ms_zaandam') return 'world';
  if (name === 'madagascar') return 'world';
  if (name === 'malawi') return 'world';
  if (name === 'maldives') return 'world';
  if (name === 'mauritania') return 'world';
  if (name === 'mauritius') return 'world';
  if (name === 'micronesia') return 'world';
  if (name === 'monaco') return 'world';
  if (name === 'mongolia') return 'world';
  if (name === 'niger') return 'world';
  if (name === 'north_macedonia') return 'world';
  if (name === 'papua_new_guinea') return 'world';
  if (name === 'saint_kitts_and_nevis') return 'world';
  if (name === 'saint_lucia') return 'world';
  if (name === 'saint_vincent_and_the_grenadines') return 'world';
  if (name === 'samoa') return 'world';
  if (name === 'sao_tome_and_principe') return 'world';
  if (name === 'senegal') return 'world';
  if (name === 'seychelles') return 'world';
  if (name === 'somalia') return 'world';
  if (name === 'south_sudan') return 'world';
  if (name === 'suriname') return 'world';
  if (name === 'tanzania') return 'world';
  if (name === 'timor-leste') return 'world';
  if (name === 'togo') return 'world';
  if (name === 'trinidad_and_tobago') return 'world';
  if (name === 'tunisia') return 'world';
  if (name === 'united_arab_emirates') return 'world';
  if (name === 'vanuatu') return 'world';
  if (name === 'west_bank_and_gaza') return 'world';
  if (name === 'western_sahara') return 'world';
  if (name === 'antarctica') return 'world';
  if (name === 'antigua and barbuda') return 'world';
  if (name === 'bosnia and herzegovina') return 'world';
  if (name === 'burkina faso') return 'world';
  if (name === 'central african republic') return 'world';
  if (name === 'costa rica') return 'world';
  if (name === 'cote divoire') return 'world';
  if (name === 'dominican republic') return 'world';
  if (name === 'el salvador') return 'world';
  if (name === 'equatorial guinea') return 'world';
  if (name === 'holy see') return 'world';
  if (name === 'korea, north') return 'world';
  if (name === 'korea, south') return 'world';
  if (name === 'marshall islands') return 'world';
  if (name === 'new zealand') return 'world';
  if (name === 'north macedonia') return 'world';
  if (name === 'palau') return 'world';
  if (name === 'papua new guinea') return 'world';
  if (name === 'saint kitts and nevis') return 'world';
  if (name === 'saint lucia') return 'world';
  if (name === 'saint vincent and the grenadines') return 'world';
  if (name === 'san marino') return 'world';
  if (name === 'sao tome and principe') return 'world';
  if (name === 'saudi arabia') return 'world';
  if (name === 'sierra leone') return 'world';
  if (name === 'solomon islands') return 'world';
  if (name === 'south africa') return 'world';
  if (name === 'south sudan') return 'world';
  if (name === 'sri lanka') return 'world';
  if (name === 'tonga') return 'world';
  if (name === 'trinidad and tobago') return 'world';
  if (name === 'united arab emirates') return 'world';
  if (name === 'united kingdom') return 'world';

  let result = name;
  result = result.replace(/_/, '-').replace(/\*/g, '');
  if (result === 'bosnia-and-herzegovina') return 'bosnia-herzegovina-2';
  return result;
};

export const getMapUrl = (countryName, baseUrl = baseUrlMap) => {
  const normalCountryName = normalizeName(countryName);
  return `${baseUrl}/${normalCountryName}.svg`;
};
