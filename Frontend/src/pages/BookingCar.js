import React, { useEffect, useState } from "react";
import { Row, Col, Divider, DatePicker } from "antd";
import { DollarCircleFilled } from "@ant-design/icons";
import DefaultLayout from "../components/DefaultLayout";
import { getAllCars } from "../redux/actions/carsAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";
const { RangePicker } = DatePicker;

function BookingCar() {
  const { id } = useParams();
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id == id));
    }
  }, [cars]);
  function selectTimeSlots(values) {
    if (values) {
      setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
      setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));
      setTotalHours(values[1].diff(values[0], "hours"));
    } else {
      setTotalHours(0);
    }
  }
  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24}>
          <img src={car.image} alt={car.name} className="carimg2 bs2" />
        </Col>
        <Col
          lg={10}
          sm={24}
          xs={24}
          style={{ marginLeft: "65px", bottom: "10px" }}
        >
          <div
            style={{
              // backgroundColor: "#24ffffc9",
              backgroundColor: "#28d8d8",
              borderRadius: "10px",
              maxHeight: "400px",
              width: "90%",
            }}
          >
            <Divider>
              <h4 style={{ color: "white" }}>DETAILS</h4>
            </Divider>
            <div
              style={{
                display: "flex",
                marginLeft: "0.5px",
                marginRight: "0.5px",
              }}
            >
              <div style={{ margin: "4px" }} className="car-headings">
                <p>
                  <span className="car-data">Model</span>
                </p>
                <p>
                  <span className="car-data">
                    {/* <DollarCircleFilled /> */}
                    Rent
                  </span>
                </p>
                <p>
                  <span className="car-data">Fuel Type</span>
                </p>
                <p>
                  <span className="car-data">Max Persons</span>
                </p>
              </div>
              <div className="car-headData">
                <p>
                  <span className="car-data2">{car.name}</span>
                </p>
                <p>
                  <span className="car-data2">{car.rentPerHour} Rs/-</span>
                </p>
                <p>
                  <span className="car-data2">{car.fuelType}</span>
                </p>
                <p>
                  <span className="car-data2">{car.capacity}</span>
                </p>
              </div>
            </div>
            <Divider>
              <h4 style={{ color: "white" }}>SELECT TIME SLOTS</h4>
            </Divider>
            <div>
              <RangePicker
                className="RangePicker"
                showTime={{ format: "HH:mm" }}
                format="MMM DD yyyy HH:mm"
                onChange={selectTimeSlots}
              />

              <div>
                <p>{totalHours}</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default BookingCar;
