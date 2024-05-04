import React from "react";
import Button from "../reusable-components/button";

const HeroSection = () => {
  return (
    <div className="h-[70vh] w-full flex justify-center items-center">
      <Button size="md" variant="primary" href="/create-contact">
        Create contact
      </Button>
    </div>
  );
};

export default HeroSection;
