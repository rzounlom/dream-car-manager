import "./CarList.css";

import type { Car } from "../../types";
import CarCard from "./CarCard";
import { type FC } from "react";

type CarListProps = {
  cars: Car[];
};

const CarList: FC<CarListProps> = ({ cars }) => {
  return (
    <div id="cars" className="car-list">
      {cars?.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
