import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getAllCars } from "../redux/actions/carsAction";
import { Row, Col, Divider, DatePicker, Checkbox } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
const { RangePicker } = DatePicker;

function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  return (
    <DefaultLayout>
      <Row className="mt-3" justify="center">
        <Col lg={20} sm={24} className="d-flex justify-content-left">
          <RangePicker
            className="RangePicker"
            showTime={{ format: "HH:mm a" }}
            format="MMM DD yyyy HH:mm"
            //onChange={selectTimeSlots}
          />
        </Col>
      </Row>
      {loading == true && <Spinner />}
      <Row justify="center" gutter={[24, 16]}>
        {cars.map((car) => {
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
                        ${car.rentPerHour} Per Hour /-
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
    </DefaultLayout>
  );
}

export default Home;
