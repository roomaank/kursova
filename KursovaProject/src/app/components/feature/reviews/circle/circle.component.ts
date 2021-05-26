import { Component, OnInit } from '@angular/core';
import {Circle} from "../../../../constants/circle";

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  circle = Circle;

  constructor() { }

  ngOnInit(): void {
  }

}
