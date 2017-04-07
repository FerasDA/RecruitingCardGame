import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tiles = [
    {text: 'score', cols: 3, rows: 8, color: 'lightblue'},
    {text: 'card', cols: 9, rows: 4, color: 'lightgreen'},
    {text: 'console', cols: 9, rows: 3, color: 'lightpink'},
    {text: 'question', cols: 9, rows: 1, color: '#DDBDF1'},
  ];
}
