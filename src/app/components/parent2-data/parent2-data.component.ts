import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent2-data',
  templateUrl: './parent2-data.component.html',
  styleUrls: ['./parent2-data.component.css']
})
export class Parent2DataComponent implements OnInit {

  @Input () secondChild!:{name:string, age:number} 

  constructor() { }

  ngOnInit(): void {
  }

}
