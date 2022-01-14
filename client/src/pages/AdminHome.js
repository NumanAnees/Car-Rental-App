import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { deleteCar, getAllCars } from "../redux/actions/carsAction";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import Footer from "./Footer";

function AdminHome() {
  const user = JSON.parse(localStorage.getItem("user"));
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

  return (
    <DefaultLayout>
      {user.admin ? (
        <Row justify="center" gutter={16} className="mt-2">
          <Col lg={20} sm={24}>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="mt-1 mr-2" style={{ color: "#00ffffdf" }}>
                Admin Panel
              </h3>
              <button className="btnAdd">
                <a href="/addcar">ADD CAR</a>
              </button>
            </div>
          </Col>
        </Row>
      ) : (
        <div style={{ height: "50vh" }}>
          <h1 className="errorheading">Error 404, Page not found</h1>

          <button
            className="btnerror mt-2"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go back
          </button>
        </div>
      )}

      {loading == true && <Spinner />}
      {user.admin ? (
        <Row justify="center" gutter={16}>
          {totalCars.map((car) => {
            return (
              <Col lg={5} sm={24} xs={24}>
                <div className="car p-2 bs1 mb-2">
                  <img src={car.image} className="carimg" />

                  <div className="car-content d-flex align-items-center justify-content-between">
                    <div className="text-left pl-2">
                      <p>{car.name}</p>
                      <p> Rent Per Hour {car.rentPerHour} /-</p>
                    </div>

                    <div className="mr-4">
                      <Link to={`/editcar/${car._id}`}>
                        <EditOutlined
                          className="mr-3"
                          style={{ color: "green", cursor: "pointer" }}
                        />
                      </Link>

                      <Popconfirm
                        title="Do you want to delete this car?"
                        onConfirm={() => {
                          dispatch(deleteCar({ carid: car._id }));
                        }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <DeleteOutlined
                          style={{ color: "red", cursor: "pointer" }}
                        />
                      </Popconfirm>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      ) : (
        (window.href = "/")
      )}
      <Footer />
    </DefaultLayout>
  );
}

export default AdminHome;
