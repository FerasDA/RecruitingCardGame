import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
<<<<<<< HEAD

  constructor(private cardsService: CardsService) { }

  // cards = this.cardsService.getCards();
=======
  
  cards;
  constructor(private cardsService: CardsService) { 
  }
>>>>>>> 2a6c96bd64f8084c5dc2e20b9d5df104c62fea36

  ngOnInit() {
    this.cardsService.getCardsContainingStrings().then(x => this.cards = x);
  }

}
