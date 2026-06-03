type Food = {
  id: number;
  food_name: string;
  price: number;
  description: string;
  category: string;
};

type Props = {
  food: Food;
  addToCart: (food: Food) => void;
};

export default function FoodCard({
  food,
  addToCart,
}: Props) {
  return (
    <div>
      <h3>{food.food_name}</h3>

      <p>{food.price}</p>

      <p>{food.description}</p>

      <p>{food.category}</p>

      <button
        onClick={() => addToCart(food)}
      >
        Add To Cart
      </button>
    </div>
  );
}