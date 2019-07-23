
const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('./../store')

const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.data = data
  api.signUp(data)
    .then(
      ui.signUpSuccess,
      api.signIn(store.data)
    )
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut(event)
    .then(ui.signOutSuccess)
    .catch(ui.signOutSuccess)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
