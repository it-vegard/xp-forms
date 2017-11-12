const formStudioReducer = (state = {
  isLoading: false,
  selectedForms: [],
}, action) => {
  switch (action.type) {
    case 'LOADING_FORMS':
      return {
        ...state,
        isLoading: true,
      };
    case 'RECEIVE_FORMS':
      return {
        ...state,
        isLoading: false,
      };
    case 'SELECT_FORM':
      return {
        ...state,
        selectedForms: [
          ...state.selectedForms,
          action.id,
        ],
      };
    case 'UNSELECT_FORM':
      return {
        ...state,
        selectedForms: state.selectedForms.filter(item => action.id !== item),
      };
    case 'DELETED_FORM':
      return {
        ...state,
        selectedForms: state.selectedForms.filter(item => action.id !== item),
      };
    default:
      return state;
  }
};

export default formStudioReducer;
