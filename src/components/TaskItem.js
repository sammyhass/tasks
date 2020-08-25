import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, editTask } from '../actions';

const TaskItem = props => {
	const { task } = props;

	const [isEditing, setIsEditing] = useState(false);
	const [editedTask, setEditedTask] = useState(task.text);

	const toggleEditing = () => {
		if (isEditing) {
			props.editTask({ ...task, text: editedTask });
		}

		setIsEditing(!isEditing);
	};

	return (
		<div
			className="ui item"
			style={{
				padding: '10px',
				border: '1px solid #eee',
				borderRadius: '5px',
				boxShadow: '0px 1px 1px #eee',
				marginBottom: '15px',
			}}
		>
			<div className="ui right floated">
				<button
					className="ui button red"
					onClick={() => props.deleteTask(task.id)}
				>
					Delete
				</button>

				<button className="ui button primary" onClick={toggleEditing}>
					{isEditing ? 'Save' : 'Edit'}
				</button>
			</div>
			{!isEditing ? (
				<div>{task.text}</div>
			) : (
				<div className="ui field">
					<input
						placeholder={task.text}
						value={editedTask}
						onChange={e => setEditedTask(e.target.value)}
					/>
				</div>
			)}
		</div>
	);
};

const mapDispatchToProps = {
	deleteTask,
	editTask,
};

export default connect(null, mapDispatchToProps)(TaskItem);
