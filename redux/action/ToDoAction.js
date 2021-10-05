import {ADD_CATEGORY} from '../constants';

export const ToDoActions = (CategoryName, SubCategoryName, Tasks) => {
  return {
    type: ADD_CATEGORY,
    payload: {
      CategoryName: CategoryName,
      SubCategoryName: SubCategoryName,
      Tasks: Tasks,
    },
  };
};
