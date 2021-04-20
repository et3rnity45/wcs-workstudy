import axios from "axios";
import { Dispatch, useEffect } from "react";
import { Action } from "../reducers/appReducer";

const useWilderFetch = (dispatch: Dispatch<Action>): void => {
  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios("http://localhost:5000/api/wilders");
        dispatch({
          type: "WILDERS_FETCH_SUCCESS",
          wilders: result.data.result,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchWilders();
  }, [dispatch]);
};

export default useWilderFetch;
