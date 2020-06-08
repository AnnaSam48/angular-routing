import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-elephant-detail',
  template: `
  <h3>You selected elephant with id: {{elephantId}}</h3>
  `,
  styles: []
})
export class ElephantDetailComponent implements OnInit {

  public elephantId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id= parseInt(this
    .route
    .snapshot
    .paramMap
    .get('id'));
    this.elephantId=id;
  }

}