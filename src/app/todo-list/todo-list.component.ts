import { Component } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  tasks: string[] = [];

  addTask(newTask: string) {
    this.tasks.push(newTask);
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
