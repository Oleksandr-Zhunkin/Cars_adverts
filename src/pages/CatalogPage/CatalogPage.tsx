import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsThunk } from "../../redux/cars/operations";
import { selectCars, selectPage } from "../../redux/cars/selectors";
import CarsList from "../../components/CarsList/CarsList";
import { AppDispatch } from "../../redux/store";
import { number } from "prop-types";

const CatalogPage = () => {
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);

  const dispatch = useDispatch() as AppDispatch;

  useEffect(() => {
    dispatch(carsThunk(page));
  }, []);
  return (
    <>
      <CarsList cars={cars} />
      <button>Load more</button>
    </>
  );
};

export default CatalogPage;
