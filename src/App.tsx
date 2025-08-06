import "./App.css";

import CarList from "./components/cars/CarList";
import Footer from "./components/footer/Footer";
import Landing from "./pages/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { cars } from "./data/cars";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Landing />
      <CarList cars={cars} />
      <Footer />
    </div>
  );
}

export default App;
