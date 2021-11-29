import React from "react";
import { useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";

function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  return (
    <DefaultLayout>
      <h1>home</h1>
      <h1>array is {cars.length}</h1>
    </DefaultLayout>
  );
}

export default Home;
