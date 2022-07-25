import React from 'react';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App(): JSX.Element {
    return (
        <>
            <Header />
            <AddTodoForm />
            <TodoList />
            <Footer />
        </>
    );
}

export default App;
