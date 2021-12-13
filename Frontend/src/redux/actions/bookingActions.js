import axios from "axios";
import { message } from "antd";
export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("api/bookings/bookcar", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Your car booked successfully");
    setTimeout(() => {
      window.location.href = "/userbookings";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something went wrong , please try later");
  }
};
