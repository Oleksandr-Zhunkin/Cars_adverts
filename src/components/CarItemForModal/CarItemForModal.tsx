import { Link } from "react-router-dom";
import CloseModalBtn from "../Icons/CloseModalBtn";
import { CarForModal } from "./CarItemForModal.types";

const CarItemForModal = ({ car, handleCloseModal }: CarForModal) => {
  return (
    <div className=" relative bg-white rounded-3xl p-10 h-[100%]">
      <button className="absolute top-4 right-4 " onClick={handleCloseModal}>
        <CloseModalBtn />
      </button>
      <img
        className=" rounded-[14px] h-[248px] w-[100%] object-cover mb-[14px]"
        src={car?.img}
        alt={car?.model}
      />
      <div className="w-[277px] mb-[14px]">
        <h3 className=" font-medium text-[18px] leading-[1.33rem] mb-2 ">
          {car?.make} <span className="text-[#3470ff]">{car?.model}</span>,{" "}
          {car?.year}
        </h3>
        <p className="text-[12px] leading-6 text-[#121417] text-opacity-50">
          {car?.address.split(",")[1]} | {car?.address.split(",")[2]} | Id:
          {car?.id} | Year:{car?.year} | Type:{car?.type}
        </p>
        <p className="text-[12px] leading-6 text-[#121417] text-opacity-50">
          Fuel Consumption:{car?.fuelConsumption} | Engine Size:
          {car?.engineSize}
        </p>
      </div>
      <p className=" font-normal text-[14px] leading-[1.43rem] mb-6">
        {car?.description}
      </p>
      <div>
        <h4 className=" font-medium text-[14px] leading-[1.43rem] mb-2">
          Accessories and functionalities:
        </h4>
        <p className="text-[12px] leading-6 text-[#121417] text-opacity-50">
          {car?.accessories[0]} | {car?.accessories[1]} | {car?.accessories[2]}
        </p>
        <p className="text-[12px] leading-6 text-[#121417] text-opacity-50">
          {car?.functionalities[0]} | {car?.functionalities[1]} |{" "}
          {car?.functionalities[2]}
        </p>
      </div>
      <div>
        <h4 className=" font-medium text-[14px] leading-[1.43rem] mb-2">
          Rental Conditions:
        </h4>
        <ul className="flex flex-wrap gap-2 mb-6">
          <li className="bg-[#f9f9f9] py-[7px] px-[14px] font-normal text-[12px] leading-6 text-[#363535] tracking-tighter rounded-[35px]  ">
            {car?.rentalConditions
              .split("\n")[0]
              .split(" ")
              .splice(0, 2)
              .join(" ")}{" "}
            <span className="text-[#3470ff] font-semibold">
              {car?.rentalConditions.split("\n")[0].split(" ").splice(-1, 1)}
            </span>
          </li>
          <li className="bg-[#f9f9f9] py-[7px] px-[14px] font-normal text-[12px] leading-6 text-[#363535] tracking-tighter rounded-[35px] ">
            {car?.rentalConditions.split("\n")[1]}
          </li>
          <li className="bg-[#f9f9f9] py-[7px] px-[14px] font-normal text-[12px] leading-6 text-[#363535] tracking-tighter rounded-[35px] ">
            {car?.rentalConditions.split("\n")[2]}
          </li>
          <li className="bg-[#f9f9f9] py-[7px] px-[14px] font-normal text-[12px] leading-6 text-[#363535] tracking-tighter rounded-[35px] ">
            Mileage:{" "}
            <span className="text-[#3470ff] font-semibold">
              {car?.mileage.toString().slice(0, 1)},
              {car?.mileage.toString().slice(1)}
            </span>{" "}
          </li>
          <li className="bg-[#f9f9f9] py-[7px] px-[14px] font-normal text-[12px] leading-6 text-[#363535] tracking-tighter rounded-[35px] ">
            Price:{" "}
            <span className="text-[#3470ff] font-semibold">
              {car?.rentalPrice}
            </span>
          </li>
        </ul>
        <Link to="tel:+380730000000">
          <button className=" bg-[#3470ff] py-3 px-[50px] text-white rounded-xl flex items-center justify-center">
            Rental car
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarItemForModal;
