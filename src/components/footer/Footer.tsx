// Import the CSS file that contains styles for this footer component
import "./Footer.css";

// Import FC (Function Component) type from React
// FC is a TypeScript utility type that helps define React functional components
// Since this component doesn't take any props, we use FC without generics
import { type FC } from "react";

// Define the Footer component
// This is a simple functional component that doesn't accept any props
// It's a presentational component that just displays static content
const Footer: FC = () => {
  // The component returns JSX that renders a footer element
  // The <footer> tag is a semantic HTML element that represents the footer of a page
  return (
    <footer>
      {/* Copyright text with the current year */}
      {/* This is static content that doesn't change based on props or state */}
      © 2025 Dream Car Tracker, Inc. All rights reserved.
    </footer>
  );
};

// Export the component so it can be imported and used in other files
export default Footer;
