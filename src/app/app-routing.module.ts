import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuckListComponent } from '../duck-list/duck-list.component';
import { ElephantListComponent } from '../elephant-list/elephant-list.component';

const routes : Routes = [
  {path: 'ducks', component: DuckListComponent},
  {path: 'elephants', component: ElephantListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [DuckListComponent, ElephantListComponent]