import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoPage extends Component {

  componentDidMount() {
    // use component did mount to dispatch an action to request a list of teams
    const action = {type: 'ADD_TEAMS'};
    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.reduxStore)}
      </div>
    )
  }

}

const mapStoreToProps = reduxStore => ({
  reduxStore,
});

export default connect(mapStoreToProps)(InfoPage);