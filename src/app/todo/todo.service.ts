import {Injectable} from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {

  private todos: Todo[];

  constructor() {
    this.todos = this.fetch();
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public add(todo: Todo) {
    this.todos.push(todo);
    this.flush();
  }

  public remove(todo: Todo) {
    const index = this.todos.findIndex(value => todo === value);
    this.todos.splice(index, 1);
    this.flush();
  }

  private fetch(): Todo[] {
    const raw = JSON.parse(
      localStorage.getItem('todos') || '[]'
    );

    return raw.map(value => Todo.fromJson(value));
  }

  public flush() {
    const json = JSON.stringify(
      this.todos.map(todo => todo.toJson())
    );

    localStorage.setItem('todos', json);
  }
}
