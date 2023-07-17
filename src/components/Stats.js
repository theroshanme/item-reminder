export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>Start adding your items to your list 🚩</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Got everything ready to rock and go 🛰"
          : `You have ${numItems} Items on your list, and you have already Packed ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
