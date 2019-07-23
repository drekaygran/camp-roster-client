
const config = require('../config.js')
// const store = require('./../store')

const getCampers = () => {
  return $.ajax({
    url: config.apiUrl + '/campers',
    method: 'GET'
  })
}

module.exports = {
  getCampers
}
