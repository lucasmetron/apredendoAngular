import { Component } from '@angular/core';

interface Child{
  name: string
  age: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "Joaquim"
  
  age: number = 30

  userData = {
    email: 'Lucas@gmail.com',
    role: 'admin'
  }

  secondChild:Child = {
    name: 'Rafael',
    age: 36
  }

  title = 'moments';

  
}
