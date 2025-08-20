// Import the CSS file that contains styles for this navbar component
import "./Navbar.css";

// Import React hooks and types
// FC: Function Component type for TypeScript
// useEffect: Hook for handling side effects (like DOM events, API calls)
// useState: Hook for managing component state
import { type FC, useEffect, useState } from "react";

// Define the props interface for this component
// This tells TypeScript what props this component expects to receive
interface NavbarProps {
  onAddCar: () => void; // Function to handle opening the add car modal
}

// Define the Navbar component
// This component creates a navigation bar that changes appearance when scrolling
// It also handles opening the Add Car modal through the onAddCar prop
const Navbar: FC<NavbarProps> = ({ onAddCar }) => {
  // useState hook creates a state variable and a function to update it
  // scrolled: boolean state that tracks whether the user has scrolled down
  // setScrolled: function to update the scrolled state
  // false: initial value for the scrolled state
  const [scrolled, setScrolled] = useState(false);

  // useEffect hook runs code when the component mounts, updates, or unmounts
  // The empty array [] as the second parameter means this effect only runs once (on mount)
  useEffect(() => {
    // Define a function to handle scroll events
    // This function checks if the user has scrolled more than 50 pixels
    // If yes, it sets scrolled to true; otherwise, it sets it to false
    const handleScroll = () => {
      // window.scrollY gives us the number of pixels scrolled vertically
      // We compare it to 50 to determine if we should change the navbar appearance
      setScrolled(window.scrollY > 50);
    };

    // Add an event listener to the window object
    // This listens for scroll events and calls handleScroll when they occur
    window.addEventListener("scroll", handleScroll);

    // Return a cleanup function that removes the event listener
    // This prevents memory leaks by cleaning up when the component unmounts
    // This is a common pattern in React - always clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // The component returns JSX that renders the navigation bar
  return (
    // React Fragment (<>...</>) allows us to return multiple elements without a wrapper div
    <>
      {/* Navigation element with conditional CSS classes */}
      {/* Template literal syntax combines "navbar" with conditional "scrolled" class */}
      {/* If scrolled is true, the class becomes "navbar scrolled" */}
      {/* If scrolled is false, the class is just "navbar" */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Brand/logo section */}
        <div className={`navbar-brand ${scrolled ? "scrolled" : ""}`}>
          {/* Link to home page (currently just "#" placeholder) */}
          <a href="#">DCT</a>
        </div>

        {/* Navigation menu section */}
        <div className="navbar-menu">
          {/* Unordered list of navigation links */}
          <ul>
            {/* Cars link - navigates to the cars section */}
            <li>
              {/* Conditional class application based on scroll state */}
              {/* This allows different styling when scrolled vs not scrolled */}
              <a className={scrolled ? "scrolled" : ""} href="#cars">
                Cars
              </a>
            </li>

            {/* Add Car button - triggers the onAddCar function when clicked */}
            <li>
              {/* Anchor element with onClick handler */}
              {/* When clicked, this will call the onAddCar function passed from the parent */}
              {/* This function now opens the modal instead of directly adding a car */}
              <a className={scrolled ? "scrolled" : ""} onClick={onAddCar}>
                Add Car
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

// Export the component so it can be imported and used in other files
export default Navbar;
