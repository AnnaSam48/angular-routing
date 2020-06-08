import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuckListComponent } from '../duck-list/duck-list.component';
import { ElephantListComponent } from '../elephant-list/elephant-list.component';
import { PageNotFoundComponent} from '../page-not-found.component';

const routes : Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {path: 'ducks', component: DuckListComponent},
  {path: 'elephants', component: ElephantListComponent},
  {path: "**", component: PageNotFoundComponent} 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [DuckListComponent, ElephantListComponent, PageNotFoundComponent]