import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
import { message } from "antd";

function Register() {
  const dispatch = useDispatch();

  function onFinish(values) {
    if (values.password.length >= 8 && values.password.length < 23) {
      dispatch(userRegister(values));
      console.log(values);
    } else if (values.password.length > 24) {
      message.error("Password is very lengthy to remember");
    } else {
      message.error("Password is weak");
    }
    if (!(values.phone.length >= 11 && values.phone.length < 13)) {
      message.error("Invalid Phone Number");
    }
  }
  return (
    <div className="login">
      <Row gutter={8}>
        <Col lg={8} className="text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1 className="login-heading">Register</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <input type="text" placeholder="Enter you username..." />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email Address"
              rules={[{ required: true }]}
            >
              <input type="email" placeholder="Enter your email address..." />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <input type="password" placeholder="Enter your password..." />
            </Form.Item>
            <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
              <input type="tel" placeholder="Enter your phone number..." />
            </Form.Item>
            <button className="btn2 mt-2 mb-3">Register</button>
            <br />
            <Link to="/Login">Click here to Login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
