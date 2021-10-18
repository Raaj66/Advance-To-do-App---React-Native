import {ADD_CATEGORY} from '../constants';
import {v4 as uuidv4} from 'uuid';

const initialState = {
  list: [
    {
      id: uuidv4(),
      categoryName: 'Family',
      SubCategory: [
        {
          id: uuidv4(),
          name: 'Father Side',
          tasks: [
            {
              id: uuidv4(),
              details: 'Call dady1',
            },
            {
              id: uuidv4(),
              details: 'Call Mom1',
            },
          ],
        },
        {
          name: 'Mother Side',
          tasks: [
            {
              id: uuidv4(),
              details: 'Call dady1',
            },
            {
              id: uuidv4(),
              details: 'Call Mom1',
            },
          ],
        },
      ],
    },
  ],
};

export default function ToDoReducer(state = initialState, action) {
  console.log('action', action.payload);
  if (action.type === ADD_CATEGORY) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return state;
  }
}
