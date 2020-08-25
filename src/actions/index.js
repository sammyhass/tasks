export const addTask = content => {
	return {
		type: 'ADD_TASK',
		payload: content,
	};
};

export const deleteTask = taskId => {
	return {
		type: 'DELETE_TASK',
		payload: taskId,
	};
};

export const editTask = task => {
	return {
		type: 'EDIT_TASK',
		payload: task,
	};
};
