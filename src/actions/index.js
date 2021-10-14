// TODO: add and export your own actions

export default function selectCity(city) {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'CITY_SELECTED',
    payload: city
  }
}
