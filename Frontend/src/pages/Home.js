import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getAllCars } from "../redux/actions/carsAction";
import { Row, Col, Divider, DatePicker, Checkbox } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";
import Footer from "./Footer";
import HeroSection from "../components/HeroSection";

const { RangePicker } = DatePicker;

function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalCars, setTotalcars] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  useEffect(() => {
    setTotalcars(cars);
  }, [cars]);
  function setFilter(values) {
    if (values) {
      if (values.length > 1) {
        // var selectedFrom = moment(values[0], "MMM DD yyyy HH:mm");
        // var selectedTo = moment(values[1], "MMM DD yyyy HH:mm");

        var selectedFrom = moment(new Date(values[0]._d)).format(
          "MMM DD yyyy HH:mm"
        );
        var selectedTo = moment(new Date(values[1]._d)).format(
          "MMM DD yyyy HH:mm"
        );
        var temp = [];

        for (var car of cars) {
          if (car.bookedTimeSlots.length == 0) {
            temp.push(car);
          } else {
            for (var booking of car.bookedTimeSlots) {
              if (
                moment(values[0]._d).isBetween(
                  booking.from,
                  booking.to,
                  undefined,
                  "[]"
                ) ||
                moment(values[1]._d).isBetween(
                  booking.from,
                  booking.to,
                  undefined,
                  "[]"
                ) ||
                moment(booking.from).isBetween(
                  selectedFrom,
                  selectedTo,
                  undefined,
                  "[]"
                ) ||
                moment(booking.to).isBetween(
                  selectedFrom,
                  selectedTo,
                  undefined,
                  "[]"
                )
              ) {
                console.log("nomi");
              } else {
                temp.push(car);
                // return;
              }
            }
          }
        }
      } else {
        var temp = cars;
      }
    } else {
      var temp = cars;
    }
    var temp = [...new Set(temp)];
    setTotalcars(temp);
  }
  return (
    <DefaultLayout>
      <HeroSection />
      <Row className="mt-3" justify="center">
        <Col lg={20} sm={24} className="d-flex justify-content-left">
          <RangePicker
            className="RangePicker"
            showTime={{ format: "HH:mm a" }}
            format="MMM DD yyyy HH:mm"
            onChange={setFilter}
          />
        </Col>
      </Row>
      {loading == true && <Spinner />}
      <Row justify="center" gutter={[24, 16]}>
        {totalCars.map((car) => {
          return (
            <Col xl={5} lg={5} md={8} sm={12} xs={24}>
              <Link to={`/booking/${car._id}`}>
                <div className="car p-2 box-shadow2 mt-3">
                  <div>
                    <img src={car.image} alt={car.name} className="carimg" />
                  </div>
                  <div className="car-content d-flex align-items-center justify-content-between">
                    <div>
                      <p style={{ fontWeight: "bold", color: "#222f35 " }}>
                        {car.name}
                      </p>
                      <p style={{ color: "#222f35" }}>
                        Rs{car.rentPerHour} Per Hour /-
                      </p>
                    </div>
                    <div>
                      <button className="btn1 mr-2">
                        <Link to={`/booking/${car._id}`}> Book Now</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>

      <Footer />
    </DefaultLayout>
  );
}

export default Home;
