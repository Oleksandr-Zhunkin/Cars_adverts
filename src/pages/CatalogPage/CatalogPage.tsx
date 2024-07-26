import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsThunk } from "../../redux/cars/operations";
import {
  selectCars,
  selectLoadBtn,
  selectLoading,
  selectPage,
} from "../../redux/cars/selectors";
import CarsList from "../../components/CarsList/CarsList";
import { AppDispatch } from "../../redux/store";
import { changePage } from "../../redux/cars/slice";
import FiltersBlock from "../../components/FiltersBlock/FiltersBlock";
import {
  selectFilteredCars,
  selectSearchBrand,
} from "../../redux/filters/selectors";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const page = useSelector(selectPage);
  const cars = useSelector(selectCars);
  const isLoadmoreBtn = useSelector(selectLoadBtn);
  const searchValue = useSelector(selectSearchBrand);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch() as AppDispatch;

  const handleChangePage = () => {
    dispatch(changePage());
    dispatch(carsThunk(page + 1));
  };

  useEffect(() => {
    dispatch(carsThunk(page));
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <FiltersBlock />
      <CarsList cars={searchValue === "" ? cars : filteredCars} />
      {isLoadmoreBtn && searchValue === "" && (
        <button
          className="block text-[#3470ff] underline font-medium text-base items-center mx-auto hover:text-[#0b44cd]"
          type="button"
          onClick={handleChangePage}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default CatalogPage;
