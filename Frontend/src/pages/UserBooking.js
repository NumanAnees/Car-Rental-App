import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from "../components/Spinner";
import moment from "moment";
const UserBooking = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);
  return (
    <DefaultLayout>
      <h3 className="text-center mt-2">All Bookings</h3>
    </DefaultLayout>
  );
};

export default UserBooking;
