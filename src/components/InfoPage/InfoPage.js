import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoPage extends Component {

  componentDidMount() {
    // use component did mount to dispatch an action to request a list of leagues and teams
    this.props.dispatch({type: 'FETCH_LEAGUES'});
    // this.props.dispatch({type: 'FETCH_TEAMS'});
  }

  handleClick = () => {
    const action = {type: 'FETCH_TEAMS'};
    this.props.dispatch(action);
  } // end handleClick

  render() {
    return (
      <div>
        {/* {JSON.stringify(this.props.reduxStore.leagues)} */}
        <ul>
        {this.props.reduxStore.leagues.map((leagues, i) => (
          <li key={i}>{leagues.id} {leagues.name} <button onClick={this.handleClick}>Select League</button></li>
        ))}
        </ul>
        {/* <ul>
        {this.props.reduxStore.teams.map((teams, i) => (
                            <li key={i}>{teams.id}{teams.name}</li>
        ))}
        </ul> */}
      </div>
    )
  }

}

const mapStoreToProps = reduxStore => ({
  reduxStore,
});

export default connect(mapStoreToProps)(InfoPage);