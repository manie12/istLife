import { TypesAction, postTypes } from "../Types";


export type actionTypes = {
  type: "postData";
  payload: postTypes;
};

const reducers = (state: string[] = [], action: actionTypes) => {
  switch (action?.type) {
    case TypesAction?.POSTDATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducers;
