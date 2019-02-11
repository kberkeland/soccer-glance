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
        {JSON.stringify(this.props.reduxStore.teams)}
        {this.props.reduxStore.teams.map((teams, i) => (
                            <li key={i}>{teams.name}</li>
        ))}
      </div>
    )
  }

}

const mapStoreToProps = reduxStore => ({
  reduxStore,
});

export default connect(mapStoreToProps)(InfoPage);