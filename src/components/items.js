import React from 'react';

import Item from './item';
import ItemsHeader from './items-header';

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
      <ItemsHeader
        selectAll={allSelected}
        onToggleAll={() => toggleAll(!allSelected, type)}
      />
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
