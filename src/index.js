import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Learn React', 'Build demo App'];
    const itemsStyle = {
        fontSize: '20px'
    };
    return (
        <ul style={itemsStyle}>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return (
        <h1>To Do List</h1>
    );
};

const SearchPanel = () => {
    const searchText = 'Type here to search!';
    const searchStyle = {
        fontSize : '20px',
    };
    return (
        <input style={searchStyle} placeholder={searchText} />
    );
};

const App = () => {
    const isLoggedIn = true;
    const loginBox = <span>Login, please!</span>;
    const welcomeBox = <span>Welcome back!</span>;
    const baseStyle = {
        fontSize : '25px'
    }
    return (
        <div style={baseStyle}>
            <div>{(new Date()).toString()}</div>
            {isLoggedIn ? welcomeBox : loginBox}
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));