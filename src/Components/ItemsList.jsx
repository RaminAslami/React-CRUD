import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function ItemsList() {
  const [items, setItems] = React.useState([]);

  const addItems = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const updateItem = (index, newItem) => {
    setItems(items.map((item, i) => (i === index ? newItem : item)));
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button
              className="btn-sm btn btn-danger"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
            <button
              className="btn-sm btn btn-primary"
              onClick={() => updateItem(index, "Updated Item")}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <button
        className="add-button btn-sm btn btn-success"
        onClick={() => addItems("New Item")}
      >
        Add Item
      </button>
    </div>
  );
}

export default ItemsList;
