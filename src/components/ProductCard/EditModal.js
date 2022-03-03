import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";

import "./style.scss";

const EditModal = ({ product, isOpen, toggle }) => {
  const [productInfo, setProductInfo] = useState({
    title: "",
    vendor: "",
    tags: [],
    status: "active",
  });

  console.log(product);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...productInfo.tags];
    list[index] = value;
    setProductInfo({ ...productInfo, tags: list });
  };

  const handleRemoveClick = (index) => {
    const list = [...productInfo.tags];
    list.splice(index, 1);
    setProductInfo({ ...productInfo, tags: list });
  };

  const handleAddClick = () => {
    const list = [...productInfo.tags];
    list.push("");
    setProductInfo({ ...productInfo, tags: list });
  };

  const handleStatus = (e) => {
    const { name } = e.target;
    setProductInfo({ ...productInfo, status: name });
  };

  useEffect(() => {
    setProductInfo({
      ...productInfo,
      title: product.title,
      vendor: product.vendor,
      tags: product.tags,
      status: product.status,
    });
  }, [product]);

  console.log(productInfo);
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Product</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="productTitle">Title</Label>
            <Input
              type="text"
              name="title"
              id="productTitle"
              value={productInfo.title}
              onChange={(e) =>
                setProductInfo({ ...productInfo, title: e.target.value })
              }
              placeholder="Input Product Title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="productVendor">Vendor</Label>
            <Input
              type="text"
              name="vendor"
              id="productVendor"
              value={productInfo.vendor}
              onChange={(e) =>
                setProductInfo({ ...productInfo, vendor: e.target.value })
              }
              placeholder="Input Product Vendor"
            />
          </FormGroup>
          <FormGroup>
            <Label for="productTitle">Status</Label>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="active"
                  checked={productInfo.status === "active"}
                  onChange={handleStatus}
                />
                Active
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="draft"
                  checked={productInfo.status === "draft"}
                  onChange={handleStatus}
                />
                Draft
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="archived"
                  checked={productInfo.status === "archived"}
                  onChange={handleStatus}
                />
                Archived
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="productTitle">Tags</Label>
            {productInfo.tags.map((tag, i) => (
              <div className="d-flex mt-1">
                <Input
                  placeholder="Enter New Tag"
                  value={tag}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <div className="d-flex">
                  {productInfo.tags.length !== 1 && (
                    <Button
                      color="danger"
                      className="ms-2"
                      onClick={() => handleRemoveClick(i)}
                    >
                      -
                    </Button>
                  )}
                  {productInfo.tags.length - 1 === i && (
                    <Button
                      color="success"
                      className="ms-2"
                      onClick={handleAddClick}
                    >
                      +
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateEdit}>
            Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditModal;
