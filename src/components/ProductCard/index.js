import React from "react";

import "./style.scss";

const productCard = () => {
  return (
    <div className="product-card container">
      <div className="row card-background">
        <div className="col-6 left">
          <img src="/images/memory.png" alt="memory" />
        </div>
        <div className="col-6 right">
          <div className="product-info">
            <div className="product-name text-end mt-3">
              <i className="far fa-edit"></i>
            </div>
            <div className="details">
              <h3 className="mt-2">Title</h3>
              <h2 className="mt-3">Vendor</h2>
            </div>
            <ul>
              <li>Tags</li>
              <li className="bg">7</li>
              <li className="bg">8</li>
              <li className="bg">9</li>
              <li className="bg">10</li>
              <li className="bg">11</li>
            </ul>
            <ul>
              <li>Status</li>
              <li className="yellow"></li>
              <li className="black"></li>
              <li className="blue"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productCard;
