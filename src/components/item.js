import React from 'react';

export default function Item(
  {
    amountOwed,
    description,
    dueDate,
    onToggleItem,
    payAmount,
    selected
    }
) {

  return (
    <div className="item">
      <div className="desc">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggleItem}
        />
        {description}
      </div>
      <div className="due-date">
        {dueDate}
      </div>
      <div className="amount-owed">
        {amountOwed}
      </div>
      <div className="pay-amount">
        <input type="text" value={payAmount}/>
      </div>
    </div>
  );

}
