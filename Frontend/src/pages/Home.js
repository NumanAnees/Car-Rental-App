import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getAllCars } from "../redux/actions/carsAction";
import { Button, Row, Col } from "antd";
import Spinner from "../components/Spinner";

function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  return (
    <DefaultLayout>
      {loading == true && <Spinner />}
      <Row justify="center" gutter={[24, 16]} className="mt-5">
        {cars.map((car) => {
          return (
            <Col xl={5} lg={5} md={8} sm={12} xs={24}>
              <div className="car p-2 box-shadow2 mt-3">
                <div>
                  <img src={car.image} alt={car.name} className="carimg" />
                </div>
                <div className="car-content d-flex align-items-center justify-content-between">
                  <div>
                    <p style={{ fontWeight: "bold" }}>{car.name}</p>
                    <p>{car.rentPerHour} Rent Per Hour /-</p>
                  </div>
                  <div>
                    <button className="btn1 mr-2">Book Now</button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
}

export default Home;
