import axios from "axios";

export const getDog = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("https://api.thedogapi.com/v1/images/search")
      .then((res) => {
        dispatch(fetchSuccess(res.data[0].url));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const FETCH_START = "FETCH_START";
export const fetchStart = () => {
  return { type: FETCH_START };
};

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (dog) => {
  return { type: FETCH_SUCCESS, payload: dog };
};

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
