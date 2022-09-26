import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListHttpComponent } from './components/list-http/list-http.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TwoWayBidingComponent } from './components/two-way-biding/two-way-biding.component';

// no routes abaixo onde fica especificado todas as rotas
const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListHttpComponent },
  // :id é o nome que dei para variavel, poderia ser qualquer um, desde que no this.route.snapshot.paramMap.get('nomeDaVariavel')
  // fosse correspondente
  { path: 'list/:id', component: ItemDetailComponent },
  { path: 'twoWayBind', component: TwoWayBidingComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
