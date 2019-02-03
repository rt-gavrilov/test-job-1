import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo;

  @Output() remove = new EventEmitter<Todo>();
  @Output() reject = new EventEmitter<Todo>();
  @Output() complete = new EventEmitter<Todo>();

  public handleComplete() {
    this.complete.emit(this.todo);
  }

  public handleReject() {
    this.reject.emit(this.todo);
  }

  public handleRemove() {
    this.remove.emit(this.todo);
  }
}
