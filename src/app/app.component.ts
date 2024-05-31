import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CounterComponent } from './counter/counter.component';
import { RandomNameGeneratorComponent } from './random-name-generator/random-name-generator.component';
import { CardComponent } from './card/card.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { HighlightDirective } from './highlight.directive';
import { HeroService } from './hero.service';
import { FavoriteColorTemplateComponent } from './favorite-color-template/favorite-color-template.component';
import { FavoriteColorReactiveComponent } from './favorite-color-reactive/favorite-color-reactive.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoListComponent,
    CounterComponent,
    RandomNameGeneratorComponent,
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
    HighlightDirective,
    FavoriteColorTemplateComponent,
    FavoriteColorReactiveComponent,
    ProfileEditorComponent,
    HeroFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  heroes: string[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  title = 'angular-lab';
  randomName = '';

  public onNameGenerated(name: string): void {
    this.randomName = name;
  }
}
