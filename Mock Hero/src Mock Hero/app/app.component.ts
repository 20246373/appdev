import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  import: []
})
export class AppComponent {
  title = 'my-angular-app';
  myName = 'Adrian Marc C. Bencila'
}
