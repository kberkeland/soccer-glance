const teamsReducer = (state = {}, action) => {
    if( action.type === 'SET_TEAMS') {
        return action.payload;
    } // end if
        return state;
};
  
export default teamsReducer;