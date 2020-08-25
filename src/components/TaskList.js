import React from 'react';

import { connect } from 'react-redux';

import TaskItem from './TaskItem';

const TaskList = props => {
	const renderedItems = props.tasks.map(task => {
		return <TaskItem task={task} key={task.id} />;
	});

	return <div className="ui large relaxed list">{renderedItems}</div>;
};

const mapStateToProps = state => {
	return {
		tasks: state.tasks,
	};
};

export default connect(mapStateToProps)(TaskList);
