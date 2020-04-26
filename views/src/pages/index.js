import React, { useEffect } from "react";

import IndexCard from "../components/IndexCard/IndexCard";

import IndexImage from "../images/project.jpg";

const IndexPage = () => {
  useEffect(() => {
    document.title = "Tracker";
  }, []);

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
