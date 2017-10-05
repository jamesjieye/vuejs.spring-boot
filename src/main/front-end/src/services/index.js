import Vue from 'vue'
import Promise from 'bluebird'

export default {
  getTechnologyDetails (technology) {
    return new Promise((resolve, reject) => {
      Vue.$http.get('/technologies/' + technology).then(({data}) => {
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
