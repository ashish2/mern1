import React from 'react';
//import PropTypes from 'prop-types';
import Todo from './Todo';
import {connect} from 'react-redux';


const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed)
		case 'SHOW_ALL':
		default:
			return todos
	}
}

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		}
	}
}


const TodoList = ({todos, onTodoClick}) => {
	<ul>
	{todos.map((todo, index) => (
		<Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
	))}
	</ul>
}

/*
TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
		).isRequired,
	onTodoClick: PropTypes.func.isRequired
}
*/

const VisibleTodoList = connect(
		mapStateToProps,
		mapDispatchToProps
	)(TodoList)

//export default TodoList;
export default VisibleTodoList;

