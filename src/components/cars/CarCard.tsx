// Import the CSS file that contains styles for this component
import "./CarCard.css";

// Import the Car type definition from our types file
// This ensures type safety and helps catch errors at compile time
import type { Car } from "../../types";
// Import heart icons from react-icons library
// IoMdHeartEmpty: Empty heart icon for non-favorite cars
// TiHeartFullOutline: Filled heart icon for favorite cars
import { IoMdHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";

// Define the props interface for this component
// This tells TypeScript what props this component expects to receive
// In this case, it expects a 'car' prop of type Car and handler functions
interface CarCardProps {
  car: Car;
  onDeleteCar: (carId: string) => void; // Function to handle deleting this car
  onToggleFavorite: (carId: string) => void; // Function to handle toggling favorite status
}

// Define the CarCard component using React.FC (Function Component) type
// React.FC is a TypeScript type that indicates this is a React functional component
// The generic <CarCardProps> tells TypeScript what props this component accepts
const CarCard: React.FC<CarCardProps> = ({
  // Destructure the car object directly in the function parameters
  // This is a common React pattern that extracts specific properties from the props
  // We're extracting: year, make, model, description, imageUrl, favorite, and id
  car: { year, make, model, description, imageUrl, favorite, id },
  onDeleteCar, // Extract the delete handler function
  onToggleFavorite, // Extract the toggle favorite handler function
}) => {
  // The component returns JSX (JavaScript XML) which describes what the UI should look like
  return (
    // Main container div with CSS class for styling
    <div className="car-card">
      {/* Favorite icon section - shows heart icon based on favorite status */}
      <div className="favorite-icon">
        <div className="favorite-icon">
          {/* Conditional rendering using ternary operator */}
          {/* If favorite is true, show filled heart; otherwise show empty heart */}
          {/* This is a common React pattern for conditional UI elements */}
          {/* Clicking the heart icon toggles the favorite status */}
          {favorite ? (
            <TiHeartFullOutline onClick={() => onToggleFavorite(id)} />
          ) : (
            <IoMdHeartEmpty onClick={() => onToggleFavorite(id)} />
          )}
        </div>
      </div>

      {/* Car image section */}
      <div className="car-img">
        {/* Image element with src from the car data */}
        {/* alt attribute provides accessibility description for screen readers */}
        {/* Template literal syntax creates a descriptive alt text */}
        <img src={imageUrl} alt={`${year} ${make} ${model}`} />
      </div>

      {/* Car details section containing title and description */}
      <div className="car-details">
        {/* Car title using template literal to combine year, make, and model */}
        <h3>
          {year} {make} {model}
        </h3>

        {/* Car description with text truncation */}
        <p>
          {/* Optional chaining (?.) safely accesses description property */}
          {/* slice(0, 500) limits description to first 500 characters */}
          {/* This prevents very long descriptions from breaking the layout */}
          {description?.slice(0, 500)}...
          {/* "View More" link styled as a span */}
          <span className="view-more">View More</span>
        </p>
      </div>

      {/* Action buttons section */}
      <div className="car-footer">
        {/* Edit button - currently non-functional (would need onClick handler) */}
        <button className="edit-btn">Edit</button>

        {/* Delete button - calls the onDeleteCar function with this car's ID */}
        <button
          className="delete-btn"
          onClick={() => onDeleteCar(id)} // Call the delete handler with this car's ID
        >
          Delete
        </button>
      </div>
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default CarCard;
