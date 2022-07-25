import React from 'react';
import { TODO_FILTER } from '../../constants';
import Input from '../UI/Input/Input';
import './TodoFilter'

interface ITodoFilterProps {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const TodoFilter = (({ filter, setFilter }: ITodoFilterProps): JSX.Element => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    return (
        <div className='todo-filter-wrapper'>
            <form className='todo-filter-form'>
                <Input 
                    id='allTodos' 
                    type='radio' 
                    label='Все TODO' 
                    className='todo-filter-form__input'
                    onChange={handleChange}
                    value={TODO_FILTER.All}
                    checked={filter === TODO_FILTER.All}
                />
                <Input 
                    id='completedTodos' 
                    type='radio' 
                    label='Сделанные TODO' 
                    className='todo-filter-form__input'
                    onChange={handleChange}
                    value={TODO_FILTER.Completed}
                    checked={filter === TODO_FILTER.Completed}
                />
                <Input 
                    id='IncompletedTodos' 
                    type='radio' 
                    label='Не сделанные TODO' 
                    className='todo-filter-form__input'
                    onChange={handleChange}
                    value={TODO_FILTER.Incompleted}
                    checked={filter === TODO_FILTER.Incompleted}
                />
            </form>
        </div>
    );
});

export default TodoFilter;
