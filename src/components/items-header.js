import React from 'react';

export default function ItemsHeader(
  {
    selectAll,
    onToggleAll
    }
) {

  return (
    <div className="items-header">
      <div className="desc">
        <input
          type="checkbox"
          checked={selectAll}
          onChange={onToggleAll}
        />
        Description
      </div>
      <div className="due-date">
        Due Date
      </div>
      <div className="amount-owed">
        Amount Owed
      </div>
      <div className="pay-amount">
        Pay Amount
      </div>
    </div>
  );

}
