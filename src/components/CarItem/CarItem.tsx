import { PropCar } from "./CarItem.types";

const CarItem = ({ car }: PropCar) => {
  return (
    <li key={car.id}>
      <img src={car.img} alt={car.description} />
      <div>
        <p>
          {car.make} {car.model}, {car.year}
        </p>
        <p>{car.rentalPrice}</p>
      </div>
      <div>
        <p>
          {car.address.split(",")[1]} |{car.address.split(",")[2]} |{" "}
          {car.rentalCompany} | {car.type} | {car.model} | {car.id} |{" "}
          {car.accessories[0]}
        </p>
      </div>
      <button>Learn more</button>
    </li>
  );
};

export default CarItem;
