"use client";

import { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import Search from "./components/search";
import Filter from "./components/filter";
import FoodCard from "./components/foodcard";
import Footer from "./components/footer";

type Food = {
  id: number;
  food_name: string;
  price: number;
  description: string;
  category: string;
};

export default function Home() {
  const [foods, setFoods] =
    useState<Food[]>([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("");

  const [cart, setCart] = useState<Food[]>([]);
  useEffect(() => {
    fetch("/api/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  let filteredFoods = Array.isArray(foods)
  ? foods.filter((food) =>
      food.food_name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  : [];
  if (category !== "All") {
    filteredFoods = filteredFoods.filter(
      (food) => food.category === category
    );
  }

  if (sort === "low") {
    filteredFoods.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredFoods.sort(
      (a, b) => b.price - a.price
    );
  }

  const addToCart = (food: Food) => {
    setCart([...cart, food]);
  };

  const removeItem = (id: number) => {
    const idx = cart.findIndex((item) => item.id === id);
    setCart(cart.filter((_, i) => i !== idx));
  };

  return (
    <>
      <Navbar />

      <Search
        search={search}
        setSearch={setSearch}
      />
      <div>   </div>
      <Filter
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <h2>Foods</h2>

      {filteredFoods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          addToCart={addToCart}

        />
      ))}
      

      <h2>Cart</h2>

      {cart.map((item, index) => (
        <div key={index}>
          {item.food_name}

          <button
            onClick={() =>
              removeItem(item.id)
            }
          >
            Delete
          </button>
          {item.price}
          <hr />
        </div>
      ))}

      <p>Total: {cart.reduce((sum, item) => sum + item.price, 0)}</p>

      <Footer />
    </>
  );
}