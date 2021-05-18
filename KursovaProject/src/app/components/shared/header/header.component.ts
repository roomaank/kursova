import { NAV_ITEMS } from './../../../constants/header.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nav_items = NAV_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
