
const getFormFields = require(`../../../lib/get-form-fields`)
// const store = require('./../store')

const api = require('./api')
const ui = require('./ui')

const onGetCampers = () => {
  api.getCampers()
    .then(ui.displayCampers)
    .catch(ui.getCampersFailure)
}

const onCreateCamperOpen = () => {
  $('.create-camper').show()
}

const onCreateCamper = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createCamper(data)
    .then(console.log)
    .catch(console.log)
}

const addHandlers = () => {
  $('.get-campers').on('click', onGetCampers)
  $('.create-camper-button').on('click', onCreateCamperOpen)
  $('.create-camper').on('submit', onCreateCamper)
}

module.exports = {
  addHandlers
}
