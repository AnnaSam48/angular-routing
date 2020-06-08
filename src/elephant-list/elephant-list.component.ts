import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elephant-list',
  templateUrl: './elephant-list.component.html',
  styleUrls: ['./elephant-list.component.css']
})
export class ElephantListComponent implements OnInit {

  departments = [
    {"id": 1, "name": "Angular Elephant"},
    {"id": 2, "name": "Node Elephant"},
    {"id": 3, "name": "MongoDB Elephant"},
    {"id": 4, "name": "Ruby Elephant"},
    {"id": 5, "name": "Bootstrap Elephant"}
  ]
  constructor() { }

  ngOnInit() {
  }

}