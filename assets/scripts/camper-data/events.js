
const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onGetCampers = () => {
  api.getCampers()
    .then(ui.displayCampers)
    .catch(ui.getCampersFailure)
}

const onShowCamperOpen = () => {
  $('.hidden').hide()
  $('.show-camper-box').show()
}

const onShowCamper = event => {
  event.preventDefault()
  const searched = getFormFields(event.target)
  store.id = searched.camper.id
  api.showCamper(searched.camper.id)
    .then(ui.showCamperSuccess)
    .catch(ui.showCamperFailure)
}

const onCreateCamperOpen = () => {
  $('.hidden').hide()
  $('.create-camper').show()
}

const onCreateCamper = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createCamper(data)
    .then(ui.createCamperSuccess)
    .catch(ui.createCamperFailure)
}

const onDeleteCamper = () => {
  const idToDelete = $('.delete-camper').attr('value')
  api.deleteCamper(idToDelete)
    .then(ui.deleteCamperSuccess)
    .catch(ui.deleteCamperFailure)
}

const onUpdateCamper = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateCamper(data, store.id)
    .then(ui.updateCamperSuccess)
    .catch(ui.updateCamperFailure)
}

const moveButtons = () => {
  $('.camper-action').width(15).height(15)
  $('.home').width(15).height(15)
}

const revertToOriginalSize = () => {
  $('.camper-action').width(30).height(30)
  $('.home').width(30).height(30)
}

const addHandlers = () => {
  $('.get-campers').on('click', onGetCampers)
  $('.create-camper-button').on('click', onCreateCamperOpen)
  $('.create-camper').on('submit', onCreateCamper)
  $('.show-camper-button').on('click', onShowCamperOpen)
  $('.show-camper').on('submit', onShowCamper)
  $('#delete-camper-final').on('click', onDeleteCamper)
  $('.edit-camper-form').on('submit', onUpdateCamper)
  $('.camper-action').on('click', moveButtons)
  $('.home').on('click', revertToOriginalSize)
  // $('.show-camper-content').on('click', 'data('id')', )
}

module.exports = {
  addHandlers
}
