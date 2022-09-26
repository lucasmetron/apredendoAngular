import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { Parent2DataComponent } from './components/parent2-data/parent2-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBidingComponent } from './components/two-way-biding/two-way-biding.component';
import { RouterComponent } from './components/router/router.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    Parent2DataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmiterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBidingComponent,
    RouterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
