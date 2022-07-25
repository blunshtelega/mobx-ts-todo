import React, { useState } from 'react';
import { useStores } from '../../hooks/useStore';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './AddTodoForm'

const AddTodoForm = (): JSX.Element => {
    const [todoText, setTodoText] = useState('');
    const { todoStore } = useStores();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTodo = {
            id: Date.now(), // Я так обычно не делаю, но т.к. нельзя использовать nanoid или аналоги, то пусть будет так)
            taskTitle: todoText,
            isDone: false
        };
        todoStore.addTodo(newTodo);
        setTodoText('');
    };

    return (
        <div className='todo-add-wrapper'>
            <form className='todo-add-form' onSubmit={handleSubmit}>
                <Input 
                    id='addTodo'
                    type='text'
                    className='todo-add-form__input'
                    value={todoText}
                    onChange={handleChange}
                    placeholder='Добавить TODO'
                    autoFocus
                />
                <Button 
                    type='submit'
                    disabled={todoText.length === 0}
                    id='addTodo-submit'
                    className='todo-add-form__button'
                    children='Добавить'
                />
            </form>
        </div>
    );
};

export default AddTodoForm;