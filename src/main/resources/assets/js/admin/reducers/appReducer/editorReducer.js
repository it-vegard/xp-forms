const NEW_FORM = {
  id: null,
  displayName: null,
  title: null,
  submitButton: null,
  successMessage: null,
  overrideSubmitUrl: null,
  overrideSubmitMethod: null,
  fields: [],
};

const editorReducer = (state = {
  isLoading: false,
  form: null,
}, action) => {
  switch (action.type) {
    case 'CREATE_FORM':
      return {
        isLoading: false,
        form: NEW_FORM,
      };
    case 'LOADING_FORM':
      return {
        isLoading: true,
        form: null,
      };
    case 'RECEIVE_FORM':
      return {
        isLoading: false,
        form: action.form,
      };
    case 'CLOSE_FORM':
      return {
        isLoading: false,
        form: null,
      };
    default:
      return state;
  }
};

export default editorReducer;
