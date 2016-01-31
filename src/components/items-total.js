import React from 'react';

export default function ItemsTotal(
  {
    amountOwed,
    payAmount,
    title
    }
) {

  return (
    <div className="items-total">
      <div className="total-title">{title}</div>
      <div className="amount-owed">{amountOwed}</div>
      <div className="pay-amount">{payAmount}</div>
    </div>
  );

}
