import * as types from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const intialState = {
    todos: [{ id: 1, task: 'study', completed: false }]
}

const todoReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.COMPLETE_TODO:
            const toggleTodos = state.todos.map(item => {
                if (item.id === action.payload.id) {
                    item.completed = !action.payload.completed
                }
                return item
            });
            return {
                ...state,
                todos: toggleTodos,
            }
        case types.ADD_TODO:
            const newTodo = {
                id: uuidv4(),
                task: action.payload,
                completed: false,
            }
            const addedTodo = [...state.todos, newTodo]
            return {
                ...state,
                todos: addedTodo
            }
        case types.REMOVE_TODO:
            const filterToDos = state.todos.filter(todo => {
                return todo.id !== action.payload.id
            });
            return {
                ...state,
                todos: filterToDos
            }
        case types.EDIT_TODO:
            const todosList = state.todos;
            const indexOfEditTodo = todosList.indexOf(todo => todo.id === action.payload.id);
            if (indexOfEditTodo >= 0) {
                todosList[indexOfEditTodo] = action.payload;
            }
            return {
                ...state,
                todos: todosList
            }
        default:
            return state
    }
}

export default todoReducer;