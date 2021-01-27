import React from 'react';
import TodoListItem from "./todo-list-item";

const TodoList = () => {
    const itemsStyle = {
        fontSize: '15px'
    };
    return (
        <ul style={itemsStyle}>
            <li><TodoListItem label="Drink Coffee!" /></li>
            <li><TodoListItem label="Play preference!" important /></li>
        </ul>
    );
};

export default TodoList;