import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

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

@Component({
  selector: 'app-list-http',
  templateUrl: './list-http.component.html',
  styleUrls: ['./list-http.component.css'],
})
export class ListHttpComponent implements OnInit {
  animals: AnimalList[] = [];
  posts: Post[] = [];

  constructor(private listService: ListService) {
    this.getAnimals();
    this.getPosts();
  }

  ngOnInit(): void {}

  getAnimals() {
    this.listService.getAll().subscribe((res) => (this.animals = res));
  }

  getPosts() {
    this.listService.getInformation().subscribe((res) => (this.posts = res));
  }
}
