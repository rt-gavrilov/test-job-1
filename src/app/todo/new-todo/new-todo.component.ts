import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Todo} from '../todo';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialogRef<NewTodoComponent>
  ) {
    this.dialog.disableClose = true;

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      deadline: [null, Validators.required]
    });
  }

  public async submit() {
    this.dialog.close(
      new Todo(
        this.form.value['name'],
        this.form.value['description'],
        this.form.value['deadline']
      )
    );
  }
}
