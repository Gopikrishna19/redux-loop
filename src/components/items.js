import React from 'react';

import Item from './item';

export default class extends React.Component {

  static displayName = 'Items';

  static defaultProps = {
    items: [],
    title: 'Items',
    allSelected: false
  };

  render() {

    const items = this.props.items;
    const itemsType = this.props.type;

    return (
      <div className="items">
        <h2>{this.props.title}</h2>
        <div>
          <input
            type="checkbox"
            checked={this.props.allSelected}
            onChange={() => this.props.toggleAll(!this.props.allSelected, itemsType)}
          />
          <strong>Description</strong>
        </div>
        {
          items.map(
            (item, index) =>
              <Item
                key={index}
                {...this.props}
                index={index}
                item={item}
              />
          )
        }
      </div>
    );

  }

}
