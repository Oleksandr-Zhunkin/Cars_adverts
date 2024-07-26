import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { selectBrands, selectPrices } from "../../redux/filters/selectors";
import { useEffect } from "react";
import { filtersDataThunk } from "../../redux/filters/operations";
import { AppDispatch } from "../../redux/store";
import { FormData } from "./FiltersBlock.types";
import {
  searchForBrand,
  searchForMaxRun,
  searchForMinRun,
  searchForPrice,
} from "../../redux/filters/slice";
import { carsThunk } from "../../redux/cars/operations";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backdropFilter: "",
    outline: "none",
    "&:hover": {
      outline: "none",
    },
    border: "none",
    background: "#f7f7fb",
    borderRadius: "14px",
    color: "#121417",
    minWidth: "100%",
    height: "48px",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#121417",
    lineHeight: "1.11",
    fontWeight: "500",
    fontSize: "18px",
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: "0 6px",
    color: "#121417",
    lineHeight: "1.11",
    fontWeight: "500",
    fontSize: "18px",
  }),
  input: (provided: any) => ({
    ...provided,
    margin: "0",
    outline: "none",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    height: "",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    color: "#121417",
  }),
  menu: (provided: any) => ({
    ...provided,
    background: "#fff",
    borderRadius: "14px",
    backdropFilter: "blur(100px)",
    scrollBehavior: "smooth",
    scrollbarWidth: "thin",
    scrollbarColor: "#BFB4DD",
    scrollbarHeight: "130px",
    padding: "8px",
    height: "272px",
    overflow: "hidden",
  }),
  menuList: (provided: any) => ({
    ...provided,
    "::-webkit-scrollbar": {
      width: "8px",
      minHeight: "130px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "rgba(18, 20, 23, 0.2)",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "transparent",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.25",
    color: "rgba(18, 20, 23, 0.2)",
    "&:hover": {
      color: "#121417",
    },
  }),
};

const FiltersBlock = () => {
  const { register, handleSubmit, reset, control } = useForm<FormData>();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(filtersDataThunk());
  }, []);

  const selectedBrands = useSelector(selectBrands);
  const selectedPrices = useSelector(selectPrices);

  const brands: any = selectedBrands.toSorted().map((brand) => {
    return {
      value: brand,
      label: brand,
    };
  });

  const prices: any = selectedPrices
    .toSorted((a, b) => a - b)
    .map((price) => {
      return {
        value: price.toString(),
        label: price,
      };
    });

  const onSubmit = (data: any): void => {
    console.log(data);

    if (
      data.carBrand === "" &&
      data.price === "" &&
      data.minRun === "" &&
      data.maxRun === ""
    ) {
      dispatch(carsThunk(1));
    }

    dispatch(searchForBrand(data.carBrand?.value));
    dispatch(searchForPrice(data.price?.value));
    dispatch(searchForMinRun(data.minRun));
    dispatch(searchForMaxRun(data.maxRun));
    reset();
  };

  return (
    <div className="mb-[50px] ">
      <form
        className="flex justify-center items-end w-[100%] gap-[18px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-[224px]">
          <label
            htmlFor="carBrand"
            className=" font-medium text-[14px] leading-[1.3rem] text-[#8a8a89] mb-2"
          >
            Car brand
          </label>
          <Controller
            name="carBrand"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={brands}
                styles={customStyles}
                placeholder="Enter the text"
              />
            )}
          />
        </div>
        <div className="flex flex-col w-[125px]">
          <label
            htmlFor="price"
            className=" font-medium text-[14px] leading-[1.3rem] text-[#8a8a89] mb-2"
          >
            Price/ 1 hour
          </label>
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={prices}
                value={field.value}
                styles={customStyles}
                placeholder={`To ${field.value}$`}
              />
            )}
          />
        </div>
        <div>
          <label className=" font-medium text-[14px] leading-[1.3rem] text-[#8a8a89]">
            Сar mileage / km
          </label>
          <div className="flex gap-0 mt-2">
            <div className="w-[160px] relative">
              <input
                type="number"
                className="bg-[#f7f7fb] w-[100%] h-[48px] outline-none rounded-tl-[14px] rounded-bl-[14px] border-r pl-[70px] leading-[1.11rem] font-medium text-[18px]"
                {...register("minRun")}
              />
              <p className=" absolute top-[50%] translate-y-[-50%] left-6 text-[#121417] leading-[1.11rem] font-medium text-[18px]">
                From
              </p>
            </div>
            <div className="w-[160px] relative">
              <input
                type="number"
                className="bg-[#f7f7fb] w-[100%] h-[48px] outline-none rounded-tr-[14px] rounded-br-[14px] border-l pl-[45px] leading-[1.11rem] font-medium text-[18px]"
                {...register("maxRun")}
              />
              <p className=" absolute top-[50%] translate-y-[-50%] left-6 text-[#121417] leading-[1.11rem] font-medium text-[18px]">
                To
              </p>
            </div>
          </div>
        </div>

        <button
          className=" px-[44px] py-[14px] bg-[#3470ff] rounded-xl font-semibold text-14px leading-[1.43rem] text-white h-[48px] flex justify-center items-center hover:bg-[#0b44cd]"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default FiltersBlock;
