import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Items from './items';
import * as actionCreators from '../action-creators';

import './index.less';

export class Page extends React.Component {

  static displayName = 'Page';

  static defaultProps = {
    parts: [],
    misc: []
  };

  render() {

    return (
      <div className="page">
        <Items
          {...this.props.actions}
          items={this.props.parts}
          title="Parts"
          type="parts"
        />
        <Items
          {...this.props.actions}
          items={this.props.misc}
          title="Miscellaneous"
          type="miscItems"
        />
      </div>
    );

  }

}

const mapDataToProps = state => ({
  parts: state.parts,
  misc: state.miscItems
});

const mapActionsToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapDataToProps,
  mapActionsToProps
)(Page);

