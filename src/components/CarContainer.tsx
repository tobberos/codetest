import React, { useEffect, useState } from "react";
import { CarSlider } from "./CarSlider";
import { CarSliderMobile } from "./CarSliderMobile";
import Car from "../interfaces/car";

export const CarContainer: React.FC = () => {
  const [data, setData] = useState<Car[]>([]);

  useEffect(() => {
    fetch("/api/cars.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <CarSlider carData={data} />
      <CarSliderMobile carData={data} />
    </>
  );
};
