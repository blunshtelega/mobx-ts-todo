import { makeObservable, observable, action, computed } from 'mobx';

export interface ITodo {
    id: number;
    taskTitle: string;
    isDone: boolean;
}

export class TodoStore {
    public todos: ITodo[] = [
        {id: 1, taskTitle: 'Пересмотреть Большой Лебовски', isDone: false},
        {id: 2, taskTitle: 'Вернуть в backend ElasticStack', isDone: false},
        {id: 3, taskTitle: 'Не получить лишние детали при чистке ноутбука', isDone: true}
    ];

    constructor() {
        makeObservable(this, {
            todos: observable,
            deleteTodo: action,
            addTodo: action,
            toggleCompleted: action,
            updateTodo: action,
            completedTodos: computed,
            incompleteTodos: computed
        });
    };

    public addTodo = (todo: ITodo) => {
        this.todos.push(todo);
    };

    public deleteTodo = (id: number) => {
        const updatedTodos = this.todos.filter(todo => todo.id !== id);
        this.todos = updatedTodos;
    };
    
    public toggleCompleted = (id: number) => {
        const updatedTodos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone;
            } return todo;
        });
        this.todos = updatedTodos;
    };

    public updateTodo = (updatedTodo: ITodo) => {
        const updatedTodos = this.todos.map(todo => {
            if (todo.id === updatedTodo.id) {
                return { ...updatedTodo };
            } return todo;
        });
        this.todos = updatedTodos;
    };

    get completedTodos() {
        return this.todos.filter(todo => todo.isDone);
    };

    get incompleteTodos() {
        return this.todos.filter(todo => !todo.isDone);
    };
};
