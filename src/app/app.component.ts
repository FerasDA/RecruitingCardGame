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
    {text: 'score', cols: 9, rows: 4, color: 'lightgreen'},
    {text: 'score', cols: 9, rows: 3, color: 'lightpink'},
    {text: 'score', cols: 9, rows: 1, color: '#DDBDF1'},
  ];
}
