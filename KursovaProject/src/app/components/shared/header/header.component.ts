import { LikedCoursesService } from './../../../services/liked-courses.service';
import { NAV_ITEMS } from './../../../constants/header.constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  nav_items = NAV_ITEMS;
  likedCoursesCount: number

  constructor(
    private router: Router,
    private likedCoursesService: LikedCoursesService
    ) {}

  ngOnInit(): void {
    this.getLikedCoursesLength();
  }

  private getLikedCoursesLength(): void {
    this.likedCoursesService.likedCoursesLength$.subscribe((coursesLength: number) => {
      this.likedCoursesCount = coursesLength;
    })
  }

  navigateTo(item: any): void {
    this.router.navigate([item.path]);
  }

}
