const editorReducer = (state = {
  isLoading: false,
  form: null,
}, action) => {
  switch (action.type) {
    case 'CREATED_NEW_FORM':
      return {
        isLoading: false,
        form: action.form,
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
