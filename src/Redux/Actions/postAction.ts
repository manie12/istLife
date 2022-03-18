import { Dispatch } from "redux";
import axios from "../../Utils/axios";
import { TypesAction, postTypes } from "../Types";
// import { actionTypes } from "../Reducers/PostReducers";

export const getActionPost = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await axios.get<postTypes>("posts/",{
          timeout:50000
      });
      console.log(data)
      dispatch({
        type: TypesAction?.POSTDATA,
        payload: data,
      });
    } catch (error) {
        console.log(error)
    }
  };
};
