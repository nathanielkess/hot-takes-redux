import {database } from '../firebase';

const userRef = database.ref('users');

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    displayName: user.displayName,
    uid: user.uid,
    photoURL: user.photoURL
  };
};

export const startListeningForUserChanges = () => {
  return (dispatch) => {
    return (dispatch) => {
      userRef.on('child_added', (snapshot) => {
        dispatch(addUser(snapshot.val()));
      });
    }
  };
}