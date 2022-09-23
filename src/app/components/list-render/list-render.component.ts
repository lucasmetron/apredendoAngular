import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frid', type: 'Dog', age: 5 },
    { name: 'Bob', type: 'Horse', age: 1 },
  ];

  animal: Animal = {
    name: 'Billy',
    type: 'Dog',
    age: 15,
  };

  animalDetails: string = '';

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos.`;
  }
}
