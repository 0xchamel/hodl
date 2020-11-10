import React, { useState } from "react";

import "./Article.scss";

const Article = ({ description, image }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="article"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt="img" />
      <p>{description}</p>
    </div>
  );
};

export default Article;
