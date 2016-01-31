import React from 'react';

import Item from './item';

export default function Items(
  {
    allSelected,
    items,
    title,
    toggleAll,
    toggleItem,
    type
    }
) {
  return (
    <div className="items">
      <h2>{title}</h2>
      <div>
        <input
          type="checkbox"
          checked={allSelected}
          onChange={() => toggleAll(!allSelected, type)}
        />
        <strong>Description</strong>
      </div>
      {
        items.map(
          (item, index) =>
            <Item
              key={index}
              {...item}
              onToggleItem={() => toggleItem(index, type)}
            />
        )
      }
    </div>
  );

}
