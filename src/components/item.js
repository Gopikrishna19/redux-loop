import React from 'react';

export default class extends React.Component {

  static displayName = 'Item';

  static defaultProps = {
    item: {},
    title: 'Item'
  };

  render() {

    const index = this.props.index;
    const item = this.props.item;
    const itemType = this.props.type;

    return (
      <div className="item">
        <input
          type="checkbox"
          checked={item.selected}
          onChange={() => this.props.toggleItem(index, itemType)}
        />
        {item.description}
      </div>
    );

  }

}
