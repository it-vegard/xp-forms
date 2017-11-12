import { combineReducers } from 'redux';
import editorReducer from './editorReducer';
import formReducer from './formStudioReducer';
import previewReducer from './previewReducer';

const appReducer = combineReducers({
  editor: editorReducer,
  formStudio: formReducer,
  preview: previewReducer,
});

export default appReducer;
