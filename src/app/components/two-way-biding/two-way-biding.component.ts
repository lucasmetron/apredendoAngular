import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-biding',
  templateUrl: './two-way-biding.component.html',
  styleUrls: ['./two-way-biding.component.css'],
})
export class TwoWayBidingComponent implements OnInit {
  name: string = '';
  age: number = 0;

  constructor() {}

  ngOnInit(): void {}

  sendData(): void {
    console.log(this.name, this.age);
  }
}
