import React, { useState } from "react";
import LoginAndSignupButton from "../loginAndSignupButton";
import bgImage from "../../assets/images/front-view-yummy-meat-cheeseburger-with-french-fries-dark-background-dinner-burgers-snack-fast-food-sandwich-salad-dish-toast (1).jpg";

const Forms = () => {
  const [isLogged, setIsLogged] = useState("login");

  return (
    <div className="w-full h-full">
      <section className="h-[45vh] w-full">
        <img src={bgImage} alt="bgImage" className="w-full h-full" />
      </section>
      <section className="bg-white h-[55vh] w-full ">
        <div className="px-[15px]">
          <LoginAndSignupButton isLogged={isLogged} setIsLogged={setIsLogged} />
        </div>
      </section>
    </div>
  );
};

export default Forms;
