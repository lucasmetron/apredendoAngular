import { Component, OnInit } from '@angular/core';

interface Carro {
  nome: string
  ano: number
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Lucas';
  age:number = 30
  job = "programador"
  hobbies : string[] = ['correr', 'estudar']
  carro: Carro = {
    nome: 'up',
    ano:2017
  }

  constructor() {}

  ngOnInit(): void {}
}
