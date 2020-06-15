import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-elephant-list',
  template: `
  <h3>Elephant List</h3>
  <ul class="items">
    <li *ngFor="let elephant of elephants" [class.selected]="isSelected(elephant)" (click)="onSelect(elephant)">
      <span class="badge">{{elephant.id}}</span> {{elephant.name}}
    </li>
  </ul>
  `,
  styles: []
})
export class ElephantListComponent implements OnInit {

  public selectedId;

  elephants = [
    {"id": 1, "name": "AngElephant"},
    {"id": 2, "name": "Nodephant"},
    {"id": 3, "name": "Mongophant"},
    {"id": 4, "name": "RuElephant"},
    {"id": 5, "name": "BooElephant"}
  ]
  constructor(private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  onSelect(elephant){
   this.router.navigate([elephant.id], { relativeTo: this.route });
  }

  isSelected(elephant){
    return elephant.id === this.selectedId;
  }

}