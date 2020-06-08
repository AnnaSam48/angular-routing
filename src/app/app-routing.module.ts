import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuckListComponent } from '../duck-list/duck-list.component';
import { DuckDetailComponent } from
'../duck-detail/duck-detail.component';
import { ElephantListComponent } from '../elephant-list/elephant-list.component';
import { ElephantDetailComponent  } from 
'../elephant-detail/elephant-detail.component';
import { PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import { from } from 'rxjs';

const routes : Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {path: 'ducks', component: DuckListComponent},
  {path: 'elephants', component: ElephantListComponent},
  {path: 'elephants/:id', component: ElephantDetailComponent},
  {path: 'ducks/:id', component: DuckDetailComponent},
  {path: "**", component: PageNotFoundComponent} 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DuckListComponent,
                              DuckDetailComponent,
                              ElephantListComponent,
                              ElephantDetailComponent,
                              PageNotFoundComponent]