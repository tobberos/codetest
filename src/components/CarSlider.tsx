import React, { useState } from "react";
import { CarCard } from "./CarCard";
import { Block, Icon, Flex } from "vcc-ui";
import Car from "../interfaces/car";

export const CarSlider: React.FC<{ carData: Car[] }> = (props) => {
  const [sliceIndexes, setSliceIndexes] = useState({ from: 0, to: 4 });

  const filteredData = [
    ...props.carData.slice(sliceIndexes.from, sliceIndexes.to),
  ];

  const nextSlideHandler = () => {
    if (sliceIndexes.to > props.carData.length - 1) return;
    setSliceIndexes((prevIndexes) => {
      return {
        ...prevIndexes,
        from: prevIndexes.from + 1,
        to: prevIndexes.to + 1,
      };
    });
  };

  const previousSlideHandler = () => {
    if (sliceIndexes.from <= 0) return;
    setSliceIndexes((prevIndexes) => {
      return {
        ...prevIndexes,
        from: prevIndexes.from - 1,
        to: prevIndexes.to - 1,
      };
    });
  };

  return (
    <div className="carslidercontainer">
      <Block
        className="slider"
        extend={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Flex
          extend={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {filteredData.length > 0 &&
            filteredData.map((car) => <CarCard key={car.id} carData={car} />)}
        </Flex>
        <Flex
          extend={{
            marginTop: "15px",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <div
            onClick={() => previousSlideHandler()}
            style={{ cursor: "pointer" }}
          >
            <Icon type="media-previous-48" />
          </div>
          <div
            onClick={() => nextSlideHandler()}
            style={{ cursor: "pointer", marginRight: "20px" }}
          >
            <Icon type="media-next-48" />
          </div>
        </Flex>
      </Block>
    </div>
  );
};
