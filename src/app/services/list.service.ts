import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  // normalmente seria uma requisição, mas isso é pra exemplificar
  remove(animals: Animal[], animal: Animal): Animal[] {
    return animals.filter((a) => animal.name !== a.name);
  }

  // normalmente seria uma requisição, mas isso é pra exemplificar
  add(animals: Animal[], animal: Animal): Animal[] {
    let newArrayAnimals: Animal[] = animals;
    if (animal.name !== '' && animal.age !== 0 && animal.type !== '') {
      newArrayAnimals.push({
        name: animal.name,
        age: animal.age,
        type: animal.type,
      });
    }

    return newArrayAnimals;
  }
}
