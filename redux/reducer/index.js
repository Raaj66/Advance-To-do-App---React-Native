import {createStore, combineReducers, applyMiddleware} from 'redux';
import ToDoReducer from './ToDoReducer';
import thunk from 'redux-thunk';

const rootReduer = combineReducers({
  ToDoReducer,
});

const configureStore = () => {
  return createStore(rootReduer, applyMiddleware(thunk));
};

export default configureStore;
