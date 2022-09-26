import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface AnimalList {
  id: number;
  name: string;
  type: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';
  private apiUrlPosts = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // normalmente seria uma requisição, mas isso é pra exemplificar
  remove(animals: Animal[], animal: Animal): Animal[] {
    return animals.filter((a) => animal.name !== a.name);
  }

  // normalmente seria uma requisição, mas isso é pra exemplificar
  removeAnimalList(id: number) {
    return this.http.delete<AnimalList>(`${this.apiUrl}/${id}`);
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

  getAll(): Observable<AnimalList[]> {
    return this.http.get<AnimalList[]>(this.apiUrl);
  }

  getInformation(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrlPosts);
  }

  // aqui fazemos a requisição de acordo com o id que chegar
  getItem(id: number): Observable<AnimalList> {
    return this.http.get<AnimalList>(`${this.apiUrl}/${id}`);
  }
}
