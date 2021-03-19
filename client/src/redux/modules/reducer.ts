import { combineReducers } from 'redux';
import user from './user';
import todo from './todo';
import filter from './filter';
import dialog from './dialog';
import todos from './todos';

const rootReducer = combineReducers({
	resources: combineReducers({ todos }),
	ui: combineReducers({ user, todo, filter, dialog }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
