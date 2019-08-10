import shopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsAsync = () => async dispatch => {
  dispatch(fetchCollectionsStart());
  const collectionRef = firestore.collection('collections');

  try {
    const snapshot = await collectionRef.get();
    const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    dispatch(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    dispatch(fetchCollectionsFailure(error.message));
  }
};
