import { combineReducers } from 'redux';
// import counter from './counter';

const sample = (state = { open: false }, action: any) => {
  console.log('reducer', state, action);
  switch (action.type) {
    case 'SYSTEM_DRAWER': 
      return {
        ...state,
        open: action.openState
      };

    default: 
      break;
  }
  return state;
};


const rootReducer = combineReducers({
  system: sample
});

export default rootReducer;