import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './layout/header/header';
import { AppFooter } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, AppFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
