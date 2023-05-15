import "./styles.css";
import { useState } from "react";

// assume sorted by category
let products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default function App() {
  return (
    <>
      <div className="app">
        <FilterAbleProductTable products={products} />
      </div>
    </>
  );
}

function FilterAbleProductTable({ products }) {
  // console.log(products);

  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  );
}

function SearchBar() {
  return (
    <>
      <div className="searchBar">
        <form>
          <input type="text" placeholder="Enter text to search" />
          <p>
            <input type="checkbox" /> Only show product in stocks
          </p>
        </form>
      </div>
    </>
  );
}

function ProductTable() {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // console.log(product)

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <>
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    </>
  );
}

function ProductRow({ product }) {
  console.log(product.stocked);

  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  // console.dir(product)
  console.log(name);
  return (
    <>
      <tr>
        <td>{name}</td> <td>{product.price}</td>
      </tr>
    </>
  );
}
