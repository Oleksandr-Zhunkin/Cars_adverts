import { useSelector } from "react-redux";
import CarList from "../../components/CarsList/CarsList";
import { selectFavoriteCars } from "../../redux/cars/selectors";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  return (
    <>
      <CarList cars={favoriteCars} />
    </>
  );
};

export default FavoritesPage;
