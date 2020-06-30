import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  currentPlayer: string;
  xIsNext: boolean;
  result: string;
  squares = Array(9)


  

  constructor() { }

  ngOnInit(): void {
  }

}
