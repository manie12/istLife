import {TypesAction,postTypes} from '../Types'

const initialState:string[] = [];

export type actionTypes = {
    type:"postData",
    payload:postTypes
}

const reducers = (state: string[] = initialState, action:actionTypes) => {
switch (action?.type) {
    case TypesAction?.POSTDATA:
        return [...state, action.payload]
    default:
        break;
}
};

export default reducers;