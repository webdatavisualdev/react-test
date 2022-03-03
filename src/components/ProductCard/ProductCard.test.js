import { render, screen } from "@testing-library/react";
import ProductCard from "./index";

test("renders learn react link", () => {
  const stubProduct = {
    status: "active",
    title: "IPod Nano - 8GB",
    tags: ["Emotive", "Flash Memory, MP3", "Music"],
    vendor: "Apple",
    id: 1,
  };
  const { getByText, container } = render(
    <ProductCard product={stubProduct} />
  );

  expect(getByText(stubProduct.title)).toBeInTheDocument();
  expect(getByText(stubProduct.vendor)).toBeInTheDocument();
  expect(getByText("Emotive")).toBeInTheDocument();
  expect(getByText("Flash Memory, MP3")).toBeInTheDocument();
  expect(getByText("Music")).toBeInTheDocument();
});
