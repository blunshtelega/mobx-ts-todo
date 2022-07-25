import React, { useState } from 'react';
import { ITodo } from '../../store/TodoStore';
import { useStores } from '../../hooks/useStore';
import { observer } from 'mobx-react-lite';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

interface ITodoItemProps {
    todo: ITodo;
}

const TodoItem = observer(({ todo }: ITodoItemProps): JSX.Element => {
    const { todoStore } = useStores();
    const [editMode, setEditMode] = useState(false);
    const [editFormValue, setEditFormValue] = useState(todo.taskTitle);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditFormValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const editedTodo = {
            ...todo,
            taskTitle: editFormValue
        };
        todoStore.updateTodo(editedTodo);
        setEditMode(false);
    };

    return (
        <>
            <div className='todo-item'>
                <div className='todo-item__info-wrapper'>
                    {!editMode &&
                        <Input 
                            id='todoItemCheckbox'
                            type='checkbox'
                            className='todo-item__input'
                            checked={todo.isDone}
                            value={editFormValue}
                            onChange={() => todoStore.toggleCompleted(todo.id)}
                        />
                    }
                    {!editMode && <p>{todo.taskTitle}</p>}
                    {editMode && (
                        <form className='edit-form' action='' onSubmit={handleSubmit}>
                            <Input
                                id='editFormInput'
                                type='text'
                                className='edit-form__input_edit-mode'
                                value={editFormValue}
                                onChange={handleChange}
                            />
                            <div className="edit-form__buttons-wrapper">
                                <Button
                                    type='submit'
                                    id='editFormSubmitButton'
                                    className='edit-form__button_submit'
                                    children='Сохранить'
                                />
                                <Button 
                                    type='button'
                                    id='editFormCancelButton'
                                    className='edit-form__button'
                                    children='Отменить'
                                    onClick={() => setEditMode(false)}
                                />
                            </div>
                        </form>
                    )}
                </div>
                <div className='todo-item__buttons-wrapper'>
                    {!editMode && 
                        <Button 
                            type='button'
                            id='editFormChangeButton'
                            className='todo-item__button_cancel'
                            children='Изменить'
                            onClick={() => setEditMode(!editMode)}                        
                        />
                    }
                    <Button 
                        type='button'
                        id='editFormDeleteButton'
                        className='todo-item__button_delete'
                        children='Удалить'
                        onClick={() => todoStore.deleteTodo(todo.id)}                        
                    />
                </div>
            </div>
        </>
    );
});

export default TodoItem;