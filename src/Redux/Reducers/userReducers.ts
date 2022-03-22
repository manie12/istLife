import { TypesAction,userTypes} from "../Types";

 type actionTypeUser = {
  type: "userData";
  payload: userTypes;
};

const reducers = (state: string[] = [], action: actionTypeUser) => {
  switch (action?.type) {
    case TypesAction?.USERDATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducers;
