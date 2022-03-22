import { Dispatch } from "redux";
import axios from "../../Utils/axios";
import { TypesAction, postTypes, userTypes } from "../Types";
// import { actionTypes } from "../Reducers/PostReducers";

type actionTypeUser = {
  type: "userData";
  payload: userTypes;
};

export const getActionUser = (id:number) => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await axios.get<userTypes>("users/" + id, {
        timeout: 50000,
      });
      dispatch({
        type: TypesAction?.USERDATA,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
