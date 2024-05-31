import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-color-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './favorite-color-reactive.component.html',
  styleUrl: './favorite-color-reactive.component.scss'
})
export class FavoriteColorReactiveComponent implements OnInit {
  colorControl = new FormControl('')

  ngOnInit(): void {
    this.colorControl.setValue('Red')
  }

}
