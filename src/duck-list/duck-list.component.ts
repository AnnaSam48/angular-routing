import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duck-list',
  template: `
  <h3>Duck List</h3>
  <ul class="items">
    <li (click)="onSelect(duck)"
      *ngFor="let duck of ducks"> 
      <span class="badge">{{duck.id}}</span>{{duck.name}}
    </li>
  </ul>
  `,
  styles: []
})
export class DuckListComponent implements OnInit {

  ducks =[
    {"id": 1, "name": "Angular Duck"},
    {"id": 2, "name": "Deep Duck"},
    {"id": 3, "name": "Deeper Duck"},
    {"id": 4, "name": "Ducky Duck"},
    {"id": 5, "name": "Donald Duck"}

  ]

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate([duck.id], { relativeTo: this.route });
  }
  onSelect(duck){}

}