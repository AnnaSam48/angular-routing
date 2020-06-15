import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-duck-detail',
  template: `
  <h3>You selected duck with id: {{duckId}}</h3>
  <button (click)="goPrevious()">Previous</button>
  <button (click)="goNext()">Next</button>
  <div>
    <button (click)="goToDucks()">Back</button>
  </div>
  `,
  styles: []
})
export class DuckDetailComponent implements OnInit {

  public duckId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.duckId = id;
    });
    /* let id= parseInt(this
    .route
    .snapshot
    .paramMap
    .get('id'));
    this.duckId=id;
    */
  }

   goPrevious(){
    let previousId = this.duckId -1;
      this.router.navigate(['/ducks', previousId ]);
  }

  goNext(){
    let nextId = this.duckId +1;
      this.router.navigate(['/ducks', nextId ]);
  }

  goToDucks(){
    let selectedId = this.duckId ? this.duckId : null;
    this.router.navigate(['/ducks',{id: selectedId}]);
  }

}