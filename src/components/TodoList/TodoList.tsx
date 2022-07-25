import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStore';
import TodoItem from '../TodoItem/TodoItem';
import TodoFilter from '../TodoFilter/TodoFilter';
import { TODO_FILTER } from '../../constants';

const TodoList = observer((): JSX.Element => {
    const { todoStore } = useStores();
    const [filter, setFilter] = useState(TODO_FILTER.All);

    return (
        <>
            <TodoFilter filter={filter} setFilter={setFilter} />
            <div className='todo-wrapper'>
                {filter === TODO_FILTER.All && 
                    <>
                        {todoStore.todos.map(todo => {
                            return <TodoItem key={todo.id} todo={todo} />
                        })}
                    </>
                }
                {filter === TODO_FILTER.Completed && 
                    <>
                        {todoStore.completedTodos.map(todo => {
                            return <TodoItem key={todo.id} todo={todo} />
                        })}
                    </>
                }
                {filter === TODO_FILTER.Incompleted && 
                    <>
                        {todoStore.incompleteTodos.map(todo => {
                            return <TodoItem key={todo.id} todo={todo} />
                        })}
                    </>
                }
            </div>
        </>
    );
});

export default TodoList;
