import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tiles = [
    {text: 'score', cols: 1, rows: 8, color: 'lightblue'},
    {text: 'card', cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'console', cols: 3, rows: 3, color: 'lightpink'},
    {text: 'question', cols: 3, rows: 2, color: '#DDBDF1'},
  ];
}
