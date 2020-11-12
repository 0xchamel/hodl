import React, { useState } from "react";

import "./Article.scss";

const Article = ({ title, link, image }) => {
  return (
    <div
      className="article"
      onClick={() => {
        const win = window.open(link, "_blank");
        win.focus();
      }}
    >
      <img src={image} alt="img" />
      <p>{title}</p>
    </div>
  );
};

export default Article;
