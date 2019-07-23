
const campersTable = require('../templates/campers-table.handlebars')
// const store = require('./../store')
// const api = require('./api')

const displayCampers = data => {
  const displayTable = campersTable({ campers: data.campers })
  $('.camper-info').html(displayTable)
}

module.exports = {
  displayCampers
}
