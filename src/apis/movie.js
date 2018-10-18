import axios from 'axios'

export function getMovieList() {
  return new Promise((resolve) => {
    let returnData = {}
    axios.get(`/api/movie/list`).then((response) => {
      returnData = response.data
      resolve(returnData)
    })
  })
}