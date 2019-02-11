import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* teamsSaga() {
    yield takeLatest('ADD_TEAMS', addTeams);
}

// worker Saga: will be fired on "FETCH_USER" actions
function* addTeams() {
    try {
        // call to the database for team data
        const response = yield axios.get('api/teams');
        const action = {type: 'SET_TEAMS', payload: response.data};
        yield put(action);
    } catch (error) {
        console.log(`Get request failed for teams: ${error}`);
    }
}

export default teamsSaga;