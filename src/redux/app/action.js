import * as types from "./actionTypes";
import axios from "axios";

export const addBreakfast = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_BREAKFAST_REQUEST });
  return axios
    .post("https://fitmyway-server.onrender.com/breakfast/create", payload)
    .then((res) =>
      dispatch({ type: types.ADD_BREAKFAST_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.ADD_BREAKFAST_FAILURE, payload: err.response })
    );
};

export const getBreakfast = (payload) => (dispatch) => {
  dispatch({ type: types.GET_BREAKFAST_REQUEST });
  return axios
    .get("https://fitmyway-server.onrender.com/breakfast")
    .then((res) =>
      dispatch({ type: types.GET_BREAKFAST_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_BREAKFAST_FAILURE }));
};

export const deleteBreakfast = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_BREAKFAST_REQUEST });
  return axios
    .delete(`https://fitmyway-server.onrender.com/breakfast/${payload}`)
    .then((res) =>
      dispatch({ type: types.DELETE_BREAKFAST_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.DELETE_BREAKFAST_FAILURE }));
};

export const addLunch = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_LUNCH_REQUEST });
  return axios
    .post("https://fitmyway-server.onrender.com/lunch/create", payload)
    .then((res) =>
      dispatch({ type: types.ADD_LUNCH_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.ADD_LUNCH_FAILURE, payload: err.response })
    );
};

export const getLunch = (payload) => (dispatch) => {
  dispatch({ type: types.GET_LUNCH_REQUEST });
  return axios
    .get("https://fitmyway-server.onrender.com/lunch")
    .then((res) =>
      dispatch({ type: types.GET_LUNCH_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_LUNCH_FAILURE }));
};

export const deleteLunch = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_LUNCH_REQUEST });
  return axios
    .delete(`https://fitmyway-server.onrender.com/lunch/${payload}`)
    .then((res) =>
      dispatch({ type: types.DELETE_LUNCH_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.DELETE_LUNCH_FAILURE }));
};

export const addDinner = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_DINNER_REQUEST });
  return axios
    .post("https://fitmyway-server.onrender.com/dinner/create", payload)
    .then((res) =>
      dispatch({ type: types.ADD_DINNER_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.ADD_DINNER_FAILURE, payload: err.response })
    );
};

export const getDinner = (payload) => (dispatch) => {
  dispatch({ type: types.GET_DINNER_REQUEST });
  return axios
    .get("https://fitmyway-server.onrender.com/dinner")
    .then((res) =>
      dispatch({ type: types.GET_DINNER_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_DINNER_FAILURE }));
};

export const deleteDinner = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_DINNER_REQUEST });
  return axios
    .delete(`https://fitmyway-server.onrender.com/dinner/${payload}`)
    .then((res) =>
      dispatch({ type: types.DELETE_DINNER_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.DELETE_DINNER_FAILURE }));
};

export const addSnack = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_SNACK_REQUEST });
  return axios
    .post("https://fitmyway-server.onrender.com/snack/create", payload)
    .then((res) =>
      dispatch({ type: types.ADD_SNACK_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.ADD_SNACK_FAILURE, payload: err.response })
    );
};

export const getSnack = (payload) => (dispatch) => {
  dispatch({ type: types.GET_SNACK_REQUEST });
  return axios
    .get("https://fitmyway-server.onrender.com/snack")
    .then((res) =>
      dispatch({ type: types.GET_SNACK_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_SNACK_FAILURE }));
};

export const deleteSnack = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_SNACK_REQUEST });
  return axios
    .delete(`https://fitmyway-server.onrender.com/snack/${payload}`)
    .then((res) =>
      dispatch({ type: types.DELETE_SNACK_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.DELETE_SNACK_FAILURE }));
};
