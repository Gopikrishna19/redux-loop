import React from 'react';

import Item from './item';
import ItemsHeader from './items-header';
import ItemsTotal from './items-total';

export default function Items(
  {
    items,
    meta,
    title,
    toggleAll,
    toggleItem,
    type
    }
) {
  return (
    <div className="items-list">
      <h2>{title}</h2>
      <ItemsHeader
        selectAll={meta.allSelected}
        onToggleAll={() => toggleAll(!meta.allSelected, type)}
      />
      <div className="items">
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
      <ItemsTotal
        {...meta}
        title="Sub Total"
      />
    </div>
  );

}
