import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-list-http',
  templateUrl: './list-http.component.html',
  styleUrls: ['./list-http.component.css'],
})
export class ListHttpComponent implements OnInit {
  animals: Animal[] = [];
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
