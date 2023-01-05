import {
   MODEL, RESPONSE } from './constants';

const initialState = {
   model: {user:[], bot: []},
   response: ''
}

export const baseReducer = (state=initialState, action={}) => { 
   switch(action.type) {
       case MODEL:
           return Object.assign({}, state, {model: action.payload});
        case RESPONSE:
            return Object.assign({}, state, {response: action.payload});
       default:
           return state;
   }
}