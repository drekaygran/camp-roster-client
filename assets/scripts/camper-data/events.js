
// const getFormFields = require(`../../../lib/get-form-fields`)
// const store = require('./../store')

const api = require('./api')
const ui = require('./ui')

const onGetCampers = () => {
  api.getCampers()
    .then(ui.displayCampers)
    .catch(ui.getCampersFailure)
}

const addHandlers = () => {
  $('.get-campers').on('click', onGetCampers)
}

module.exports = {
  addHandlers
}
