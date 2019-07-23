
const signUpMessage = require('../templates/sign-up-message.handlebars')
const signInMessage = require('../templates/sign-in-message.handlebars')
const changePasswordMessage = require('../templates/change-password-message.handlebars')
const signOutMessage = require('../templates/sign-out-message.handlebars')
const store = require('./../store')
const api = require('./api.js')
// const api = require('./api')

const signedIn = () => {
  $('.signed-out').hide()
  $('.signed-in').show()
  $('form').trigger('reset')
}

const signedOut = () => {
  $('.signed-in').hide()
  $('.signed-out').show()
  $('form').trigger('reset')
}

const signUpSuccess = data => {
  api.signIn(store.save)
    .then(signInSuccess)
  const successMessage = signUpMessage({ input: data })
  $('.auth-message').html(successMessage)
  signedIn()
  store.user = data.user
}

const signUpFailure = data => {
  const errorMessage = signUpMessage({ input: '' })
  $('.auth-message').html(errorMessage)
  $('form').trigger('reset')
}

const signInSuccess = data => {
  const successMessage = signInMessage({ input: data })
  $('.auth-message').html(successMessage)
  signedIn()
  store.user = data.user
}

const signInFailure = data => {
  const errorMessage = signInMessage({ input: '' })
  $('.auth-message').html(errorMessage)
  $('form').trigger('reset')
}

const changePasswordSuccess = data => {
  const successMessage = changePasswordMessage({ input: data })
  $('.auth-message').html(successMessage)
  $('form').trigger('reset')
}

const changePasswordFailure = data => {
  const errorMessage = changePasswordMessage({ input: '' })
  $('.auth-message').html(errorMessage)
  $('form').trigger('reset')
}

const signOutSuccess = data => {
  const successMessage = signOutMessage({ input: 'success' })
  $('.auth-message').html(successMessage)
  store.user = null
  signedOut()
}

const signOutFailure = data => {
  const errorMessage = signOutMessage({ input: '' })
  $('.auth-message').html(errorMessage)
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  signedOut,
  signedIn
}
