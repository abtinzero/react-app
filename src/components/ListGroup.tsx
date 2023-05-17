import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
