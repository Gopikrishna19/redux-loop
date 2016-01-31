import React from 'react';

export default function Item(
  {
    selected,
    onToggleItem,
    description
    }
) {

  return (
    <div className="item">
      <input
        type="checkbox"
        checked={selected}
        onChange={onToggleItem}
      />
      {description}
    </div>
  );

}
