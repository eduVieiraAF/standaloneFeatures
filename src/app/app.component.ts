import { HeaderComponent } from './core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent
  ],

})
export class AppComponent {
  title = 'standaloneFeatures';
}
