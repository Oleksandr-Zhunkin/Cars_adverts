import TruncatedParagraph from "../TruncatedParagraph/TruncatedParagraph";
import { PropCar } from "./CarItem.types";
import FavoriteIcon from "../Icons/FavoriteIcon";
import ActiveFavoriteIcon from "../Icons/ActiveFavoriteIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/cars/selectors";
import { useState } from "react";
import {
  addSelectedCar,
  addToFavorite,
  removeFromFavorite,
} from "../../redux/cars/slice";

const CarItem = ({ car, setIsOpen }: PropCar) => {
  const favoriteCars = useSelector(selectFavoriteCars);

  const [isFavorite, setIsFavorite] = useState(() => {
    return favoriteCars.some((item) => item.id === car.id);
  });

  const dispatch = useDispatch();

  const toggleFavoriteCar = () => {
    if (isFavorite === false) {
      setIsFavorite(true);
      dispatch(addToFavorite(car));
    }
    if (isFavorite === true) {
      setIsFavorite(false);
      dispatch(removeFromFavorite(car.id));
    }
  };

  const handleOpenModal = () => {
    dispatch(addSelectedCar(car));
    setIsOpen(true);
  };

  return (
    <li className=" relative">
      <img
        className=" w-[100%] h-[268px] object-cover rounded-[14px] mb-[14px]"
        src={car.img}
        alt={car.description}
      />
      <div className="flex justify-between mb-2 text-[16px] font-medium leading-6 ">
        <h3>
          {car.make} <span className="text-[#3470ff]">{car.model}</span>,{" "}
          {car.year}
        </h3>
        <p>{car.rentalPrice}</p>
      </div>
      <div className=" text-[12px] leading-6 text-[#121417] text-opacity-50 mb-7">
        <TruncatedParagraph
          text={`${car.address.split(",")[1]} | ${
            car.address.split(",")[2]
          } | ${car.rentalCompany} ${
            !car.rentalCompany.includes("Econommy") && " | Premium"
          }`}
          maxLength={50}
          symbol="|"
        />
        <TruncatedParagraph
          text={`${car.type} | ${car.model} | ${car.id} | ${car.accessories[1]
            .split(" ")
            .slice(0, 2)
            .join(" ")}`}
          maxLength={60}
          symbol="|"
        />
      </div>
      <button
        onClick={handleOpenModal}
        type="button"
        className="flex py-3 bg-[#3470ff] w-[100%] justify-center items-center text-white rounded-xl text-[14px] font-semibold leading-[1.43rem] hover:bg-[#0b44cd]"
      >
        Learn more
      </button>
      <div
        className="w-5 h-5 bg-transparent flex justify-center items-center absolute top-[14px] right-[14px]"
        onClick={toggleFavoriteCar}
      >
        {favoriteCars.find((item) => item.id === car.id) ? (
          <button>
            <ActiveFavoriteIcon />
          </button>
        ) : (
          <button>
            <FavoriteIcon />
          </button>
        )}
      </div>
    </li>
  );
};

export default CarItem;
