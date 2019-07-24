
const config = require('../config.js')
const store = require('./../store')

const getCampers = () => {
  return $.ajax({
    url: config.apiUrl + '/campers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showCamper = id => {
  return $.ajax({
    url: config.apiUrl + '/campers/' + id,
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

const deleteCamper = id => {
  return $.ajax({
    url: config.apiUrl + '/campers/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getCampers,
  createCamper,
  showCamper,
  deleteCamper
}
