import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-elephant-detail',
  template: `
  <h3>You selected elephant with id: {{elephantId}}</h3>
  <button (click)="goPrevious()">Previous</button>
  <button (click)="goNext()">Next</button>
  `,
  styles: []
})
export class ElephantDetailComponent implements OnInit {

  public elephantId;
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.elephantId = id;
    });
    /*let id= parseInt(this
    .route
    .snapshot
    .paramMap
    .get('id'));
    this.elephantId=id;
    */
  }

  goPrevious(){
    let previousId = this.elephantId -1;
      this.router.navigate(['/elephants', previousId ]);
  }

  goNext(){
    let nextId = this.elephantId +1;
      this.router.navigate(['/elephants', nextId ]);
  }

}