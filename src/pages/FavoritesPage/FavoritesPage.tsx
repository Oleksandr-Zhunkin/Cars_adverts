import { useSelector } from "react-redux";
import CarList from "../../components/CarsList/CarsList";
import { selectFavoriteCars } from "../../redux/cars/selectors";
import FiltersBlock from "../../components/FiltersBlock/FiltersBlock";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  return (
    <>
      <CarList cars={favoriteCars} />
    </>
  );
};

export default FavoritesPage;
