import fetch from 'isomorphic-fetch'
import { serviceUrl } from './util/EnonicHelper';

export function loadForms() {
  return dispatch => {
    dispatch(loadingForms());
    return fetch(serviceUrl(`forms`))
      .then(response => response.json())
      .then(json => dispatch(receiveForms(json.forms)))
  }
}

export function loadingForms() {
  return {
    type: 'LOADING_FORMS'
  }
}

export function receiveForms(forms) {
  return {
    type: 'RECEIVE_FORMS',
    forms: forms
  }
}

export function loadForm(formId) {
  return dispatch => {
    dispatch(loadingForm());
    return fetch(serviceUrl(`form?id=${formId}`))
      .then(response => response.json())
      .then(json => {dispatch(receiveForm(json.form))})
  }
}

export function loadingForm() {
  return {
    type: 'LOADING_FORM'
  }
}

export function receiveForm(form) {
  return {
    type: 'RECEIVE_FORM',
    form
  }
}