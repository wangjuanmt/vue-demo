import axios from 'axios'

export function getListInfo(pageSize, currentPage) {
  return new Promise((resolve) => {
    let returnData = {}
    axios.get(`/api/movie/listinfo`, {params: {pageSize, currentPage}}).then((response) => {
      returnData = response
      resolve(returnData)
    })
  })
}