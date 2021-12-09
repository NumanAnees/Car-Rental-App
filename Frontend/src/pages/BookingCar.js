import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { getAllCars } from "../redux/actions/carsAction";
import { useSelector, useDispatch } from "react-redux";

function BookingCar(data) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  return (
    <DefaultLayout>
      <h1>Booking car page</h1>
      <h2>car id = {data.params.carId}</h2>
    </DefaultLayout>
  );
}

export default BookingCar;
