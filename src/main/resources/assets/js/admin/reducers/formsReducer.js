const formsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATED_NEW_FORM':
      return [
        ...state,
        action.form,
      ];
    case 'RECEIVE_FORMS':
      return [
        ...state.concat(action.forms.filter(newForm =>
          state.findIndex(form => form.id === newForm.id) === -1)),
      ];
    case 'DELETED_FORM':
      return state.filter(item => action.id !== item.id);
    case 'RECEIVE_FORM':
      if (state.findIndex(form => form.id === action.id) !== -1) {
        return state.map((form) => {
          if (form.id !== action.id) {
            return form;
          }
          return {
            ...form,
            config: action.form,
          };
        });
      }
      return [
        ...state,
        {
          id: action.id,
          displayName: action.form.displayName,
          config: action.form,
        },
      ];
    default:
      return state;
  }
};

export default formsReducer;
