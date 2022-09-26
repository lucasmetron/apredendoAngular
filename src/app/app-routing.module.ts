import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TwoWayBidingComponent } from './components/two-way-biding/two-way-biding.component';

// no routes abaixo onde fica especificado todas as rotas
const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'twoWayBind', component: TwoWayBidingComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
