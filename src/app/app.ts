import { Component } from '@angular/core';
import { Portofolio } from './portofolio/portofolio';

@Component({
  selector: 'app-root',
  imports: [Portofolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
