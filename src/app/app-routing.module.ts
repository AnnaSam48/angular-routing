import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuckListComponent } from '../duck-list/duck-list.component';
import { ElephantListComponent } from '../elephant-list/elephant-list.component';
import { ElephantDetailComponent  } from 
'../elephant-detail/elephant-detail.component';
import { PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes : Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {path: 'ducks', component: DuckListComponent},
  {path: 'elephants', component: ElephantListComponent},
  {path: 'elephants/:id', component: ElephantDetailComponent},
  {path: "**", component: PageNotFoundComponent} 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DuckListComponent,
                              ElephantListComponent,
                              ElephantDetailComponent,
                              PageNotFoundComponent]