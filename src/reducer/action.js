import { 
    MODEL, RESPONSE } from './constants';

export const getModel = (link) => ({
    type: MODEL,
    payload: link
});

export const botResponse = (link) => ({
    type: RESPONSE,
    payload: link
});