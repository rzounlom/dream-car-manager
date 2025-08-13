// Import the CSS file that contains global styles for the entire application
import "./App.css";

import type { Car } from "./types";
// Import all the components that make up the application
// These are the building blocks that will be composed together in the App component
import CarList from "./components/cars/CarList"; // Component that displays the list of cars
import Footer from "./components/footer/Footer"; // Footer component at the bottom of the page
import Landing from "./pages/landing/Landing"; // Landing page/hero section
import Navbar from "./components/navbar/Navbar"; // Navigation bar at the top
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

  // Handler function to add a new car to the cars state
  // This function will be passed down to child components that need to add cars
  const addCar = () => {
    // Create a new car object based on the first car in the cars array
    // This will be used as a template when adding new cars
    // We spread the first car's properties and generate a new unique ID
    const newCar: Car = {
      id: `${Date.now()}`, // Unique identifier for this car (string format) Current timestamp
      year: "2024", // Manufacturing year as a string
      make: "Ferrari", // Car manufacturer/brand
      model: "812GTS", // Specific model name
      description:
        "The Ferrari 812GTS is everything a Ferrari should be. It’s painfully gorgeous and upholstered with the finest Italian leather, but those details are just a warmup for the naturally aspirated, 789-hp V-12 engine. Comically fast, the front-mounted V-12 sings the maker’s siren song as conducted by the driver’s right foot whenever the mood strikes. If that sounds a bit dramatic, it is, but the 812’s purity of purpose and design are that inspiring. Part of that charm is how civil it can be for nights on the town even as neck-straining acceleration remains just an accelerator stab away. While Ferrari isn’t fond of us strapping our test gear to its products, we were able to clock a 2.7-second 60-mph run back in 2018 in the GTS’s coupe version, then called the Superfast. It hit 100 mph in 5.7 seconds and destroyed the quarter-mile in 10.4 seconds at 138 mph. Superfast indeed. That same 6.5-liter V-12 is found under the hood of the 2024 812GTS convertible—the only body style available for this model year. Any doubts regarding the 812’s supercar bandwidth were quelled with our drive of the 2021 Ferrari 812 GTS, where we came away deeming it “two cars in one.” Buyers fortunate enough to land a 2024 812GTS are also joining an elite club, as the 812 will very likely be the last naturally aspirated V-12 Ferrari sports car without hybrid assist. As if the 812 needed anything more to make it special.",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-812-gts-101-64caae4038b21.jpeg?crop=0.547xw:0.548xh;0.127xw,0.342xh&resize=2048:*", // URL to car image
      favorite: false, // Boolean indicating if this car is marked as favorite
      createdAt: "2025-01-01T00:00:00.000Z", // ISO 8601 timestamp for when record was created
      updatedAt: "2025-01-01T00:00:00.000Z", // ISO 8601 timestamp for when record was last updated
    };

    // Use setCarsState to update the cars array
    // We use the functional update pattern to ensure we're working with the latest state
    setCarsState((prevCars) => [newCar, ...prevCars]);
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
      {/* We pass the addCar function as a prop so the navbar can trigger adding new cars */}
      <Navbar onAddCar={addCar} />

      {/* Landing page component - the hero section users see first */}
      {/* This contains the main title and call-to-action button */}
      <Landing />

      {/* Car list component - displays all the cars in a grid/list format */}
      {/* We pass the carsState as a prop instead of the direct import */}
      {/* This allows the component to display the current state of cars data */}
      {/* Later, we can pass setCarsState to child components to allow them to update the cars */}
      <CarList
        cars={carsState}
        onDeleteCar={deleteCar}
        onToggleFavorite={toggleFavorite}
      />

      {/* Footer component - appears at the bottom of the page */}
      {/* This typically contains copyright information and links */}
      <Footer />
    </div>
  );
}

// Export the App component as the default export
// This makes it the main component that gets rendered when the app starts
// In index.tsx or main.tsx, this component will be rendered into the DOM
export default App;
