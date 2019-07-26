
const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const home = require('../templates/home.handlebars')

const onGetCampers = () => {
  $('.hidden').hide()
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

// const moveButtons = () => {
//   $('.camper-action').width(15).height(15)
//   $('.home').width(15).height(15)
// }

const onHome = () => {
  $('.home-page').html(home)
  $('.hidden').hide()
}

const addHandlers = () => {
  $('html').on('click', '.get-campers', onGetCampers)
  $('html').on('click', '.create-camper-button', onCreateCamperOpen)
  $('html').on('submit', '.create-camper-form', onCreateCamper)
  $('html').on('click', '.show-camper-button', onShowCamperOpen)
  $('html').on('submit', '.show-camper', onShowCamper)
  $('html').on('click', '#delete-camper-final', onDeleteCamper)
  $('html').on('submit', '.edit-camper-form', onUpdateCamper)
  // $('html').on('click', '.camper-action', moveButtons)
  $('html').on('click', '.home', onHome)
  // $('.show-camper-content').on('click', 'data('id')', )
}

module.exports = {
  addHandlers
}
