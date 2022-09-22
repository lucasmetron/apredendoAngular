import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''
  @Input() age:number = 0
  @Input() userData!: { email: string, role: string } 
  
  // a esclamação acima diz ao typescript q a variavel será incializada, 
  // fazendo com que não precisemos incializar agora.

  constructor() { }

  ngOnInit(): void {
  }

}
