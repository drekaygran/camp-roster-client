
const campersTable = require('../templates/campers-table.handlebars')
const contentMessage = require('../templates/content-messages.handlebars')
const camperDisplay = require('../templates/camper-display.handlebars')
const store = require('./../store')
// const api = require('./api')
const badRequest = contentMessage({ input: 'error' })

const displayCampers = data => {
  const displayTable = campersTable({ campers: data.campers })
  $('.camper-info').html(displayTable)
  $('.camper-info').show()
  $('form').trigger('reset')
}

const getCampersFailure = data => {
  $('.content-message').html(badRequest)
  $('form').trigger('reset')
  setTimeout(() => {
    $('.content-message').html('')
  }, 5000)
}

const showCamperSuccess = data => {
  let editable
  if (data.camper.user.id === store.user.id) {
    editable = true
  } else {
    editable = false
  }
  // console.log('editable ', editable)
  const displayCamper = camperDisplay({ camper: data.camper, editable: editable })
  // console.log(data)
  $('.show-camper-content').html(displayCamper)
  $('.btn-primary').on('click', () => {
    $('.show-camper-content').html('')
  })
  $('form').trigger('reset')
}

const showCamperFailure = data => {
  $('.content-message').html(badRequest)
  $('form').trigger('reset')
  setTimeout(() => {
    $('.content-message').html('')
  }, 5000)
}

const createCamperSuccess = data => {
  $('form').trigger('reset')
}

const createCamperFailure = data => {
  $('.content-message').html(badRequest)
  $('form').trigger('reset')
  setTimeout(() => {
    $('.content-message').html('')
  }, 5000)
}

const deleteCamperSuccess = data => {
  $('.show-camper-content').html('')
  $('.content-message').html(contentMessage({ deleted: true }))
  setTimeout(() => {
    $('.content-message').html('')
  }, 5000)
}

$('#editModalScrollable').on('show.bs.modal', function (event) {
  const button = $(event.relatedTarget) // Button that triggered the modal
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  const modal = $(this)
  modal.find('.modal-title').text(`Update ${button.data('first')}'s information`)
  modal.find('#first_name').val(button.data('first'))
  modal.find('#last_name').val(button.data('last'))
  modal.find('#allergies').val(button.data('allergies'))
  modal.find('#dob').val(button.data('dob'))
  modal.find('#parent_name').val(button.data('first'))
  modal.find('#parent_phone').val(button.data('phone'))
  modal.find('#parent_email').val(button.data('email'))
})

module.exports = {
  displayCampers,
  getCampersFailure,
  showCamperSuccess,
  showCamperFailure,
  createCamperSuccess,
  createCamperFailure,
  deleteCamperSuccess
}
