import { serviceUrl } from '../admin/util/EnonicHelper';

export const loadingForm = () => ({
  type: 'LOADING_FORM',
});

export const receiveForm = form => ({
  type: 'RECEIVE_FORM',
  form,
});

export const initForm = id => (dispatch) => {
  dispatch(loadingForm());
  return fetch(serviceUrl(`form?id=${id}`))
    .then(response => response.json())
    .then(json => dispatch(receiveForm(json.form)));
};

export const submitForm = (values, formId) => ({
  type: 'SUBMIT_FORM',
  values,
  id: formId,
});
