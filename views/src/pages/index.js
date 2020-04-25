import React from "react";

import IndexCard from "../components/IndexCard/IndexCard";

import IndexImage from "../images/project.jpg";

const IndexPage = () => {
  return (
    <div>
      <div className="background">
        <img src={IndexImage} alt="index" className="index" />
      </div>
      <IndexCard />
    </div>
  );
};

export default IndexPage;
