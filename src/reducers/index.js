import { combineReducers } from 'redux';

let newTaskId = 0;
const taskReducer = (state = [], action) => {
	if (action.type === 'ADD_TASK') {
		return [
			...state,
			{
				text: action.payload,
				id: newTaskId++,
			},
		];
	} else if (action.type === 'DELETE_TASK') {
		return state.filter(task => task.id !== action.payload);
	} else if (action.type === 'EDIT_TASK') {
		const editingTask = state.findIndex(task => task.id === action.payload.id);
		const currentTasks = [...state];
		currentTasks[editingTask] = action.payload;
		return currentTasks;
	}

	return state;
};

export default combineReducers({
	tasks: taskReducer,
});
