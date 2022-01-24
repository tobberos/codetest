import React from "react";
import { Text, Link, Block } from "vcc-ui";
import Car from "../interfaces/car";

export const CarCard: React.FC<{ carData: Car }> = (props) => {
  return (
    <Block className="carcard" as="div" extend={{ margin: "20px" }}>
      <Text extend={{ color: "grey" }}>{props.carData.bodyType}</Text>
      <Text extend={{ color: "black" }}>
        {props.carData.modelName}{" "}
        <Text extend={{ color: "grey" }}>{props.carData.modelType}</Text>
      </Text>
      <img
        src={props.carData.imageUrl}
        alt={props.carData.modelName}
        style={{ width: "100%", marginTop: "10px" }}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "10px",
          gap: "30px",
        }}
      >
        <Link href={`/learn/${props.carData.id}`} arrow="right">
          Learn
        </Link>
        <Link href={`/shop/${props.carData.id}`} arrow="right">
          Shop
        </Link>
      </div>
    </Block>
  );
};
