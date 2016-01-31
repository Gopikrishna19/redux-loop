import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ItemsList from './items-list';
import ItemsTotal from './items-total';
import * as actionCreators from '../action-creators';

import './index.less';

export class Page extends React.Component {

  static displayName = 'Page';

  static defaultProps = {
    parts: [],
    miscItems: [],
    meta: {
      allSelected: false
    }
  };

  render() {

    return (
      <div className="page">
        <h1>Parts & Miscellaneous</h1>
        <ItemsList
          {...this.props.actions}
          items={this.props.parts}
          title="Parts"
          type="parts"
          meta={this.props.meta.parts}
        />
        <ItemsList
          {...this.props.actions}
          items={this.props.miscItems}
          title="Miscellaneous"
          type="miscItems"
          meta={this.props.meta.miscItems}
        />
        <div className="grand-total">
          <ItemsTotal
            title="Total"
            {...this.props.meta.grandTotal}
          />
        </div>
      </div>
    );

  }

}

const mapDataToProps = state => state;

const mapActionsToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapDataToProps,
  mapActionsToProps
)(Page);

