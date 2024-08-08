//@ts-nocheck
import { useState, useEffect } from "react";
import Card from "./components/Card.jsx";
import FilterButtons from "./components/FilterButtons.jsx";
import Bucket from "./components/Bucket.jsx";
import "./App.css";

export default function App() {
  const [data, setData] = useState();
  const [categoryList, setCategoryList] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredData, setFilteredData] = useState();
  const [addedItems, setAddedItems] = useState([]);

  const filterData = (data, category) => {
    const filtered = data.filter(
      (singleItem) => singleItem.category === category
    );
    setFilteredData(filtered);
    return filtered;
  };

  const addToBucket = (id) => {
    const newItem = data.filter((singleItem) => singleItem.id === id);
    setAddedItems((prevItems) => [...prevItems, ...newItem]);
  };

  const clickHandler = (category) => {
    if (category === "All") {
      setFilteredData(data);
      return;
    }
    setSelectedCategory(category);
    const fil = filterData(data, category);
    setFilteredData(fil);
  };

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products/");
    const json = await data.json();
    setData(json);
    setFilteredData(json);
    setCategoryList(findUniqueCategories(json));
  };

  const findUniqueCategories = (data) => {
    const category = new Set();
    data.map((singleItem) => {
      category.add(singleItem.category);
    });
    let finalCategoryList = ["All"];
    category.forEach((data) => {
      finalCategoryList.push(data);
    });
    return finalCategoryList;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
    <div>
      <h1>Hello StackBlitz!</h1>
      <FilterButtons
        categoryList={categoryList}
        selectedCategory={selectedCategory}
        clickHandler={clickHandler}
      />
      <div>
        {filteredData.map((singleObj) => {
          const { title, price, description, category, image, id } = singleObj;
          return (
            <Card
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              clickHandler={addToBucket}
              id={id}
              key={id}
            />
          );
        })}
      </div>
      <div style={{ position: "relative" }}>
        <Bucket length={addedItems.length} />
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
