import React, { useState } from 'react';

import { connect } from 'react-redux';

import { addTask } from '../actions';

const TaskForm = props => {
	const [newTask, setNewTask] = useState('');

	const onFormSubmit = e => {
		e.preventDefault();
		props.addTask(newTask);
		setNewTask('');
	};

	return (
		<div className="ui segment">
			<form className="ui form" onSubmit={onFormSubmit}>
				<div className="field">
					<label>Add Task</label>
					<input
						type="text"
						value={newTask}
						onChange={e => setNewTask(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = {
	addTask,
};

export default connect(null, mapDispatchToProps)(TaskForm);
