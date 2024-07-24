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
