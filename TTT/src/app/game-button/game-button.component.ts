import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.css']
})
export class GameButtonComponent implements OnInit {

  @Input() value: 'X' | 'O'

  constructor() { }

  ngOnInit(): void {
  }



}
