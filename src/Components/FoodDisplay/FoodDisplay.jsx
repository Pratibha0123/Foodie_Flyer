import { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

// eslint-disable-next-line react/prop-types
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [visibleCount, setVisibleCount] = useState(10);

  // Filter items by category
  const filteredFood = food_list.filter(
    (item) => category === "All" || category === item.category
  );

  // Show limited items
  const visibleFood = filteredFood.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 10);

    // smooth scroll to bottom after loading new items
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="food-display" id="food-display">
      <h2>🍽️ Top Dishes Near You</h2>

      <div className="food-display-list">
        {visibleFood.map((item) => (
          <FoodItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

      {visibleCount < filteredFood.length && (
        <div className="show-more">
          <button onClick={handleShowMore}>Show More ↓</button>
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
