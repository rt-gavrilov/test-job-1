import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewTodoComponent} from '../new-todo/new-todo.component';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog
  ) {
    this.updateTodos();
  }

  public async add() {
    const todo = await this.dialog.open(NewTodoComponent).afterClosed().toPromise();

    if (todo) {
      this.todoService.add(todo);
      this.updateTodos();
    }
  }

  private updateTodos() {
    this.todos = this.todoService.getTodos();
  }

  public remove(todo: Todo) {
    this.todoService.remove(todo);
  }

  public complete(todo: Todo) {
    todo.complete();
    this.todoService.flush();
  }

  public reject(todo: Todo) {
    todo.reject();
    this.todoService.flush();
  }
}
