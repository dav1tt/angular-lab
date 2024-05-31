import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-color-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './favorite-color-template.component.html',
  styleUrl: './favorite-color-template.component.scss'
})
export class FavoriteColorTemplateComponent {
  color = 'Blue'
} 
