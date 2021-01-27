import React from 'react';
import TodoListItem from "./todo-list-item";

const TodoList = () => {
    const items = [<TodoListItem />, 'Build demo App'];
    const itemsStyle = {
        fontSize: '15px'
    };
    return (
        <ul style={itemsStyle}>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

export default TodoList;