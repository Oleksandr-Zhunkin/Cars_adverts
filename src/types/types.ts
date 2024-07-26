export interface Car {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
}

export interface CarsState {
  cars: Car[];
  favorite: Car[];
  page: number;
  selectedCar: Car | null;
  isLoadBtn: boolean;
  isLoading: boolean;
  isError: boolean;
}

export interface FiltersState {
  filters: {
    brand: string;
    pricePerHour: null | number;
    minRun: null | number;
    maxRun: null | number;
  };
  allCars: Car[];
  brands: string[];
  prices: number[];
}

export interface Brand {
  id: number;
  make: string;
}
