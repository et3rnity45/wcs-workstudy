import axios from 'axios';
import { useEffect } from 'react';

const useWilderFetch = (dispatch) => {
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
}

export default useWilderFetch;
