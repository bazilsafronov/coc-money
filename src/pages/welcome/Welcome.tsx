import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>Walk through the world with us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
        imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec
        gravida ipsum pulvinar vel.
      </p>
      <Link to="/signup">
        <button>Get Started</button>
      </Link>
    </>
  );
};

export default Welcome;
