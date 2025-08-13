// Import the CSS file that contains styles for this component
import "./CarList.css";

// Import the Car type definition for type safety
import type { Car } from "../../types";

// Import the CarCard component that we'll use to display individual cars
// This is an example of component composition - using one component inside another
import CarCard from "./CarCard";

// Import FC (Function Component) type from React
// FC is a TypeScript utility type that helps define React functional components
import { type FC } from "react";

// Define the props interface for this component
// This component expects an array of Car objects and handler functions
// The 'cars' prop will be passed down from a parent component
// The 'onDeleteCar' prop is a function that handles deleting cars by their ID
// The 'onToggleFavorite' prop is a function that handles toggling favorite status by car ID
type CarListProps = {
  cars: Car[];
  onDeleteCar: (carId: string) => void;
  onToggleFavorite: (carId: string) => void;
};

// Define the CarList component
// This component takes an array of cars and renders each one as a CarCard
// It also passes down the delete and toggle favorite handlers to each CarCard
const CarList: FC<CarListProps> = ({ cars, onDeleteCar, onToggleFavorite }) => {
  // The component returns JSX that renders a container with all the car cards
  return (
    // Main container with id and CSS class for styling
    // The id="cars" can be used for navigation or CSS targeting
    <div id="cars" className="car-list">
      {/* Map over the cars array to render each car as a CarCard component */}
      {/* The ?. is optional chaining - it safely handles cases where cars might be undefined */}
      {/* map() is a JavaScript array method that transforms each item in the array */}
      {cars?.map((car) => (
        // CarCard component for each individual car
        // key={car.id} is required by React when rendering lists
        // React uses the key to efficiently update the DOM when the list changes
        // Without a key, React would have to re-render the entire list on every change
        // We pass the onDeleteCar and onToggleFavorite functions to each CarCard
        <CarCard
          key={car.id}
          car={car}
          onDeleteCar={onDeleteCar}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default CarList;
