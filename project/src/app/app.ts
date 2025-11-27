import { Component } from '@angular/core';
import { AppHeader } from './app-header/app-header';
import { AppFooter } from './app-footer/app-footer';
import { Checkbox } from './checkbox/checkbox';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet, */AppHeader, AppFooter, Checkbox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
