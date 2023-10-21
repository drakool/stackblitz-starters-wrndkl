import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication ,provideProtractorTestingSupport} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

//bootstrapApplication(App);
bootstrapApplication(AppComponent,
  {providers: [provideProtractorTestingSupport()]})
.catch(err => console.error(err));
