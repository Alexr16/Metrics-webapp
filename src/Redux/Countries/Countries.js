const FETCH_COUNTRIES_DATA = 'MetricsWebApp/Countries/FETCH_COUNTRIES_DATA';
const initialState = { status: 'Not Fetched', data: [] };
const newDate = new Date();
const yesterday = new Date();
yesterday.setDate(newDate.getDate() - 1);
const date = yesterday.toISOString().split('T')[0];

export const success = (countries) => ({
  type: FETCH_COUNTRIES_DATA,
  countries,
});

export const fetchCountriesData = () => async (dispatch) => {
  fetch(`https://api.covid19tracking.narrativa.com/api/${date}`)
    .then((data) => data.json())
    .then((data) => {
      const countriesData = [];
      const countriesObject = data.dates[date].countries;
      Object.keys(countriesObject).forEach((country) => {
        countriesData.push({
          id: countriesObject[country].id,
          name: countriesObject[country].name,
          confirm: countriesObject[country].today_new_confirmed,
          data: [
            {
              source: countriesObject[country].source,
              today_confirmed: countriesObject[country].today_confirmed,
              today_deaths: countriesObject[country].today_deaths,
              today_new_deaths: countriesObject[country].today_new_deaths,
              today_new_open_cases: countriesObject[country].today_new_open_cases,
              today_new_recovered: countriesObject[country].today_new_recovered,
              today_open_cases: countriesObject[country].today_open_cases,
              today_recovered: countriesObject[country].today_recovered,
              today_vs_yesterday_confirmed: countriesObject[country].today_vs_yesterday_confirmed,
              today_vs_yesterday_deaths: countriesObject[country].today_vs_yesterday_deaths,
              today_vs_yesterday_open_cases: countriesObject[country].today_vs_yesterday_open_cases,
              today_vs_yesterday_recovered: countriesObject[country].today_vs_yesterday_recovered,
              yesterday_confirmed: countriesObject[country].yesterday_confirmed,
              yesterday_deaths: countriesObject[country].yesterday_deaths,
              yesterday_open_cases: countriesObject[country].yesterday_open_cases,
              yesterday_recovered: countriesObject[country].yesterday_recovered,
            },
          ],
        });
      });

      dispatch(success(countriesData));
    })
    .catch((error) => { throw error; });
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_DATA:
      return { data: action.countries, status: 'success' };

    default:
      return state;
  }
};

export default countriesReducer;
