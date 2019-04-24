import { combineReducers, Reducer } from 'redux';
import { appConfigReducer } from './appConfig';
import { ApplicationState } from '../store';


const rootReducer: Reducer<ApplicationState> = combineReducers({
  appConfig: appConfigReducer
});

export default rootReducer;