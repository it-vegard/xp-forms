import fetch from 'isomorphic-fetch';
import { serviceUrl } from './util/EnonicHelper';

export function loadingForms() {
  return {
    type: 'LOADING_FORMS',
  };
}

export function receiveForms(forms) {
  return {
    type: 'RECEIVE_FORMS',
    forms,
  };
}

export function loadForms() {
  return (dispatch) => {
    dispatch(loadingForms());
    return fetch(serviceUrl('forms'))
      .then(response => response.json())
      .then(json => dispatch(receiveForms(json.forms)));
  };
}

export function loadingForm() {
  return {
    type: 'LOADING_FORM',
  };
}

export function receiveForm(form) {
  return {
    type: 'RECEIVE_FORM',
    form,
  };
}

export function loadForm(formId) {
  return (dispatch) => {
    dispatch(loadingForm());
    return fetch(serviceUrl(`form?id=${formId}`))
      .then(response => response.json())
      .then((json) => { dispatch(receiveForm(json.form)); });
  };
}

export function submittingForm(form) {
  return {
    type: 'SUBMITTING_FORM',
    form,
  };
}

export function savedForm(response) {
  return {
    type: 'SAVED_FORM',
    response,
  };
}

export function submitForm(values, id) {
  return (dispatch) => {
    dispatch(submittingForm(values));
    const path = id ? `form?id=${id}` : 'form';
    return fetch(serviceUrl(path), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values }),
    })
      .then(response => response.json())
      .then((json) => { dispatch(savedForm(json)); });
  };
}
