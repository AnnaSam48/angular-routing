import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-duck-list',
  template: `
  <h3>Duck List</h3>
  <ul class="items">
    <li *ngFor="let duck of ducks" [class.selected]="isSelected(duck)"
      (click)="onSelect(duck)"> 
      <span class="badge">{{duck.id}}</span> {{duck.name}}
    </li>
  </ul>
  `,
  styles: []
})
export class DuckListComponent implements OnInit {

  public selectedId;

  ducks =[
    {"id": 1, "name": "AngDuck"},
    {"id": 2, "name": "Deep Duck"},
    {"id": 3, "name": "Deeper Duck"},
    {"id": 4, "name": "Ducky Duck"},
    {"id": 5, "name": "Donald Duck"}
  ]

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
     this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  onSelect(duck){
    this.router.navigate([duck.id], {relativeTo: this.route });
  }
   isSelected(duck){
    return duck.id === this.selectedId;
  }
}