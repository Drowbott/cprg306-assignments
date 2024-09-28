export default function Item({ name, quantity, category }) {
  return (
    <li className="w-96 ml-4 bg-blue-500 mt-4 mx-6 px-3 py-1">
      <span className="font-bold text-2xl">{name}<br /></span>
      <span>Buy {quantity} in {category}</span>
    </li>
  );
};