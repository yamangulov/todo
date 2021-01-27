import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Learn React', 'Build demo App'];
    return (
        <ul>
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
    return (
        <input placeholder="search"/>
    );
};

const App = () => {
    const isLoggedIn = true;
    const loginBox = <span>Login, please!</span>
    const welcomeBox = <span>Welcome back!</span>
    return (
        <div>
            <div>{(new Date()).toString()}</div>
            {isLoggedIn ? welcomeBox : loginBox}
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));