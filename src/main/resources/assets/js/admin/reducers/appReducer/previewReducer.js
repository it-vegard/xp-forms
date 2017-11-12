const previewReducer = (state = {
  isLoading: false,
  form: null,
}, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default previewReducer;
