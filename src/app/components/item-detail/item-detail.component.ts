import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

interface AnimalList {
  id: number;
  name: string;
  type: string;
  age: number;
}

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  animal?: AnimalList;

  // iremos iniciar o ActivatedRoute dentro de route.
  // é nele onde iremos pegar o id que esta na rota URL

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  ngOnInit(): void {}

  getAnimal() {
    // nessa função é onde pegamos o id que foi jogado na URL e ja convertemos pra number
    // id é o parametro que foi passado no arquivo de rota
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // criamos uma função no listService que recebe um id e faz a requisição via esse ID
    this.listService.getItem(id).subscribe((res) => (this.animal = res));
  }
}
