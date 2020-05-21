const ALLSTARSHIPS_ENDPOINT = 'https://swapi.dev/api/starships/'

const getAllStarShips = () => { 
  return fetch(ALLSTARSHIPS_ENDPOINT)
    .then( (res) => res.json() )
    .then( (json) => json.results)
}

export default getAllStarShips;