import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TodoListComponent} from './todo-list/todo-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {NewTodoComponent} from './new-todo/new-todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {TodoService} from './todo.service';
import {TodoComponent} from './todo/todo.component';
import {MatChipsModule} from '@angular/material/chips';


const routes: Routes = [
  {path: '', component: TodoListComponent},
];


@NgModule({
  declarations: [
    TodoListComponent,
    NewTodoComponent,
    TodoComponent
  ],
  entryComponents: [
    NewTodoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
