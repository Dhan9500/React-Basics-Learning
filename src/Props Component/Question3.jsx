function Question3({ items,header }) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <h1>{header}</h1>
        <ul>
          {items.map((items, index) => (
            <li>
              {index + 1 + ". "}
              {items}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Question3;
