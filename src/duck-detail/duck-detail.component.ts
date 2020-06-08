import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duck-detail',
  template: `
  <h3>You selected duck with id: {{duckId}}</h3>
  `,
  styles: []
})
export class DuckDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     let id= parseInt(this
    .route
    .snapshot
    .paramMap
    .get('id'));
    this.duckId=id;
  }

}