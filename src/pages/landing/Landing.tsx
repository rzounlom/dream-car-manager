// Import the CSS file that contains styles for this landing page component
import "./Landing.css";

// Import FC (Function Component) type from React
// FC is a TypeScript utility type that helps define React functional components
import { type FC } from "react";

// Define the Landing component
// This is the main landing page that users see when they first visit the application
// It serves as the hero section with a title and call-to-action button
const Landing: FC = () => {
  // The component returns JSX that renders the landing page content
  return (
    // Main container div with CSS class for styling
    // This creates the full landing page section
    <div className="landing">
      {/* Heading section containing the main title and call-to-action */}
      <div className="heading">
        {/* Main application title */}
        {/* This is typically the largest text on the page and introduces the app */}
        <h1>Dream Car Tracker</h1>

        {/* Call-to-action button that navigates to the cars section */}
        {/* Note: The button contains an anchor tag, which is not ideal HTML structure */}
        {/* In a more advanced implementation, you might use React Router or onClick handlers */}
        <button>
          {/* Anchor tag with href="#cars" creates a smooth scroll to the cars section */}
          {/* The #cars refers to an element with id="cars" (likely the CarList component) */}
          <a href="#cars">View Cars</a>
        </button>
      </div>
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default Landing;
