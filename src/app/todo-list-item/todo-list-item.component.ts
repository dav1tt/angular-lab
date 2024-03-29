import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss',
})
export class TodoListItemComponent {
  @Input() taskTitle = 'Learn Angular';

  @Output() taskCompleted = new EventEmitter<void>();
}
