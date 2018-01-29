const adminReducer = (state = { launcher: { tools: [] } }, action) => {
  switch (action.type) {
    case 'INITIALIZE_FORMS_ADMIN':
      return {
        ...state,
        launcher: {
          title: action.launcherTitle,
          tools: action.launcherConfig,
        },
      };
    default:
      return state;
  }
};

export default adminReducer;
