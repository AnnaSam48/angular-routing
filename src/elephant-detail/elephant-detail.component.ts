import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-elephant-detail',
  template: `
  <h3>You selected elephant with id: {{elephantId}}</h3>
  <a (click)="goPrevious()">Previous</a>
  <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class ElephantDetailComponent implements OnInit {

  public elephantId;
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    let id= parseInt(this
    .route
    .snapshot
    .paramMap
    .get('id'));
    this.elephantId=id;
  }

}