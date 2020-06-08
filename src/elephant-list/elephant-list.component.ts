import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-elephant-list',
  template: `
  <h3>Elephant List</h3>
  <ul class="items">
    <li (click)="onSelect(elephant)"
    *ngFor="let elephant of elephants">
      <span class="badge">{{elephant.id}}</span> {{elephant.name}}
    </li>
  </ul>
  `,
  styles: []
})
export class ElephantListComponent implements OnInit {

  elephants = [
    {"id": 1, "name": "Angular Elephant"},
    {"id": 2, "name": "Node Elephant"},
    {"id": 3, "name": "MongoDB Elephant"},
    {"id": 4, "name": "Ruby Elephant"},
    {"id": 5, "name": "Bootstrap Elephant"}
  ]
  constructor(private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onSelect(elephant){
     this.router.navigate([elephant.id], { relativeTo: this.route });
  }

}