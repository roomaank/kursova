import { PHOTOS, ROOMS } from './../../../constants/about_us.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  photos = PHOTOS;
  rooms = ROOMS

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateTo(): void {
    this.router.navigate(['courses'])

  }

}
