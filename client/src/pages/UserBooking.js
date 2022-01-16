import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from "../components/Spinner";
import moment from "moment";
import defaultcar from "../images/defaultcar.jpg";
function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <h3
        className="text-center mt-4"
        style={{
          color: "#00ffffdf",
        }}
      >
        All Bookings
      </h3>
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24} style={{ color: "darkslategray" }}>
          {user.admin
            ? bookings.map((booking) => {
                return (
                  <Row
                    gutter={16}
                    className="Userbooking bs1 mt-2 mb-2 text-left"
                    style={{
                      backgroundColor: "#00ffffdf",
                      borderRadius: "5px",
                    }}
                  >
                    <Col lg={6} sm={24}>
                      {booking.car ? (
                        <p>
                          <b>{booking.car.name}</b>
                        </p>
                      ) : (
                        <p>
                          <b>Not Available</b>
                        </p>
                      )}
                      <p>
                        User : <b>{booking.user.email}</b>
                      </p>
                      <p>
                        Total Minutes : <b>{booking.totalMins}</b>
                      </p>
                      <p>
                        Driver :
                        {booking.driverRequired ? (
                          <b> Required</b>
                        ) : (
                          <b> Not Required</b>
                        )}
                      </p>
                      <p>
                        Total amount : <b>{booking.totalAmount}</b>
                      </p>
                    </Col>

                    <Col lg={12} sm={24}>
                      <p>
                        Transaction Id : <b>{booking.transactionId}</b>
                      </p>
                      <p>
                        User Contact : <b>{booking.user.phone}</b>
                      </p>
                      <p>
                        From: <b>{booking.bookedTimeSlots.from}</b>
                      </p>
                      <p>
                        To: <b>{booking.bookedTimeSlots.to}</b>
                      </p>
                      <p>
                        Date of booking:{" "}
                        <b>{moment(booking.createdAt).format("MMM DD yyyy")}</b>
                      </p>
                    </Col>

                    <Col lg={6} sm={24} className="text-right">
                      {booking.car ? (
                        <img
                          style={{ borderRadius: 5 }}
                          src={booking.car.image}
                          height="140"
                          className="p-2"
                        />
                      ) : (
                        <img
                          style={{ borderRadius: 5 }}
                          src={defaultcar}
                          height="140"
                          className="p-2"
                        />
                      )}
                    </Col>
                  </Row>
                );
              })
            : bookings
                .filter((o) => o.user._id == user._id)
                .map((booking) => {
                  return (
                    <Row
                      gutter={16}
                      className="Userbooking bs1 mt-2 mb-2 text-left"
                      style={{
                        backgroundColor: "#00ffffdf",
                        borderRadius: "5px",
                      }}
                    >
                      <Col lg={6} sm={24}>
                        {booking.car ? (
                          <p>
                            <b>{booking.car.name}</b>
                          </p>
                        ) : (
                          <p>
                            <b>Not Available</b>
                          </p>
                        )}
                        <p>
                          User : <b>{booking.user.email}</b>
                        </p>
                        <p>
                          Total Minutes : <b>{booking.totalMins}</b>
                        </p>
                        <p>
                          Driver :
                          {booking.driverRequired ? (
                            <b> Required</b>
                          ) : (
                            <b> Not Required</b>
                          )}
                        </p>
                        <p>
                          Total amount : <b>{booking.totalAmount}</b>
                        </p>
                      </Col>

                      <Col lg={12} sm={24}>
                        <p>
                          Transaction Id : <b>{booking.transactionId}</b>
                        </p>
                        <p>
                          User Contact : <b>{booking.user.phone}</b>
                        </p>
                        <p>
                          From: <b>{booking.bookedTimeSlots.from}</b>
                        </p>
                        <p>
                          To: <b>{booking.bookedTimeSlots.to}</b>
                        </p>
                        <p>
                          Date of booking:{" "}
                          <b>
                            {moment(booking.createdAt).format("MMM DD yyyy")}
                          </b>
                        </p>
                      </Col>

                      <Col lg={6} sm={24} className="text-right">
                        {booking.car ? (
                          <img
                            style={{ borderRadius: 5 }}
                            src={booking.car.image}
                            height="140"
                            className="p-2"
                          />
                        ) : (
                          <img
                            style={{ borderRadius: 5 }}
                            src={defaultcar}
                            height="140"
                            className="p-2"
                          />
                        )}
                      </Col>
                    </Row>
                  );
                })}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserBookings;
