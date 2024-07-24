import { MouseEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsThunk } from "../../redux/cars/operations";
import {
  selectCars,
  selectLoadBtn,
  selectPage,
} from "../../redux/cars/selectors";
import CarsList from "../../components/CarsList/CarsList";
import { AppDispatch } from "../../redux/store";
import { number } from "prop-types";
import { changePage } from "../../redux/cars/slice";

const CatalogPage = () => {
  const page = useSelector(selectPage);
  const cars = useSelector(selectCars);
  const isLoadmoreBtn = useSelector(selectLoadBtn);

  const dispatch = useDispatch() as AppDispatch;

  const handleChangePage = () => {
    dispatch(changePage());
    dispatch(carsThunk(page + 1));
  };

  useEffect(() => {
    dispatch(carsThunk(page));
  }, []);
  return (
    <>
      <CarsList cars={cars} />
      {isLoadmoreBtn && (
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
