
const config = require('../config.js')
const store = require('./../store')

const getCampers = () => {
  return $.ajax({
    url: config.apiUrl + '/campers',
    method: 'GET'
  })
}

const createCamper = data => {
  return $.ajax({
    url: config.apiUrl + '/campers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getCampers,
  createCamper
}
