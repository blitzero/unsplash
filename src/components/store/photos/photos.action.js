import { PHOTOS_FAILURE, PHOTOS_REQUEST, PHOTOS_SUCCESS } from "../constants";
import { unsplash } from "../../../config";

export function getPhotos(page, perPage) {
  return dispatch => {
    dispatch({
      type: PHOTOS_REQUEST
    });

    unsplash.photos
      .listPhotos(page, perPage)
      .then(res => res.json())
      .then(res => {
        dispatch(photosSuccess([...res]));
      })
      .catch(error => {
        dispatch(photosFailure(error));
      });
  };
}

export function photosSuccess(photos) {
  return {
    type: PHOTOS_SUCCESS,
    photos: photos
  };
}

export function photosFailure(error) {
  return {
    type: PHOTOS_FAILURE,
    error: error
  };
}
