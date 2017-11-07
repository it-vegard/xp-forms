import fetch from 'isomorphic-fetch';
import { push as navigateTo } from 'react-router-redux';
import { formAdminUrl, serviceUrl } from './util/EnonicHelper';

function createRequest(method, values) {
  return {
    method,
    headers: values ? {
      'Content-Type': 'application/json',
    } : undefined,
    body: values ? JSON.stringify({ values }) : undefined,
  };
}

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

export function createNewForm() {
  return {
    type: 'CREATE_FORM',
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
    return fetch(serviceUrl(path), createRequest('POST', values))
      .then(response => response.json())
      .then(json => dispatch(savedForm(json)));
  };
}

export function deleteForm(id) {
  return {
    type: 'DELETE_FORM',
    id,
  };
}

export function duplicateForm(id) {
  return {
    type: 'DUPLICATE_FORM',
    id,
  };
}

export function closeForm() {
  return (dispatch) => {
    dispatch(navigateTo(formAdminUrl('/')));
    dispatch({ type: 'CLOSE_FORM' });
  };
}

export function selectForm(id) {
  return {
    type: 'SELECT_FORM',
    id,
  };
}

export function unSelectForm(id) {
  return {
    type: 'UNSELECT_FORM',
    id,
  };
}
