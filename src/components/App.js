import React from 'react';

import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
	return (
		<div className="ui container" style={{ marginTop: '10px' }}>
			<TaskForm />
			<TaskList />
		</div>
	);
};

export default App;
