import "./Landing.css";

import { type FC } from "react";

const Landing: FC = () => {
  return (
    <div className="landing">
      <div className="heading">
        <h1>Dream Car Tracker</h1>
        <button>
          <a href="#cars">View Cars</a>
        </button>
      </div>
    </div>
  );
};

export default Landing;
