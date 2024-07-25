import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select, { GroupBase, OptionsOrGroups } from "react-select";
import { selectBrands, selectPrices } from "../../redux/filters/selectors";
import { useEffect } from "react";
import { filtersDataThunk } from "../../redux/filters/operations";
import { AppDispatch } from "../../redux/store";
import { FormData } from "./FiltersBlock.types";
import { searchForBrand } from "../../redux/filters/slice";

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
    // padding: "14px 18px",
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
  }),
  input: (provided: any) => ({
    ...provided,
    margin: "0",
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

  const brands: any = selectedBrands.map((brand) => {
    return {
      value: brand,
      label: brand,
    };
  });

  const onSubmit = (data: any): void => {
    dispatch(searchForBrand(data.carBrand.value));
    console.log(data.carBrand.value);
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
            First Name
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
        <div className="flex flex-col">
          <label
            htmlFor="price"
            className=" font-medium text-[14px] leading-[1.3rem] text-[#8a8a89] mb-2"
          >
            First Name
          </label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={brands}
                styles={customStyles}
                placeholder="To $"
              />
            )}
          />
        </div>

        <button
          className=" px-[44px] py-[14px] bg-[#3470ff] rounded-xl font-semibold text-14px leading-[1.43rem] text-white h-[48px] flex justify-center items-center"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default FiltersBlock;
