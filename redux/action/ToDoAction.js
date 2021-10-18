import {ADD_CATEGORY} from '../constants';

export const AddCategory = data => {
  console.log('action call');
  return {
    type: ADD_CATEGORY,
    payload: data,
  };
};
