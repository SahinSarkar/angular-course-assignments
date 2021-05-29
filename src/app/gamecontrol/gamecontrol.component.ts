import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output() numberEmitEvent: EventEmitter<number> = new EventEmitter<number>();

  oddNumbers = [];
  evenNumbers = [];
  counter = 0;
  timer;

  constructor() {
  }

  ngOnInit(): void {
  }

  startGame() {
    this.timer = setInterval(() => {
      this.counter++;
      if (this.counter % 2 === 0) {
        this.evenNumbers.push(this.counter);
      } else {
        this.oddNumbers.push(this.counter);
      }
      this.numberEmitEvent.emit(this.counter);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }
}
