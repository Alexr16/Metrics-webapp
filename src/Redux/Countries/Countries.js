const FETCH_COUNTRIES_DATA = 'MetricsWebApp/Countries/FETCH_COUNTRIES_DATA';
const initialState = [];

const date = (new Date()).toISOString().split('T')[0];

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
        });
      });

      dispatch(success(countriesData));
    })
    .catch((error) => { throw error; });
};

// export const fetchCountriesData = () => async (dispatch) => {
//   fetch('https://api.covid19tracking.narrativa.com/api/countries')
//     .then((data) => data.json())
//     .then((data) => {
//       dispatch({ type: FETCH_COUNTRIES_DATA, data });
//     })
//     .catch((error) => { throw error; });
// };

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_DATA:
      return { data: action.countries, status: 'success' };

      // case RESERVATION:
      //   return [...state.map((mission) => {
      //     if (mission.mission_id === action.mission.id) {
      //       return { ...mission, reserved: action.mission.status };
      //     }
      //     return mission;
      //   })];

    default:
      return state;
  }
};

export default countriesReducer;
