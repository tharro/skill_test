import { createSelector } from 'reselect';

//very basic .. this has nothing to do with Reselect
export const getUserData = state => state.userReducers.user_data;

// //an example to demonstrate how reselect works
export const getUserState = createSelector(
    [getUserData],
    l => l
);
