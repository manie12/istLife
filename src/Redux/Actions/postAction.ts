import { Dispatch } from "redux";
import axios from "../../Utils/axios";
import { TypesAction, postTypes } from "../Types";
import { actionTypes } from "../Reducers/PostReducers";
import { AnySoaRecord } from "dns";

export const getActionPost = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await axios.get<postTypes>("/posts",{
          timeout:50000
      });
      dispatch({
        type: TypesAction?.POSTDATA,
        payload: data,
      });
    } catch (error) {
        console.log(error)
    }
  };
};
