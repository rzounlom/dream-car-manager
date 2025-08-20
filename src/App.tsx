// Import the CSS file that contains global styles for the entire application
import "./App.css";

import type { Car, NewCar } from "./types";

// Import all the components that make up the application
// These are the building blocks that will be composed together in the App component
import CarList from "./components/cars/CarList"; // Component that displays the list of cars
import DeleteModal from "./components/modals/DeleteModal"; // Modal for confirming car deletion
import Footer from "./components/footer/Footer"; // Footer component at the bottom of the page
import Landing from "./pages/landing/Landing"; // Landing page/hero section
import Navbar from "./components/navbar/Navbar"; // Navigation bar at the top
import NewCarModal from "./components/modals/NewCarModal"; // Modal for adding new cars
// Import the mock data that will be used as the initial state
// This is the array of car objects that we defined in the data folder
import { cars } from "./data/cars";
// Import React hooks for state management
// useState: Hook for managing component state
import { useState } from "react";

// Define the main App component
// This is the root component that serves as the entry point for the entire application
// It composes all other components together to create the complete user interface
function App() {
  // useState hook creates a state variable and a function to update it
  // carsState: array of Car objects that represents the current state of cars data
  // setCarsState: function to update the cars state (we'll use this later for adding/editing/deleting cars)
  // cars: initial value for the state (the imported cars array)
  const [carsState, setCarsState] = useState(cars);

  // State for controlling modal visibility
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [carToDelete, setCarToDelete] = useState<Car | null>(null);

  // Handler function to open the modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Handler function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handler function to open the delete modal
  const handleOpenDeleteModal = (carId: string) => {
    const car = carsState.find((c) => c.id === carId);
    if (car) {
      setCarToDelete(car);
      setShowDeleteModal(true);
    }
  };

  // Handler function to close the delete modal
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCarToDelete(null);
  };

  // Handler function to add a new car to the cars state
  // This function now accepts user inputs from the modal form
  const addCar = (newCarData: NewCar) => {
    // Create a new car object with the form data and a unique ID
    const newCar: Car = {
      id: `${Date.now()}`, // Unique identifier for this car (string format) Current timestamp
      ...newCarData,
    };

    // Use setCarsState to update the cars array
    // We use the functional update pattern to ensure we're working with the latest state
    setCarsState((prevCars) => [newCar, ...prevCars]);

    // Close the modal after adding the car
    handleCloseModal();
  };

  // Handler function to delete a car from the cars state
  // This function takes a car ID and removes that car from the array
  const deleteCar = (carId: string) => {
    // Use setCarsState to update the cars array
    // We use the functional update pattern to ensure we're working with the latest state
    setCarsState((prevCars) => {
      // Filter out the car with the matching ID
      // This creates a new array with all cars except the one to be deleted
      return prevCars.filter((car) => car.id !== carId);
    });
  };

  // Handler function to confirm car deletion
  const handleConfirmDelete = () => {
    if (carToDelete) {
      deleteCar(carToDelete.id);
    }
  };

  // Handler function to toggle the favorite status of a car
  // This function takes a car ID and flips the favorite boolean for that car
  const toggleFavorite = (carId: string) => {
    // Use setCarsState to update the cars array
    // We use the functional update pattern to ensure we're working with the latest state
    setCarsState((prevCars) => {
      // Map over the cars array and update the specific car's favorite status
      return prevCars.map((car) => {
        // If this is the car we want to toggle, flip its favorite status
        if (car.id === carId) {
          return {
            ...car, // Spread all existing car properties
            favorite: !car.favorite, // Toggle the favorite boolean (true becomes false, false becomes true)
            updatedAt: new Date().toISOString(), // Update the timestamp
          };
        }
        // Return the car unchanged if it's not the one we're toggling
        return car;
      });
    });
  };

  // The component returns JSX that defines the overall page structure
  return (
    // Main container div that wraps the entire application
    // The "page-container" class provides styling for the overall layout
    <div className="page-container">
      {/* Navigation bar component - appears at the top of every page */}
      {/* This component handles navigation and changes appearance on scroll */}
      {/* We pass the handleOpenModal function as a prop so the navbar can trigger opening the modal */}
      <Navbar onAddCar={handleOpenModal} />

      {/* Landing page component - the hero section users see first */}
      {/* This contains the main title and call-to-action button */}
      <Landing />

      {/* Car list component - displays all the cars in a grid/list format */}
      {/* We pass the carsState as a prop instead of the direct import */}
      {/* This allows the component to display the current state of cars data */}
      {/* Later, we can pass setCarsState to child components to allow them to update the cars */}
      <CarList
        cars={carsState}
        onDeleteCar={handleOpenDeleteModal}
        onToggleFavorite={toggleFavorite}
      />

      {/* Footer component - appears at the bottom of the page */}
      {/* This typically contains copyright information and links */}
      <Footer />

      {/* Add Car Modal */}
      <NewCarModal
        show={showModal}
        onHide={handleCloseModal}
        onSubmit={addCar}
      />

      {/* Delete Confirmation Modal */}
      <DeleteModal
        show={showDeleteModal}
        onHide={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        car={carToDelete}
      />
    </div>
  );
}

// Export the App component as the default export
// This makes it the main component that gets rendered when the app starts
// In index.tsx or main.tsx, this component will be rendered into the DOM
export default App;
