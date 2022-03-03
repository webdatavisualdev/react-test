import { render, screen } from "@testing-library/react";
import ProductCard from "./index";
import nock from "nock";

import axiosMock from "axios";
jest.mock("axios");

test("renders learn react link", async () => {
  const stubProduct = {
    status: "active",
    title: "IPod Nano - 8GB",
    tags: ["Emotive", "Flash Memory, MP3", "Music"],
    vendor: "Apple",
    id: 1,
  };

  const data = {
    data: { product: stubProduct },
  };
  axiosMock.get.mockResolvedValueOnce(data);

  const { getByText } = render(<ProductCard prodcutId={1} />);
  await (() => {
    expect(getByText(stubProduct.title)).toBeInTheDocument();
    expect(getByText(stubProduct.vendor)).toBeInTheDocument();
    expect(getByText("Emotive")).toBeInTheDocument();
    expect(getByText("Flash Memory, MP3")).toBeInTheDocument();
    expect(getByText("Music")).toBeInTheDocument();
  });
});
