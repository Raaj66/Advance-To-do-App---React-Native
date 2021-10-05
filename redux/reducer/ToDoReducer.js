import {ADD_CATEGORY} from '../constants';

const initialState = {
  Tasks: [
    {
      Category: {
        id: 0,
        CategoryName: 'Cat1',
        SubCategory: [
          {
            id: 0,
            SubCategoryName: 'SubCat1',
            Tasks: ['task1', 'task2'],
          },
          {
            id: 1,
            SubCategoryName: 'SubCat1',
            Tasks: ['task1', 'task2'],
          },
        ],
      },
      Category: {
        id: 1,
        CategoryName: 'Cat1',
        SubCategory: [
          {
            id: 0,
            SubCategoryName: 'SubCat1',
            Tasks: ['task1', 'task2'],
          },
          {
            id: 1,
            SubCategoryName: 'SubCat1',
            Tasks: ['task1', 'task2'],
          },
        ],
      },
    },
  ],
};

export default function ToDoReducer(state = initialState, action) {
  if (action.type === ADD_CATEGORY) {
    const {CategoryName, SubCategoryName, Tasks} = action.payload;
    return {
      ...state,
    };
  } else {
    return state;
  }
}
