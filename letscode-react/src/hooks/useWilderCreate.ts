import { ChangeEvent, FormEvent, useContext, useState } from "react";
import axios from "axios";
import useDelay from "./useDelay";
import AppContext from "../context/AppContext";

type CreateWilderReturn = {
  inputCity: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  inputName: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  formSubmission: (e: FormEvent) => Promise<void>;
  loading: boolean;
  delayed: boolean;
  error: string;
};

function useWilderCreate(): CreateWilderReturn {
  const dispatch = useContext(AppContext);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [delayed, setDelayed] = useDelay(500);

  const formSubmission = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setDelayed(true);
      setLoading(true);
      const result = await axios.post("http://localhost:5000/api/wilders", {
        name,
        city,
      });
      setLoading(false);
      if (result.data.success) {
        setError("");
        if (dispatch) {
          dispatch({
            type: "WILDER_ADDED",
            newWilder: result.data.result,
          });
        }
      }
    } catch (err) {
      setLoading(false);
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError(err.message);
      }
    }
  };

  return {
    inputName: {
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    inputCity: {
      value: city,
      onChange: (e) => setCity(e.target.value),
    },
    formSubmission,
    loading,
    delayed,
    error,
  };
}

export default useWilderCreate;
