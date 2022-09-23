import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  newName = '';
  newType = '';
  newAge = 0;

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

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos.`;
  }

  removeAnimal(animal: Animal) {
    console.log('removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  saveNewAnimal() {
    this.animals = this.listService.add(this.animals, {
      age: this.newAge,
      name: this.newName,
      type: this.newType,
    });
  }
}
