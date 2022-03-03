import React, { useState, useEffect } from "react";
import axios from "axios";

import EditModal from "./EditModal";
import "./style.scss";

const ProductCard = ({ prodcutId }) => {
  const [isEdit, setEdit] = useState(false);

  const toggle = () => {
    setEdit(!isEdit);
  };

  const [product, setProduct] = useState({});

  const getProduct = async (id) => {
    const result = await axios.get(`/api/products/${id}`);
    if (result.status === 200) {
      setProduct(result.data.product);
    }
  };

  useEffect(() => {
    getProduct(prodcutId);
  }, [prodcutId, isEdit]);

  return (
    <div className="product-card container">
      {product ? (
        <div className="row card-background">
          <div className="col-6 left">
            <img src="/images/memory.png" alt="memory" />
          </div>
          <div className="col-6 right">
            <div className="product-info">
              <div className="product-name text-end mt-3">
                <i className="far fa-edit" onClick={() => setEdit(true)}></i>
              </div>
              <div className="details">
                <h3 className="mt-2">{product?.vendor}</h3>
                <h2 className="mt-3">{product?.title}</h2>
              </div>
              <h4 className="mt-2 ms-2">Tags</h4>
              <ul>
                {product?.tags?.length > 0 &&
                  product.tags.map((tag, index) => (
                    <li className="bg" key={index}>
                      {tag}
                    </li>
                  ))}
              </ul>
              <h4 className="mt-2 ms-2">Status</h4>
              <ul>
                {product.status === "active" && <li className="blue"></li>}
                {product.status === "draft" && <li className="red"></li>}
                {product.status === "archived" && <li className="black"></li>}
              </ul>
              <h4 className="mt-2 ms-2">Replenishable</h4>
              <ul>
                <li className={product?.replenishable ? "blue" : "red"}></li>
              </ul>
            </div>
          </div>
          <EditModal isOpen={isEdit} toggle={toggle} product={product} />
        </div>
      ) : (
        <div className="mx-auto text-center mt-5 text-danger fs-3">
          There is no product
        </div>
      )}
    </div>
  );
};

export default ProductCard;
